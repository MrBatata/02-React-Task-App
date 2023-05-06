import { Task } from '../../models/task.class';
import { COMPLETE_SEL_TASK, REMOVE_SEL_TASK } from '../actions/actions';

/**
 * * Reducer definition -> tasksReducer
 */
const tasksReducer = (tasksInState, anyAction) => {
  switch (anyAction.type) {
    case REMOVE_SEL_TASK: {
      const newTasksInState = tasksInState.filter((task) => task.id !== anyAction.payload.id);
      return newTasksInState;
    }

    case COMPLETE_SEL_TASK: {
      const newTasksInState = tasksInState.map((t) => {
        if (t.id === anyAction.payload.id) {
          // Need this to keep instanceOf Task
          return new Task(
            t.id,
            t.name,
            t.description,
            !t.isCompleted,
            t.level,
          );
        }
        return t;
      });
      return newTasksInState;
    }

    case 'ADD_TASK': {
      return [
        ...tasksInState,
        new Task(
          anyAction.payload.id,
          anyAction.payload.name,
          anyAction.payload.description,
          anyAction.payload.isCompleted,
          anyAction.payload.level,
        ),
      ];
    }

    default:
      return tasksInState;
  }
};

export default tasksReducer;
