import {
  ADD_TODO,
  HANDLE_CHECKBOX,
  REMOVE_A_TODO,
  UPDATE_TODO,
} from '../actions';
import { DELETE_TODO } from '../actions';
const initialstate = [
  { id: 1, todotext: 'HTML', completed: false },
  { id: 2, todotext: 'CSS', completed: false },
  { id: 3, todotext: 'Javascript', completed: true },
];
export const operationReducers = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return [];
    case REMOVE_A_TODO:
      let FilteredTodo = state.filter((todo) => todo.id !== action.payload);
      return FilteredTodo;
    case UPDATE_TODO:
      let data = action.payload;
      let updatedArr = [];
      state.map((ele) => {
        if (ele.id === data.id) {
          ele.id = data.id;
          ele.todotext = data.todotext;
          ele.completed = data.completed;
        }
        updatedArr.push(ele);
      });
      return updatedArr;

    case HANDLE_CHECKBOX:
      let todoarr = [];
      state.map((ele) => {
        if (ele.id === action.payload) {
          ele.completed = !ele.completed;
        }
        todoarr.push(ele);
      });
      return todoarr;
    default:
      return state;
  }
};
