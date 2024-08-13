import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [menssage, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === '') {
      setMessage('O nome da tarefa não pode estar em branco.');
      return;
    } else {
      setMessage('')
    }
    onAdd(taskTitle);
    setTaskTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskTitle} 
        onChange={(e) => setTaskTitle(e.target.value)} 
        placeholder="Digite o nome da tarefa" 
      />
      <button type="submit">Adicionar</button>
      <p id='error'>{menssage}</p>
    </form>
  );
};

export default TaskForm;