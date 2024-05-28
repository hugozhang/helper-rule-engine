import React, {useState, useCallback, useRef } from "react";
import {
  Query, Builder, Utils, 
  //types:
  ImmutableTree, Config, BuilderProps, JsonTree, ActionMeta, Actions
} from "react-awesome-query-builder";
import throttle from "lodash/throttle";
import _ from 'lodash';

import loadConfig from "./config";
import loadResultConfig from "./result_config";

import loadedInitValue from "./init_value";
import loadedResultInitValue from "./result_init_value";

const {queryString,  checkTree, loadTree, uuid,  isValidTree} = Utils;
const preErrorStyle = { backgroundColor: "lightpink", margin: "10px", padding: "10px" };

const initialSkin = window._initialSkin || "antd";
const emptyInitValue: JsonTree = {id: uuid(), type: "group"};
const loadedConfig = loadConfig(initialSkin) as Config;
const loadedResultConfig = loadResultConfig(initialSkin) as Config;

let initValue: JsonTree = loadedInitValue && Object.keys(loadedInitValue).length > 0 ? loadedInitValue as JsonTree : emptyInitValue;

let initResultValue: JsonTree = loadedResultInitValue && Object.keys(loadedResultInitValue).length > 0 ? loadedResultInitValue as JsonTree : emptyInitValue;


let initTree: ImmutableTree;
let initResultTree: ImmutableTree;

initTree = checkTree(loadTree(initValue), loadedConfig);

initResultTree = checkTree(loadTree(initResultValue), loadedResultConfig);

declare global {
  interface Window {
    _initialSkin: string;
  }
}



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


interface DemoQueryBuilderProps {
  onValueChange?:(value?: any) => any;
}

const DemoQueryBuilder: React.FC<DemoQueryBuilderProps> = (props) => {

  const memo: React.MutableRefObject<DemoQueryBuilderMemo> = useRef({});


  //调用父类方法
  const passValueToParent = (value:any) => {
    if (props.onValueChange) {
      props.onValueChange(value);
    }
  };


  const [state, setState] = useState<DemoQueryBuilderState>({
    tree: initTree, 
    tree2: initResultTree,
    config: loadedConfig,
    config2:loadedResultConfig,
    skin: initialSkin,
    spelStr: "",
    spelErrors: [] as Array<string>
  });

  
  const renderBuilder = useCallback((bprops: BuilderProps) => {
    memo.current._actions = bprops.actions;
    return (
      <div className="query-builder-container" style={{padding: "3px"}}>
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

    const queryStr = queryString(immutableTree, config);

    const queryStr2 = queryString(immutableTree2, config2);


    const queryStr2Processed = queryStr2?.replace(/AND/g, ";").replace(/results\./g, "").replace(/\(/g, "").replace(/\)/g, "");
    
    // 使用模板字符串构建最终的表达式
    const expr = `IF ${queryStr}${queryStr2Processed ? ` THEN ${queryStr2Processed}` : ''}`;
    passValueToParent(expr);

    return (
      <div>
        {isValid ? null : <pre style={preErrorStyle}>{"Tree has errors"}</pre>}     
      </div>
    );
  };

  return (
    <div style={{padding: "5px"}}>
      
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

      <div className="query-builder-result">
        {renderResult(state)}
      </div>
    </div>
  );
};


export default DemoQueryBuilder;
