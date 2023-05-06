import React, { useRef } from 'react'
import PropTypes from 'prop-types'
/*
*   Models Imports
*/
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'
import { blockingStyle, normalStyle, urgentStyle } from '../../../models/taskForm.class'

/*
*   Creamos el componente funcional que tendrá el FORMULARIO NUEVA TAREA
*/
const Taskform = ({ add, nTasks }) => {
    /*
    *   useRef para guardar los datos de los input a variables para crear la NUEVA TAREA
    */
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    /*
    *   onSubmit acciona la función addTask que ingresa aquí.
    *   addTask genera la NUEVA TAREA, en la constante taskInput.
    *   taskInput es ingresada a la prop "add" que es una función.
    *
    *   La prop "add" será definida en el componente padre task_list,
    *   dentro de la etiquieta del formulario en el HTML.
    */
    function addTask (e) {
        e.preventDefault()
        const taskInput = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(taskInput)
    }

    return (
        <form
            onSubmit={addTask}
            className='d-flex justify-content-center align-items-center mb-4'
        >
            <div className='form-outline flex-fill p-3'>
                <input
                    ref={nameRef}
                    id='inputName'
                    type='text'
                    className='form-control form-control-lg m-2'
                    required
                    autoFocus
                    placeholder='Task Name'
                />

                <input
                    ref={descriptionRef}
                    id='inputDescription'
                    type='text'
                    className='form-control form-control-lg m-2'
                    required
                    placeholder='Task description'
                />
                <label htmlFor='selectLevel' className='sr-only'>Prioridad</label>
                <select
                    className='form-control form-control-lg m-2'
                    ref={levelRef}
                    defaultValue={LEVELS.NORMAL}
                    id='selectLevel'
                >
                    <option value={LEVELS.NORMAL} style={normalStyle}>
                        Normal
                    </option>
                    <option value={LEVELS.URGENT} style={urgentStyle}>
                        Urgent
                    </option>
                    <option value={LEVELS.BLOCKING} style={blockingStyle}>
                        Blocking
                    </option>
                </select>

                <button
                    type='submit'
                    className='btn btn-success btn-lg m-3'
                >
                    {nTasks > 0 ? 'Add New Task' : 'Create your First Task'}
                </button>

            </div>
        </form>
    )
}

Taskform.protoTypes = {
    add: PropTypes.func.isRequired
    // length: PropTypes.number.isRequired
}

export default Taskform
