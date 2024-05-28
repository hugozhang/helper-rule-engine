import React, { useState, useEffect,useCallback } from 'react';
import { Table, Spin, Form, Input, Button, Select,Modal,message } from 'antd';
import 'antd/dist/antd.css';
import http from './http';

const DemoQueryBuilder = React.lazy(() => import("../rule_win"));


const { Column } = Table;
const { Option } = Select;

// 示例数据
const demoData = [
  {
    key: '1',
    name: '规则表达式',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
];



const TableWithRemoteData = () => {

  const [data, setData] = useState([]); 

  const [tableLoading, setTableLoading] = useState(false);

  const [sqlExpr, setSqlExpr] = useState(null); 

  const [pagination, setPagination] = useState({ current: 1, pageSize: 10,total: 0 });

  // 表格列的配置
  const columns = [
    {
      title: '序号ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '规则表达式',
      dataIndex: 'expression',
      key: 'expression',
    },
    {
      title: 'ui配置',
      dataIndex: 'config',
      key: 'config',
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: () => <a onClick={editModal}>编辑</a>,
    },
  ];

  const loadData = async (params : any) => {
    setTableLoading(true);
    try {
      
      const r = await http.post('/rule/list', { params });
      
      const result = {
        list: r.data.rows,
        pagination: {
          total: r.data.total,
        },
      };
      setData(result.list);
      setPagination({
        ...pagination,
        total: result.pagination.total,
      });
    } finally {
      setTableLoading(false);
    }
  };

  useEffect(() => {
    loadData({});
  }, []);

  const handleTableChange = (newPagination : any) => {
    setPagination(newPagination);
    loadData({});
  };

  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    loadData({ ...values });
  };


  const [title, setTitle] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    setTitle("添加规则");
  };

  const editModal = () => {
    setIsModalOpen(true);
    setTitle("添加规则");
  };


  const handleOk = () => {
    setIsModalOpen(false);
    console.log('sql expr => \n',sqlExpr);
    message.success(sqlExpr || 'Success');
    // message.info(sqlExpr || 'Info');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleValueChange = useCallback((newValue:any) => {
    setSqlExpr(newValue);
  }, []); // 空依赖项数组意味着这个回调函数不会改变

  // const handleValueChange = (newValue:any) => {
  //   // console.log('Received value from child:', newValue);
  //   setSqlExpr(newValue);
  //   // 在这里处理从子组件接收到的值
  // };

  return (
    <div>
      <div style={{padding: "10px"}}>
      <Form form={form} layout="inline" onFinish={onFinish}>
        <Form.Item label="规则名称" name="ruleName">
          <Input placeholder="Filter by name" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" >查询</Button>
        </Form.Item>
      </Form>
      </div>
      <Button type="primary" onClick={showModal} htmlType="submit" style={{ marginBottom: 16 }}>
        添加规则
      </Button>
      <Spin spinning={tableLoading}>
        <Table
          bordered
          columns={columns}
          dataSource={data}
          pagination={pagination}
          onChange={handleTableChange}
          rowKey={record => record.key}
        />
      </Spin>
      <Modal 
        title={title} 
        width={1000} 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}>
        <DemoQueryBuilder onValueChange={handleValueChange}/>
      </Modal>
    </div>
  );
};

export default TableWithRemoteData;