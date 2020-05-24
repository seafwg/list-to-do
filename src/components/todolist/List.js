import React, {useState, useEffect} from 'react'
import { Table, Space } from 'antd';

let data = [];
export default ({flag}) => {
  let columns = [
    {
      title:'num',
      render: (text, recod, index) => `${index+1}`
    },
    {
      title: 'Task',
      dataIndex: 'task',
      key: 'task',
      render: text => <a>{text}</a>,
    },
    {
      title: 'CurrentTime',
      dataIndex: 'time1',
      key: 'time1',
    },
    {
      title: 'FinshTime',
      dataIndex: 'time2',
      key: 'time2',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => clickHandle(record.key, 'OK')}>Finshed {record.name}</a>
          <a onClick={() => clickHandle(record.key, 'DEL')}>Delete</a>
        </Space>
      )
    }
  ];
  let [dataSource, setDataSourse] = useState(data);
  useEffect(()=>{
    if(flag>0) {
      data = [...dataSource]
      data.push({
        key: flag,
        task: 'John Brown',
        time1: curTmie,
        time2: 'New York No. 1 Lake Park',
        tags: 'developer',
        action: 'Delete'
      })
      setDataSourse(data);
      // 把数据保存到localStorage
    }
  }, [flag]);


  const clickHandle = (key, type) => {
    if(type === 'OK') { // finshed
      
    }else if(type === 'DEL') { // delete
      let dataTemp = [...dataSource];
      console.log('dataTemp1', dataTemp)
      dataTemp.splice(dataTemp.findIndex(item => item.id === key), 1)
      // dataTemp.filter(item => item.key !== key);
      setDataSourse(dataTemp);
    }
    }
  let curTmie = new Date().toLocaleTimeString();


  return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  )
}
