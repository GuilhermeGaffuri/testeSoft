import React from 'react';

const TaskList = ({
  tasks,
  onToggle,
  onDelete,
  onEdit,
  editTaskId,
  editTaskTitle,
  setEditTaskTitle,
  saveEditTask,
}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          {editTaskId === task.id ? (
            <>
              <input
                type="text"
                value={editTaskTitle}
                onChange={(e) => setEditTaskTitle(e.target.value)}
              />
              <button onClick={() => saveEditTask(task.id)}>Salvar</button>
            </>
          ) : (
            <>
              <span onClick={() => onToggle(task.id)}>{task.title}</span>
              <div>
                <button onClick={() => onEdit(task.id, task.title)}>Editar</button>
                <button onClick={() => onDelete(task.id)}>Excluir</button>
                <button onClick={() => onToggle(task.id)} className="toggle-button">
                  {task.completed ? 'Desmarcar' : 'Concluir'}
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;