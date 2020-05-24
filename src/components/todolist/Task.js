import React, {Component} from 'react'
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
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
  },
];
const data = [];
export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataS: data
    }
  }


  componentDidMount() {
    if(this.props.flag) {
      let dataSS = Object.assign([], this.state.dataS, this.state.dataS.push({
        key: this.props.flag,
        task: '',
        time1: new Date().toTimeString(),
        time2: '',
        tags: ['', '']
      }))
      console.log('dataSS', dataSS)
      this.setState({
        dataS: dataSS
      })
    }
  }
  render() {
    // let curTmie = new Date().toLocaleTimeString();
    console.log('props', this.props)
    console.log('this.dataS', this.state.dataS)
    return (
      <div>
        <Table columns={columns} dataSource={this.state.dataS} />
      </div>
    )
  }
}

