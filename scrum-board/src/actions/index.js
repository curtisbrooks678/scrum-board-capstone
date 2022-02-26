import * as c from './ActionTypes';

export const deleteTask = id => ({
  type: c.DELETE_TASK,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});