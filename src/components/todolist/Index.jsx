import React, {useState} from 'react'
import Add from './Add'
import List from './List'
import Task from './Task'

const Index = () => {
  let [flag, setFlag] = useState(0);

  const addTasksFn = () => {
    setFlag(++flag);
  }
  return (
    <div>
      <Add addTasksFn={addTasksFn}></Add>
      <List flag={flag}></List>
      {/* <Task flag={flag}></Task> */}
    </div>
  )
}

export default Index
