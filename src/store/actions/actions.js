export const ADD_TASK = 'ADD_TASK';
export const REMOVE_SEL_TASK = 'REMOVE_SEL_TASK';
export const COMPLETE_SEL_TASK = 'COMPLETE_SEL_TASK';

export const addTaskInput = (input) => {
  return {
    type: ADD_TASK,
    payload: {
      id: input.id,
      name: input.name,
      description: input.description,
      isCompleted: input.isCompleted,
      level: input.level,
    },
  };
};

export const removeSelTask = (task) => {
  return {
    type: REMOVE_SEL_TASK,
    payload: {
      id: task.id,
    },
  };
};

export const completeSelTask = (task) => {
  return {
    type: COMPLETE_SEL_TASK,
    payload: {
      id: task.id,
    },
  };
};
