import React from 'react'
// import PropTypes from 'prop-types'
const TodoItem = (props) => {
  return (
    <>
    <div>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      {props.todo.length===0?"":<button className="btn btn-sm btn-danger my-2" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>}
      
    </div>
    </>
  )
}

export default TodoItem
