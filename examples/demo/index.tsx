import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  Query, Builder, Utils, 
  //types:
  ImmutableTree, Config, BuilderProps, JsonTree, JsonLogicTree, ActionMeta, Actions
} from "react-awesome-query-builder";
import throttle from "lodash/throttle";
import _ from 'lodash';

import loadConfig from "./config";
import loadResultConfig from "./result_config";

import loadedInitValue from "./init_value";
import loadedResultInitValue from "./result_init_value";

import loadedInitLogic from "./init_logic";
import Immutable from "immutable";
import clone from "clone";

const stringify = JSON.stringify;
const {elasticSearchFormat, queryBuilderFormat, jsonLogicFormat, queryString, _mongodbFormat, _sqlFormat, _spelFormat, getTree, checkTree, loadTree, uuid, loadFromJsonLogic, loadFromSpel, isValidTree} = Utils;
const preStyle = { backgroundColor: "darkgrey", margin: "10px", padding: "10px" };
const preErrorStyle = { backgroundColor: "lightpink", margin: "10px", padding: "10px" };

const initialSkin = window._initialSkin || "antd";
const emptyInitValue: JsonTree = {id: uuid(), type: "group"};
const loadedConfig = loadConfig(initialSkin) as Config;
const loadedResultConfig = loadResultConfig(initialSkin) as Config;

let initValue: JsonTree = loadedInitValue && Object.keys(loadedInitValue).length > 0 ? loadedInitValue as JsonTree : emptyInitValue;

let initResultValue: JsonTree = loadedResultInitValue && Object.keys(loadedResultInitValue).length > 0 ? loadedResultInitValue as JsonTree : emptyInitValue;


// const initLogic: JsonLogicTree = loadedInitLogic && Object.keys(loadedInitLogic).length > 0 ? loadedInitLogic as JsonLogicTree : undefined;
let initTree: ImmutableTree;
let initResultTree: ImmutableTree;

initTree = checkTree(loadTree(initValue), loadedConfig);

initResultTree = checkTree(loadTree(initResultValue), loadedResultConfig);

// initTree = checkTree(loadFromJsonLogic(initLogic, loadedConfig), loadedConfig); // <- this will work same  


// Trick to hot-load new config when you edit `config.tsx`
// const updateEvent = new CustomEvent<CustomEventDetail>("update", { detail: {
//   config: loadedConfig,
//   _initTree: initTree,
//   _initValue: initValue,
// } });
// window.dispatchEvent(updateEvent);

declare global {
  interface Window {
    _initialSkin: string;
  }
}

// interface CustomEventDetail {
//   config: Config;
//   _initTree: ImmutableTree;
//   _initValue: JsonTree;
// }

interface DemoQueryBuilderState {
  tree: ImmutableTree;
  tree2: ImmutableTree;
  config: Config;
  config2: Config;
  skin: string,
  spelStr: string;
  spelErrors: Array<string>;
}

interface DemoQueryBuilderMemo {
  immutableTree?: ImmutableTree,
  config?: Config,
  _actions?: Actions,
}


const DemoQueryBuilder: React.FC = () => {

  const memo: React.MutableRefObject<DemoQueryBuilderMemo> = useRef({});

  const [state, setState] = useState<DemoQueryBuilderState>({
    tree: initTree, 
    tree2: initResultTree,
    config: loadedConfig,
    config2:loadedResultConfig,
    skin: initialSkin,
    spelStr: "",
    spelErrors: [] as Array<string>
  });

  // useEffect(() => {
  //   window.addEventListener("update", onConfigChanged);
  //   return () => {
  //     window.removeEventListener("update", onConfigChanged);
  //   };
  // });


  // const onConfigChanged = (e: Event) => {
  //   const {detail: {config, _initTree, _initValue}} = e as CustomEvent<CustomEventDetail>;
  //   console.log("Updating config...");
  //   setState({
  //     ...state,
  //     config,
  //   });
  //   initTree = _initTree;
  //   initValue = _initValue;
  // };

  const onChangeSpelStr = (e: React.ChangeEvent<HTMLInputElement>) => {
    const spelStr = e.target.value;
    setState({
      ...state,
      spelStr
    });
  };

  const importFromSpel = () => {
    const [tree, spelErrors] = loadFromSpel(state.spelStr, state.config);
    setState({
      ...state, 
      tree: tree ? checkTree(tree, state.config) : state.tree,
      spelErrors
    });
  };

  
  const renderBuilder = useCallback((bprops: BuilderProps) => {
    memo.current._actions = bprops.actions;
    return (
      <div className="query-builder-container" style={{padding: "5px"}}>
        <div className="query-builder qb-lite">
          <Builder {...bprops} />
        </div>
      </div>
    );
  }, []);
  
  const onChange = useCallback((immutableTree: ImmutableTree, config: Config, actionMeta?: ActionMeta) => {
    if (actionMeta)
      console.info(actionMeta);
    memo.current.immutableTree = immutableTree;
    memo.current.config = config;
    updateResult();
  }, []);

  const updateResult = throttle(() => {
    setState(prevState => ({...prevState, tree: memo.current.immutableTree, config: memo.current.config}));
  }, 100);



  const onChange2 = useCallback((immutableTree: ImmutableTree, config: Config, actionMeta?: ActionMeta) => {
    if (actionMeta)
      console.info(actionMeta);
    memo.current.immutableTree = immutableTree;
    memo.current.config = config;
    updateResult2();
  }, []);

  const updateResult2 = throttle(() => {
    setState(prevState => ({...prevState, tree2: memo.current.immutableTree, config2: memo.current.config}));
  }, 100);


  const renderResult = ({tree: immutableTree,tree2: immutableTree2, config: config,config2: config2} : {tree: ImmutableTree,tree2: ImmutableTree, config: Config,config2: Config}) => {
    const isValid = isValidTree(immutableTree);
    const treeJs = getTree(immutableTree);
    const {logic, data: logicData, errors: logicErrors} = jsonLogicFormat(immutableTree, config);
    const [spel, spelErrors] = _spelFormat(immutableTree, config);
    const queryStr = queryString(immutableTree, config);

    const queryStr2 = queryString(immutableTree2, config2);

    const humanQueryStr = queryString(immutableTree, config, true);
    const [sql, sqlErrors] = _sqlFormat(immutableTree, config);
    const [mongo, mongoErrors] = _mongodbFormat(immutableTree, config);
    const elasticSearch = elasticSearchFormat(immutableTree, config);

    const expr = (queryStr.indexOf("FOR") == -1 ? "IF " : "") + queryStr 
       + " THEN " + queryStr2?.replaceAll("results.","").replaceAll("AND",";").replaceAll("(","").replaceAll(")","");

    return (
      <div>
        {isValid ? null : <pre style={preErrorStyle}>{"Tree has errors"}</pre>}
        
        <hr/>
        <div>
        规则表达式: 
          <pre style={preStyle}>
            {expr}
            {/* {stringify(queryStr, undefined, 2)} */}
          </pre>
        </div>
        <hr/>
        
        {/* <hr/>
        <div>
        sqlFormat: 
          { sqlErrors.length > 0 
            && <pre style={preErrorStyle}>
              {stringify(sqlErrors, undefined, 2)}
            </pre> 
          }
          <pre style={preStyle}>
            {stringify(sql, undefined, 2)}
          </pre>
        </div>
        <hr/> */}
        {/* <div>
          <a href="http://jsonlogic.com/play.html" target="_blank" rel="noopener noreferrer">jsonLogicFormat</a>: 
          { logicErrors.length > 0 
            && <pre style={preErrorStyle}>
              {stringify(logicErrors, undefined, 2)}
            </pre> 
          }
          { !!logic
            && <pre style={preStyle}>
              {"// Rule"}:<br />
              {stringify(logic, undefined, 2)}
              <br />
              <hr />
              {"// Data"}:<br />
              {stringify(logicData, undefined, 2)}
            </pre>
          }
        </div>
        <hr/>
        <div>
        mongodbFormat: 
          { mongoErrors.length > 0 
            && <pre style={preErrorStyle}>
              {stringify(mongoErrors, undefined, 2)}
            </pre> 
          }
          <pre style={preStyle}>
            {stringify(mongo, undefined, 2)}
          </pre>
        </div>
        <hr/>
        <div>
        elasticSearchFormat: 
          <pre style={preStyle}>
            {stringify(elasticSearch, undefined, 2)}
          </pre>
        </div>
        <hr/>
         */}
         
      <div>
        IF可视化数据结构: 
          <pre style={preStyle}>
            {/* {stringify(queryBuilderFormat(immutableTree, config), undefined, 2)} */}
            {stringify(getTree(immutableTree), undefined, 2)}
          </pre>
      </div>
      <div>
        THEN可视化数据结构: 
          <pre style={preStyle}>
            {/* {stringify(queryBuilderFormat(immutableTree2, config2), undefined, 2)} */}
            {stringify(getTree(immutableTree2), undefined, 2)}
          </pre>
      </div>
    </div>
    );
  };

  return (
    <div style={{padding: "10px"}}>
      {/* <div>
        <select value={state.skin} onChange={changeSkin}>
          <option key="vanilla">vanilla</option>
          <option key="antd">antd</option>
          <option key="material">material</option>
          <option key="mui">mui</option>
          <option key="bootstrap">bootstrap</option>
        </select>
        <button onClick={resetValue}>reset</button>
        <button onClick={clearValue}>clear</button>
        <button onClick={runActions}>run actions</button>
        <button onClick={validate}>validate</button>
        <button onClick={switchShowLock}>show lock: {state.config.settings.showLock ? "on" : "off"}</button>
      </div> */}
      
      如果
      <Query
        {...loadedConfig}
        value={initTree}
        onChange={onChange}
        renderBuilder={renderBuilder}
      />

      那么
      <Query
        {...loadedResultConfig}
        value={initResultTree}
        onChange={onChange2}
        renderBuilder={renderBuilder}
      />
{/* 
      <div className="query-import-spel">
        SpEL:
        <input type="text" size={150} value={state.spelStr} onChange={onChangeSpelStr} />
        <button onClick={importFromSpel}>import</button>
        <br />
        { state.spelErrors.length > 0 
            && <pre style={preErrorStyle}>
              {stringify(state.spelErrors, undefined, 2)}
            </pre> 
        }
      </div> */}

      <div className="query-builder-result">
        {renderResult(state)}
      </div>
    </div>
  );
};


export default DemoQueryBuilder;
