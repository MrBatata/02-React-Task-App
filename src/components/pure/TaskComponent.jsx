import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTaskDispatchContext } from '../../pages/tasks/TasksPage'
import { completeSelTask, removeSelTask } from '../../store/actions/actions'

/**
 * * Models
 */
import { Task, taskCompletedFormat, taskPendingFormat } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'

/**
 * * Styles
 */
import '../../styles/task.css'

/**
 * * Task
 */
const TaskComponent = ({ task }) => {
    const taskDispatchState = useTaskDispatchContext()

    /**
     * * HOOK function for Lifecylcle control
     */
    useEffect(() => {
        return () => {
            // console.log(`taskComponent: Created Task ${task.id}.`)
        }
    }, [task])

    /**
     * * Badge depending on the level of the task
     */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h4 className='m-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h4>)
            case LEVELS.URGENT:
                return (
                    <h4 className='m-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h4>)
            case LEVELS.BLOCKING:
                return (
                    <h4 className='m-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h4>)
            default:
                break
        }
    }

    /**
     * * Icon depending on completion of the task
     */
    function taskIsCompletedIcon() {
        if (task.isCompleted) {
            return (
                <i
                    className='bi bi-toggle-on font-weight-bold task-action'
                    style={{ color: 'green' }}
                    onClick={() => taskDispatchState(completeSelTask(task))}
                >
                </i>
            )
        } else {
            return (
                <i
                    className='bi bi-toggle-off font-weight-bold task-action'
                    style={{ color: 'tomato' }}
                    onClick={() => taskDispatchState(completeSelTask(task))}
                >
                </i>
            )
        }
    }

    /**
     * * Style depending on completion of the task
     */
    let completedFormat
    if (task.isCompleted) {
        completedFormat = taskCompletedFormat
    } else {
        completedFormat = taskPendingFormat
    }

    /**
     * * DOM
     */
    return (
        <tr className='fw-normal'>

            <th className='align-middle' style={completedFormat}>
                <span className='ms-2'>{task.name}</span>
            </th>

            <td className='align-middle'>
                <span>{task.description}</span>
            </td>

            <td className='align-middle'>
                <span>{taskLevelBadge()}</span>
            </td>

            <td className='align-middle'>
                {/* { task.isCompleted ? 'COMPLETADO' : 'PENDIENTE' } */}
                {taskIsCompletedIcon()}
            </td>

            <td className='align-middle'>
                <i
                    className='bi bi-trash task-action'
                    onClick={() => taskDispatchState(removeSelTask(task))}
                ></i>
            </td>

        </tr>

    )
}

TaskComponent.propTypes = {

    /* Defino que task debe ser una INSTANCIA de la CLASE Task, y que debe ser obligatoria */
    task: PropTypes.instanceOf(Task).isRequired,

    /* Defino que complete debe ser una FUNCION, y que debe ser obligatoria */
    complete: PropTypes.func.isRequired,

    /* Defino que deleteT debe ser una FUNCION, y que debe ser obligatoria */
    remove: PropTypes.func.isRequired

}

export default TaskComponent
