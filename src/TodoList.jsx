import React from 'react'
import  "./app.css";



const TodoList = (props) => {
  return ( 
  <>
    <div className="todolist">
    <i className ="fa fa-trash-o" 
      aria-hidden="true"
      onClick={() => {
      props.onSelect(props.id)
      } }
    /> 
                <li>{props.text}</li>
          </div>
  </>
  )
};

export default TodoList;