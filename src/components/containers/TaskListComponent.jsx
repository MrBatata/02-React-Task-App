import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TaskForm, { nextId } from '../pure/forms/TaskForm';
import { useTasksContext } from '../../pages/tasks/TasksPage';
import TaskComponent from '../pure/TaskComponent';

/**
 * * Task List
 */
function TaskListComponent() {
  const tasksContext = useTasksContext();

  const [loading, setLoading] = useState(true);

  // HOOK function for Lifecylcle control
  useEffect(() => {
    // console.log('Task State has been mounted/modified.')
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      // console.log('Task State is going to unmount.')
    };
  }, [tasksContext]);

  /**
   * * Task List Table
   */
  function TaskTable() {
    return (
      <div>
        {/* Task List Table */}
        <table className="table">
          <thead className="">
            <tr>
              <th scope="col">Título</th>
              <th scope="col">Descripción</th>
              <th scope="col">Prioridad</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Iteración mediante un map para generar las TAREAS DEFECTO */}
            {tasksContext.map((eachTask, index) => {
              return (
                <TaskComponent
                  key={index}
                  task={eachTask}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  function taskTableShow() {
    if (tasksContext.length > 0) {
      return <TaskTable />;
    }
    return <span>Felicitaciones! No tenes tareas pendientes.</span>;
  }

  /**
   * * DOM print
   */
  return (
    <div className="col-12 text-secondary">

      {/* Task Fist & Form Card */}
      <div className="card" style={{ width: '75vw' }}>
        {/* Card header w/ Title */}
        <div className="card-header p-3">
          <h5>
            Tus tareas en curso:
            {tasksContext.length}
          </h5>
          <h5>
            Total de tareas gestionadas:
            {(nextId - 1)}
          </h5>
        </div>

        {/* Card body w/ Task Table */}
        <div className="card-body" data-mbd-perfect-scrollbar="true" style={{ position: 'relative' }}>
          {loading
            ? <p className="loading-style">Cargando tareas...</p>
            : taskTableShow()}
          {/* TODO: add loading spinner */}
        </div>
      </div>

      <hr />

      {/* Task Form Card */}
      <div className="card card-body" data-mbd-perfect-scrollbar="true" style={{ position: 'relative' }}>
        <TaskForm
          nTasks={tasksContext.length}
        />
      </div>

    </div>
  );
}

export default TaskListComponent;
