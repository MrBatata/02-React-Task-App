import React, { useRef } from 'react';
import { useTaskDispatchContext, useTasksContext } from '../../../pages/tasks/TasksPage';
import { addTaskInput } from '../../../store/actions/actions';
import { LEVELS } from '../../../models/levels.enum';
import { blockingStyle, normalStyle, urgentStyle } from '../../../models/taskForm.class';

// Initial id after defaults. Then updates on each addTask()
// Export to display total númber of tasks ever created
export let nextId = 8;

/**
 * * Task Form component
 *
 */
function TaskForm() {
    const tasksContext = useTasksContext();
    const taskDispatchContext = useTaskDispatchContext();

    // Save data from inputs in Form to create new task
    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    // Creates new task using dispatch method, which we obtained from context
    function addTask(e) {
        e.preventDefault();
        const taskFormInput = {
            id: nextId++,
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            isCompleted: false,
            level: levelRef.current.value,
        };
        taskDispatchContext(addTaskInput(taskFormInput));
        console.log(nextId);
    }

    /**
     * * DOM print
     */
    return (
      <form
        onSubmit={addTask}
        className="d-flex justify-content-center align-items-center mb-4"
      >
        <div className="form-outline flex-fill p-3">
          <input
            ref={nameRef}
            id="inputName"
            type="text"
            className="form-control form-control-lg m-2"
            required
            autoFocus
            placeholder="Task Name"
          />

          <input
            ref={descriptionRef}
            id="inputDescription"
            type="text"
            className="form-control form-control-lg m-2"
            required
            placeholder="Task description"
          />
          <label htmlFor="selectLevel" className="sr-only">Prioridad</label>
          <select
            className="form-control form-control-lg m-2"
            ref={levelRef}
            defaultValue={LEVELS.NORMAL}
            id="selectLevel"
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
            type="submit"
            className="btn btn-success btn-lg m-3"
          >
            {tasksContext.length > 0 ? 'Add New Task' : 'Create your First Task'}
          </button>

        </div>
      </form>
    );
}

export default TaskForm;
