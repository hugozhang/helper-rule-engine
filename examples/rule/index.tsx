import React, { useState, useEffect,useCallback,useRef } from 'react';
import { Table, Spin, Form, Input, Button, Select,Modal,message ,Tooltip} from 'antd';
import type { ColumnsType } from 'antd/es/table';

import 'antd/dist/antd.css';
import http from './http';

// const DemoQueryBuilder = React.lazy(() => import("../rule_win"));
import DemoQueryBuilder from '../rule_win/index';
import { set } from 'lodash';


const { Column } = Table;
const { Option } = Select;


const initialTree = {
  ifPartConfig: '{"type":"group","id":"9a99988a-0123-4456-b89a-b1607f326fd8","children1":[{"type":"rule_group","properties":{"conjunction":"AND","not":false,"field":"cars","mode":"array","operator":"for_in","value":[],"valueSrc":[],"valueType":[]},"id":"a98ab9b9-cdef-4012-b456-71607f326fd9","children1":[{"type":"rule","id":"898aa8aa-0123-4456-b89a-b18fa53001b1","properties":{"field":"cars.vendor","operator":"select_equals","value":["Toyota"],"valueSrc":["value"],"valueError":[null],"valueType":["select"]}},{"type":"rule","id":"aaa8a8b9-cdef-4012-b456-718fa53015a0","properties":{"field":"cars.year","operator":"equal","value":[1990],"valueSrc":["value"],"valueError":[null],"valueType":["number"]}},{"type":"rule","id":"8889a9b9-4567-489a-bcde-f18fb7c614ce","properties":{"field":"cars.firstName","operator":"equal","value":["user.login"],"valueSrc":["field"],"valueError":[null],"valueType":["text"]}}]},{"type":"rule","id":"a8888a98-4567-489a-bcde-f18fa52ff6ab","properties":{"field":"user.firstName","operator":"equal","value":["a"],"valueSrc":["value"],"valueError":[null],"valueType":["text"]}},{"type":"group","id":"98baa989-4567-489a-bcde-f18fa5303f20","properties":{"conjunction":"OR","not":false},"children1":[{"type":"rule","id":"889b9889-0123-4456-b89a-b18fa5303f21","properties":{"field":"user.firstName","operator":"equal","value":["a"],"valueSrc":["value"],"valueError":[null],"valueType":["text"]}},{"type":"rule","id":"998bb88b-cdef-4012-b456-718fa5305541","properties":{"field":"user.login","operator":"equal","value":["b"],"valueSrc":["value"],"valueError":[null],"valueType":["text"]}}]}],"properties":{"conjunction":"AND","not":false}}',
  thenPartConfig: '{"type":"group","id":"9a99988a-0123-4456-b89a-b1607f326fd8","children1":[{"type":"rule_group","id":"8bb89bb9-4567-489a-bcde-f18fa52f4c9b","properties":{"conjunction":"AND","not":false,"field":"results"},"children1":[{"type":"rule","id":"99a9baab-0123-4456-b89a-b18fa52f5162","properties":{"field":"results.product1","operator":"single_equal","value":["a"],"valueSrc":["value"],"valueError":[null],"valueType":["text"]}},{"type":"rule","id":"b98898aa-cdef-4012-b456-718fa52f5e3e","properties":{"field":"results.product2","operator":"single_equal","value":["b"],"valueSrc":["value"],"valueError":[null],"valueType":["text"]}}]}]}',
};

// 示例数据
const demoData = [
  {
    key: '1',
    id: 1,
    ruleName: '表达式名称1',
    exprSQL:"FOR $car IN cars IF $car.vendor == 'Toyota' AND $car.year == 1990 AND $car.firstName == user.login AND user.firstName == 'a' AND (user.firstName == 'a' OR user.login == 'b') THEN product1 = 'a' ; product2 = 'b'",
    ifPartConfig: '{"type":"group","id":"9a99988a-0123-4456-b89a-b1607f326fd8","children1":[{"type":"rule_group","properties":{"conjunction":"AND","not":false,"field":"cars","mode":"array","operator":"for_in","value":[],"valueSrc":[],"valueType":[]},"id":"a98ab9b9-cdef-4012-b456-71607f326fd9","children1":[{"type":"rule","id":"898aa8aa-0123-4456-b89a-b18fa53001b1","properties":{"field":"cars.vendor","operator":"select_equals","value":["Toyota"],"valueSrc":["value"],"valueError":[null],"valueType":["select"]}},{"type":"rule","id":"aaa8a8b9-cdef-4012-b456-718fa53015a0","properties":{"field":"cars.year","operator":"equal","value":[1990],"valueSrc":["value"],"valueError":[null],"valueType":["number"]}},{"type":"rule","id":"8889a9b9-4567-489a-bcde-f18fb7c614ce","properties":{"field":"cars.firstName","operator":"equal","value":["user.login"],"valueSrc":["field"],"valueError":[null],"valueType":["text"]}}]},{"type":"rule","id":"a8888a98-4567-489a-bcde-f18fa52ff6ab","properties":{"field":"user.firstName","operator":"equal","value":["a"],"valueSrc":["value"],"valueError":[null],"valueType":["text"]}},{"type":"group","id":"98baa989-4567-489a-bcde-f18fa5303f20","properties":{"conjunction":"OR","not":false},"children1":[{"type":"rule","id":"889b9889-0123-4456-b89a-b18fa5303f21","properties":{"field":"user.firstName","operator":"equal","value":["a"],"valueSrc":["value"],"valueError":[null],"valueType":["text"]}},{"type":"rule","id":"998bb88b-cdef-4012-b456-718fa5305541","properties":{"field":"user.login","operator":"equal","value":["b"],"valueSrc":["value"],"valueError":[null],"valueType":["text"]}}]}],"properties":{"conjunction":"AND","not":false}}',
    thenPartConfig: '{"type":"group","id":"9a99988a-0123-4456-b89a-b1607f326fd8","children1":[{"type":"rule_group","id":"8bb89bb9-4567-489a-bcde-f18fa52f4c9b","properties":{"conjunction":"AND","not":false,"field":"results"},"children1":[{"type":"rule","id":"99a9baab-0123-4456-b89a-b18fa52f5162","properties":{"field":"results.product1","operator":"single_equal","value":["a"],"valueSrc":["value"],"valueError":[null],"valueType":["text"]}},{"type":"rule","id":"b98898aa-cdef-4012-b456-718fa52f5e3e","properties":{"field":"results.product2","operator":"single_equal","value":["b"],"valueSrc":["value"],"valueError":[null],"valueType":["text"]}}]}]}',
  },
  {
    key: '2',
    id: 2,
    ruleName: '表达式名称2',
    exprSQL:"FOR $car IN cars IF $car.vendor == 'Toyota' AND $car.year == 1990 AND $car.firstName == user.login AND user.firstName == 'a' AND (user.firstName == 'a' OR user.login == 'b') THEN product1 = 'a' ; product2 = 'b'",
    ifPartConfig: '{"type":"group","id":"9a99988a-0123-4456-b89a-b1607f326fd8","children1":[{"type":"rule_group","properties":{"conjunction":"AND","not":false,"field":"cars","mode":"array","operator":"for_in","value":[],"valueSrc":[],"valueType":[]},"id":"a98ab9b9-cdef-4012-b456-71607f326fd9","children1":[{"type":"rule","id":"898aa8aa-0123-4456-b89a-b18fa53001b1","properties":{"field":"cars.vendor","operator":"select_equals","value":["Toyota"],"valueSrc":["value"],"valueError":[null],"valueType":["select"]}},{"type":"rule","id":"aaa8a8b9-cdef-4012-b456-718fa53015a0","properties":{"field":"cars.year","operator":"equal","value":[1990],"valueSrc":["value"],"valueError":[null],"valueType":["number"]}},{"type":"rule","id":"8889a9b9-4567-489a-bcde-f18fb7c614ce","properties":{"field":"cars.firstName","operator":"equal","value":["user.login"],"valueSrc":["field"],"valueError":[null],"valueType":["text"]}}]},{"type":"rule","id":"a8888a98-4567-489a-bcde-f18fa52ff6ab","properties":{"field":"user.firstName","operator":"equal","value":["a"],"valueSrc":["value"],"valueError":[null],"valueType":["text"]}},{"type":"group","id":"98baa989-4567-489a-bcde-f18fa5303f20","properties":{"conjunction":"OR","not":false},"children1":[{"type":"rule","id":"889b9889-0123-4456-b89a-b18fa5303f21","properties":{"field":"user.firstName","operator":"equal","value":["a"],"valueSrc":["value"],"valueError":[null],"valueType":["text"]}},{"type":"rule","id":"998bb88b-cdef-4012-b456-718fa5305541","properties":{"field":"user.login","operator":"equal","value":["b"],"valueSrc":["value"],"valueError":[null],"valueType":["text"]}}]}],"properties":{"conjunction":"AND","not":false}}',
    thenPartConfig: '{"type":"group","id":"9a99988a-0123-4456-b89a-b1607f326fd8","children1":[{"type":"rule_group","id":"8bb89bb9-4567-489a-bcde-f18fa52f4c9b","properties":{"conjunction":"AND","not":false,"field":"results"},"children1":[{"type":"rule","id":"99a9baab-0123-4456-b89a-b18fa52f5162","properties":{"field":"results.product1","operator":"single_equal","value":["a"],"valueSrc":["value"],"valueError":[null],"valueType":["text"]}},{"type":"rule","id":"b98898aa-cdef-4012-b456-718fa52f5e3e","properties":{"field":"results.product2","operator":"single_equal","value":["b"],"valueSrc":["value"],"valueError":[null],"valueType":["text"]}}]}]}',
  },
];


interface IfThenConfigProps {
  ifPartConfig?:string;
  thenPartConfig?:string;
}



const TableWithRemoteData = () => {

  const [state, setState] = useState({
    data: [],
    currentRecordIdx: null,
    tableLoading: false,
    sqlExpr: null,
    pagination: { current: 1, pageSize: 10, total: 0 },
    ifPartConfig: null,
    thenPartConfig: null,
    title: '',
    isAdd : false,
    isModalOpen: false,
  });


  const childRef = useRef(null);

  // 表格列的配置
  const columns = [
    {
      title: '序号ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '规则名称',
      dataIndex: 'ruleName',
      key: 'ruleName',
    },
    {
      title: '规则表达式',
      dataIndex: 'exprSQL',
      key: 'exprSQL',
      ellipsis: {
        showTitle: false,
      },
      render: (exprSQL:any) => (
        <Tooltip placement="topLeft" title={exprSQL}>
          {exprSQL}
        </Tooltip>
      ),
    },
    {
      title: 'if部分UI配置',
      dataIndex: 'ifPartConfig',
      key: 'ifPartConfig',
      ellipsis: {
        showTitle: false,
      },
      render: (ifPartConfig:any) => (
        <Tooltip placement="topLeft" title={ifPartConfig}>
          {ifPartConfig}
        </Tooltip>
      ),
    },
    {
      title: 'then部分UI配置',
      dataIndex: 'thenPartConfig',
      key: 'thenPartConfig',
      ellipsis: {
        showTitle: false,
      },
      render: (thenPartConfig:any) => (
        <Tooltip placement="topLeft" title={thenPartConfig}>
          {thenPartConfig}
        </Tooltip>
      ),
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: (value:any, record:any, index:any) => <Button type="primary" onClick={() => editModal(value,index)}>编辑 {`${value.id}`}</Button>,
    },
  ];

  const loadData = async (params : any) => {
    setState(prevState => ({
      ...prevState,
      tableLoading: true
    }));

    try {
      
      // const r = await http.post('/rule/list', { params });
      
      // const result = {
      //   list: r.data.rows,
      //   pagination: {
      //     total: r.data.total,
      //   },
      // };

      const result = {
        list: demoData,
        pagination: {
          total: 2,
        },
      };

      // setData(result.list);
      // setPagination({
      //   ...pagination,
      //   total: result.pagination.total,
      // });
     
      setState(prevState => ({
        ...prevState,
        data: [...result.list],
        pagination: {
          ...prevState.pagination,
          current: result.pagination.total,
        },
      }));


    } finally {
      setState(prevState => ({
      ...prevState,
      tableLoading: false
    }));
    }
  };

  useEffect(() => {
    loadData({});
  }, []);

  const handleTableChange = (newPagination : any) => {
    // setPagination(newPagination);
    setState(prevState => ({
      ...prevState,
      pagination: {
        ...newPagination,
      },
    }));
    loadData({});
  };

  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    loadData({ ...values });
  };



  const showModal = () => {
    // setIsModalOpen(true);
    // setIsAdd(true);
    // setTitle("添加规则");
    // setIfPartConfig(initialTree.ifPartConfig);
    // setThenPartConfig(initialTree.thenPartConfig);
    setState(prevState => ({
      ...prevState,
      isModalOpen: true,
      isAdd: true,
      title: "添加规则",
      ifPartConfig: initialTree.ifPartConfig,
      thenPartConfig: initialTree.thenPartConfig,
    }));
  };

  const editModal = (value:IfThenConfigProps,index:number) => {
    // setIsAdd(false);
    // setIsModalOpen(true);
    // setTitle("编辑规则");
    // setCurrentRecordIdx(index);
    // setIfPartConfig(value.ifPartConfig);
    // setThenPartConfig(value.thenPartConfig);
    setState(prevState => ({
      ...prevState,
      isModalOpen: true,
      isAdd: false,
      title: "编辑规则",
      currentRecordIdx: index,
      ifPartConfig: value.ifPartConfig,
      thenPartConfig: value.thenPartConfig
    }));
  };


  const handleOk = () => {
    const {exprSQL,ifPartConfig,thenPartConfig} = childRef.current.test();
    if(state.isAdd) {
      const newData = [...state.data,{
        id: state.data.length + 1,
        key: state.data.length + 1,
        ruleName:"表达式名称" + (state.data.length + 1),
        exprSQL : exprSQL,
        ifPartConfig: ifPartConfig,
        thenPartConfig: thenPartConfig
      }];
      // setData(newData);
      setState(prevState => ({
        ...prevState,
        data: [...newData],
      }));
    } else {
      const updatedData = state.data.map((item,index) => {
        if (index === state.currentRecordIdx) {
          return { ...item, ifPartConfig:ifPartConfig,thenPartConfig:thenPartConfig,exprSQL:exprSQL};
        }
        return item;
      });
      // setData(updatedData);
      setState(prevState => ({
        ...prevState,
        data: [...updatedData],
      }));
    }
    setState(prevState => ({
      ...prevState,
      isModalOpen: false,
    }));
  };

  const handleCancel = () => {
    setState(prevState => ({
      ...prevState,
      isModalOpen: false,
    }));
  };

  console.info(123)

  return (
    <div>
      <div style={{padding: "10px"}}>
      <Form form={form} layout="inline" onFinish={onFinish}>
        <Form.Item label="规则名称" name="ruleName">
          <Input placeholder="输入规则名称" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" >查询</Button>
        </Form.Item>
      </Form>
      </div>
      <Button type="primary" onClick={showModal} htmlType="submit" style={{ marginBottom: 16 }}>
        添加规则
      </Button>
      <Spin spinning={state.tableLoading}>
        <Table
          bordered
          columns={columns}
          dataSource={state.data}
          pagination={state.pagination}
          onChange={handleTableChange}
          rowKey={record => record.key}
        />
      </Spin>
      <Modal 
        bodyStyle={{
          height: "500px",overflowY: "auto"
        }}
        title={state.title} 
        width={1000} 
        open={state.isModalOpen} 
        destroyOnClose
        okText = '保存'
        cancelText = '关闭'
        onOk={handleOk} 
        onCancel={handleCancel}>
        <DemoQueryBuilder ref={childRef} ifPartConfig={state.ifPartConfig} thenPartConfig={state.thenPartConfig}/>
      </Modal>
    </div>
  );
};

export default TableWithRemoteData;