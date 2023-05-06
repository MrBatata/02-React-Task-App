import React, { useState, useEffect } from 'react'

/**
 * * Models
 */
// import { LEVELS } from '../../models/levels.enum'
// import { Task } from '../../models/task.class'

/**
 * * Components
 */
import TaskComponent from '../pure/TaskComponent'
import TaskForm from '../pure/forms/TaskForm'

/**
 * * Styles
 */
import '../../styles/task.css'
import { useTasksContext } from '../../pages/tasks/TasksPage'

/**
 * * Task List
 */
const TaskListComponent = () => {
    // const defaultTask1 = new Task('Ejemplo 1', 'Descripción defecto 1', false, LEVELS.NORMAL)
    // const defaultTask2 = new Task('Ejemplo 2', 'Descripción defecto 2', true, LEVELS.URGENT)
    // const defaultTask3 = new Task('Ejemplo 3', 'Descripción defecto 3', true, LEVELS.BLOCKING)

    // const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])
    const tasks = useTasksContext()

    const [loading, setLoading] = useState(true)

    /**
     * * HOOK function for Lifecylcle control
     */
    useEffect(() => {
        // console.log('Task State has been mounted/modified.')
        setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => {
            // console.log('Task State is going to unmount.')
        }
    }, [tasks])

    /*
    *   Function to add a task
    */
    // TODO: with reducer and action
    // function addTask(newTask) {
    //     /* Guardo todas las tareas del estado del componente en una variable */
    //     const tempTasks = [...tasks]

    //     /* Modifico el estado agregando la nueva tarea */
    //     tempTasks.push(newTask)

    //     /* Ejecuto la función predefinida en el useState que ingresa un nuevo valor en tasks */
    //     setTasks(tempTasks)
    // }

    /**
     * * Task List Table
     */
    const TaskTable = () => {
        return (
            <div>
                {/* Task List Table */}
                <table className='table'>
                    <thead className=''>
                        <tr>
                            <th scope='col'>Título</th>
                            <th scope='col'>Descripción</th>
                            <th scope='col'>Prioridad</th>
                            <th scope='col'>Estado</th>
                            <th scope='col'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Iteración mediante un map para generar las TAREAS DEFECTO */}
                        {tasks.map((eachTask, index) => {
                            return (
                                <TaskComponent
                                    key={index}
                                    task={eachTask}
                                // complete={'completeTask'} // TODO: with reducer and action
                                >
                                </TaskComponent>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

    let taskTableShow
    if (tasks.length > 0) {
        taskTableShow = <TaskTable></TaskTable>
    } else {
        taskTableShow = <span>Felicitaciones! No tenes tareas pendientes.</span>
    }

    /*
    *   Style for loading phase
    */
    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    /*
    *   Component DOM print
    */
    return (
        <div className='col-12 text-secondary'>

            {/* Task Fist & Form Card */}
            <div className='card' style={{ width: '75vw' }}>
                {/* Card header w/ Title */}
                <div className='card-header p-3'>
                    <h5>Tus tareas: {tasks.length}</h5>
                </div>

                {/* Card body w/ Task Table */}
                <div className='card-body' data-mbd-perfect-scrollbar='true' style={{ position: 'relative' }}>
                    {loading ? <p style={loadingStyle}>Loading tasks...</p> : taskTableShow}
                    {/* TODO: add loading spinner */}
                </div>
            </div>

            <hr></hr>

            {/* Task Form Card */}
            <div className='card card-body' data-mbd-perfect-scrollbar='true' style={{ position: 'relative' }}>
                <TaskForm
                    add={'addTask'} // TODO: with reducer and action
                    nTasks={tasks.length}
                >
                </TaskForm>
            </div>

        </div>
    )
}

// TaskListComponent.propTypes = {

// };

export default TaskListComponent
