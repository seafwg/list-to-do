import React from 'react'
import { Button,Row, Col } from 'antd'

export default ({addTasksFn}) => {
  const btnHandle = () => {
    addTasksFn();
  }
  return (
    <div>
      <Row justify="center" style={{padding:'15px 0'}}>
        <Col span={6} onClick={btnHandle}><Button danger style={{width:'300px'}}>ADD yours task...</Button></Col>
      </Row>
    </div>
  )
}
