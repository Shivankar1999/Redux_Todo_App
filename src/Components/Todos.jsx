import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, handleCheckbox } from '../redux/TodoApp/actions';
import { MdRestoreFromTrash, MdEditNote } from 'react-icons/md';
import styles from '../Styles/Todo.module.css';
export const Todos = ({ editForm, handleEditForm }) => {
  const todos = useSelector((state) => state.operationReducers);
  const dispatch = useDispatch();
  console.log(todos);
  return todos.map((todo) => {
    return (
      <div key={todo.id} className={styles.todocontainer}>
        <div className={styles.todocontent}>
          {editForm === false && (
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(handleCheckbox(todo.id))}
            />
          )}

          <p
            style={
              todo.completed
                ? { textDecoration: 'line-through' }
                : { textDecoration: 'none' }
            }
          >
            {todo.todotext}
          </p>
        </div>
        <div className={styles.todoaction}>
          {editForm === false && (
            <>
              <span onClick={() => handleEditForm(todo)}>
                <MdEditNote />
              </span>
              <span onClick={() => dispatch(removeTodo(todo.id))}>
                <MdRestoreFromTrash />
              </span>
            </>
          )}
        </div>
      </div>
    );
  });
};
