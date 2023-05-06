import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTaskDispatchContext } from '../../pages/tasks/TasksPage';
import { completeSelTask, removeSelTask } from '../../store/actions/actions';
import { Task, taskCompletedFormat, taskPendingFormat } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

/**
 * * Task
 */
function TaskComponent({ task }) {
  const taskDispatchContext = useTaskDispatchContext();

  // HOOK function for Lifecylcle control
  useEffect(() => {
    return () => {
      // console.log(`taskComponent: Created Task ${task.id}.`)
    };
  }, [task]);

  // Badge depending on the level of the task
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h4 className="m-0">
            <span className="badge bg-primary">
              {task.level}
            </span>
          </h4>
        );
      case LEVELS.URGENT:
        return (
          <h4 className="m-0">
            <span className="badge bg-warning">
              {task.level}
            </span>
          </h4>
        );
      case LEVELS.BLOCKING:
        return (
          <h4 className="m-0">
            <span className="badge bg-danger">
              {task.level}
            </span>
          </h4>
        );
      default:
        break;
    }
  }

  // Icon depending on completion of the task
  function taskIsCompletedIcon() {
    if (task.isCompleted) {
      return (
        <i
          className="bi bi-toggle-on font-weight-bold task-action"
          style={{ color: 'green' }}
          onClick={() => taskDispatchContext(completeSelTask(task))}
        />
      );
    }
    return (
      <i
        className="bi bi-toggle-off font-weight-bold task-action"
        style={{ color: 'tomato' }}
        onClick={() => taskDispatchContext(completeSelTask(task))}
      />
    );
  }

  // Style depending on completion of the task
  let completedFormat;
  if (task.isCompleted) {
    completedFormat = taskCompletedFormat;
  } else {
    completedFormat = taskPendingFormat;
  }

  /**
   * * DOM print
   */
  return (
    <tr className="fw-normal">

      <th className="align-middle" style={completedFormat}>
        <span className="ms-2">{task.name}</span>
      </th>

      <td className="align-middle">
        <span>{task.description}</span>
      </td>

      <td className="align-middle">
        <span>{taskLevelBadge()}</span>
      </td>

      <td className="align-middle">
        {taskIsCompletedIcon()}
      </td>

      <td className="align-middle">
        <i
          className="bi bi-trash task-action"
          onClick={() => taskDispatchContext(removeSelTask(task))}
        />
      </td>

    </tr>
  );
}

TaskComponent.propTypes = {
  // task should be instanteOf Task and mandatory input
  // TODO: error when complete/uncomplete task
  task: PropTypes.instanceOf(Task).isRequired,
};

export default TaskComponent;
