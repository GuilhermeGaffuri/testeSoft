import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './Home.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskTitle, setEditTaskTitle] = useState('');

  const addTask = (title) => {
    const newTask = { id: tasks.length + 1, title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const clearCompletedTasks = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  };

  const startEditTask = (taskId, title) => {
    setEditTaskId(taskId);
    setEditTaskTitle(title);
  };

  const saveEditTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: editTaskTitle } : task
    );
    setTasks(updatedTasks);
    setEditTaskId(null);
    setEditTaskTitle('');
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <TaskForm onAdd={addTask} />
      <TaskList 
        tasks={tasks} 
        onToggle={toggleTask} 
        onDelete={deleteTask} 
        onEdit={startEditTask}
        editTaskId={editTaskId}
        editTaskTitle={editTaskTitle}
        setEditTaskTitle={setEditTaskTitle}
        saveEditTask={saveEditTask}
      />
      <button onClick={clearCompletedTasks} className="clear-button">Apagar Tarefas Concluídas</button>
    </div>
  );
};

export default App; 