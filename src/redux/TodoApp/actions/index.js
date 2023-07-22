export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const REMOVE_A_TODO = 'REMOVE_A_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const HANDLE_CHECKBOX = 'HANDLE_CHECKBOX';
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const DeleteAll = () => {
  return {
    type: DELETE_TODO,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_A_TODO,
    payload,
  };
};

export const handleEditSubmit = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const handleCheckbox = (payload) => {
  return {
    type: HANDLE_CHECKBOX,
    payload,
  };
};
