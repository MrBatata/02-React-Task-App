import React, { useEffect, useReducer, createContext, useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import TaskListComponent from '../../components/containers/TaskListComponent'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import tasksReducer from '../../store/reducers/taskReducer'

/**
 * * Context creation
*/
// TODO: could just export TasksContext and TasksDispatchContext?
const TasksContext = createContext(null)
const TasksDispatchContext = createContext(null)

/**
 * Initial State for Reducer
 */
// TODO: automate id generation...
const defaultTask1 = new Task(1, 'Ejemplo 1', 'Descripción defecto 1', false, LEVELS.NORMAL)
const defaultTask2 = new Task(2, 'Ejemplo 2', 'Descripción defecto 2', true, LEVELS.URGENT)
const defaultTask3 = new Task(3, 'Ejemplo 3', 'Descripción defecto 3', true, LEVELS.BLOCKING)
const defaultTask4 = new Task(4, 'Ejemplo 4', 'Descripción defecto 4', false, LEVELS.URGENT)
const defaultTask5 = new Task(5, 'Ejemplo 5', 'Descripción defecto 5', true, LEVELS.BLOCKING)
const defaultTask6 = new Task(6, 'Ejemplo 6', 'Descripción defecto 6', false, LEVELS.NORMAL)
const defaultTask7 = new Task(7, 'Ejemplo 7', 'Descripción defecto 7', true, LEVELS.BLOCKING)
const defaultTasks = [
    defaultTask1,
    defaultTask2,
    defaultTask3,
    defaultTask4,
    defaultTask5,
    defaultTask6,
    defaultTask7
]

/**
 * * Task Page with provider
 * @returns
 */
const TaskPage = () => {
    const location = useLocation()
    console.log(`We are in Route ${location.pathname}`)
    const history = useHistory()

    const navigateTo = (path) => {
        history.push(path)
    }

    const goBack = () => {
        history.goBack()
    }

    // useReducer to state -> state and dispatch actions
    const [tasksState, tasksDispatch] = useReducer(tasksReducer, defaultTasks)

    useEffect(() => {
        return () => {
            setTimeout(() => {
                console.log('TaskList: Task State has been mounted/modified.')
            }, 1000)
        }
    }, [tasksState])

    /**
     * * DOM
     */
    return (
        <TasksContext.Provider value={tasksState}>
            <TasksDispatchContext.Provider value={tasksDispatch}>
                <div>
                    <h1>Tasks Page</h1>
                    <TaskListComponent></TaskListComponent>

                    <button onClick={() => navigateTo('/')}>Página principal</button>

                    {/* Opciones con igual resultado: */}
                    <button onClick={goBack}>Atrás</button>
                </div>
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

export default TaskPage

/**
 * * useContext export
 */
export function useTasksContext() {
    return useContext(TasksContext)
}
export function useTaskDispatchContext() {
    return useContext(TasksDispatchContext)
}
