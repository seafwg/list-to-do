import React from 'react'
import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'Task',
    dataIndex: 'task',
    key: 'task',
    render: text => <a>{text}</a>,
  },
  {
    title: 'createTime',
    dataIndex: 'time1',
    key: 'time1',
  },
  {
    title: 'finshTime',
    dataIndex: 'time2',
    key: 'address',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Finshed {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    task: 'John Brown',
    time1: 32,
    time2: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    task: 'Jim Green',
    time1: 42,
    time2: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    task: 'Joe Black',
    time1: 32,
    time2: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default function List() {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}
