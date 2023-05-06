import React from 'react';
import { useParams } from 'react-router-dom';

function TasksDetailPage({ task }) {
  const { id } = useParams();

  return (
    <div>
      <h1>
        Detalle de tarea:
        {id}
      </h1>
      <h2>{task.name}</h2>
      <h2>{task.description}</h2>
    </div>
  );
}

export default TasksDetailPage;
