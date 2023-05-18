import React from 'react'

const TodoList = ({texts1}) => {
  return texts1.map(text => 

  <div key = {text.id}>
    <input type="checkbox" checked = {text.checked} readOnly/>
    {text.name}
  </div>
  
  );
}

export default TodoList