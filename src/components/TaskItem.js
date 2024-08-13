import React from 'react';


const TaskItem = ({ task, onToggle, onDelete }) => {
    return (
      <li className={task.completed ? 'completed' : ''}>
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => onToggle(task.id)} 
        />
        {task.title}
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </li>
    );
  };
  
  export default TaskItem;