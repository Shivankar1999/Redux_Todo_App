import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../Styles/Form.module.css';

import { addTodo, handleEditSubmit } from '../redux/TodoApp/actions';
export const Form = ({ editForm, editTodo, cancleUpdate }) => {
  const [todoValue, setTodoValue] = useState('');
  const [editTodoValue, seteditTodoValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    seteditTodoValue(editTodo.todotext);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let uid = new Date().getTime();
    let todoObj = {
      id: uid,
      todotext: todoValue,
      completed: false,
    };

    dispatch(addTodo(todoObj));
    setTodoValue('');
  };
  const editSubmit = (e) => {
    e.preventDefault();
    let updatedTodo = {
      id: editTodo.id,
      todotext: editTodoValue,
      completed: false,
    };
    dispatch(handleEditSubmit(updatedTodo));
  };

  return (
    <div className={styles.formcontainer}>
      <>
        {editForm ? (
          <form className={styles.form} onSubmit={editSubmit}>
            <label htmlFor="name">Update My Todo List:</label>
            <input
              type="text"
              id="name"
              value={editTodoValue || ''}
              name="name"
              onChange={(e) => seteditTodoValue(e.target.value)}
              required
            />

            <button type="submit" style={{ marginRight: '4px' }}>
              UPDATE
            </button>
            <button onClick={cancleUpdate}>BACK</button>
          </form>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name">My Todo List:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
              required
            />

            <button type="submit">ADD</button>
          </form>
        )}
      </>
    </div>
  );
};
