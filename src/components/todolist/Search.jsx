import React from 'react'
import {Input,Button,Row, Col } from 'antd'

export default function Search() {
  return (
    <div>
      <Row justify="center" style={{padding:'15px 0'}}>
        <Col span={10}><Input placeholder="add yours plan" /></Col>
        <Col span={2}><Button danger>ADD</Button></Col>
      </Row>
    </div>
  )
}
