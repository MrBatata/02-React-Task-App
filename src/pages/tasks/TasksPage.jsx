import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import TaskListComponent from '../../components/containers/task_list'

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

    return (
        <div>
            <h1>Tasks Page</h1>
            <TaskListComponent></TaskListComponent>

            <button onClick={() => navigateTo('/')}>Página principal</button>

            {/* Opciones con igual resultado: */}
            <button onClick={goBack}>Atrás</button>
        </div>
    )
}

export default TaskPage
