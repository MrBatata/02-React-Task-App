import { COMPLETE_SEL_TASK, REMOVE_SEL_TASK } from '../actions/actions'

/**
 * * Reducer definition -> tasksReducer
 */
const tasksReducer = (anyTaskInState, anyAction) => {
  switch (anyAction.type) {
    case REMOVE_SEL_TASK: {
      const newTaskInState = anyTaskInState.filter((task) => task.id !== anyAction.payload.id)
      return newTaskInState
    }

    case COMPLETE_SEL_TASK: {
      const tempTasks = anyTaskInState.map((t) => {
        if (t.id === anyAction.payload.id) {
          return {
            ...t,
            isCompleted: !t.isCompleted
          }
        }
        return t
      })
      return tempTasks
    }

    // TODO: change to `const ADD_TASK: 'ADD_TASK'`
    // case 'ADD_TASK': {
    //   return [
    //     ...anyTaskInState,
    //     {
    //       id: anyAction.payload.id,
    //       name: anyAction.payload.name,
    //       description: anyAction.payload.description,
    //       level: anyAction.payload.level
    //     }
    //   ]
    // }

    default:
      return anyTaskInState
  }
}

export default tasksReducer
