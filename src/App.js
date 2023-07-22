import { Form } from './Components/Form';
import Navbar from './Components/Navbar';
import { Todos } from './Components/Todos';
import { MdRestoreFromTrash } from 'react-icons/md';
import styles from './Styles/Appstyling.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteAll } from './redux/TodoApp/actions';
import { useState } from 'react';

import { KnowUs } from './Pages/KnowUs';
function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationReducers);
  const [editForm, seteditForm] = useState(false);
  const [editTodo, seteditTodo] = useState('');
  const [togglePopUp, settogglePopUp] = useState(false);

  const handleEditForm = (todo) => {
    seteditForm(true);
    seteditTodo(todo);
  };
  const cancleUpdate = () => {
    seteditForm(false);
  };
  return (
    <>
      <Navbar togglePopUp={togglePopUp} settogglePopUp={settogglePopUp} />
      <div className={styles.Appstyling}>
        <Form
          editForm={editForm}
          editTodo={editTodo}
          cancleUpdate={cancleUpdate}
        />
        <Todos editForm={editForm} handleEditForm={handleEditForm} />
        {todos.length > 1 && (
          <button
            className={styles.AppstylingBtn}
            onClick={() => dispatch(DeleteAll())}
          >
            Remove ALL <MdRestoreFromTrash />
          </button>
        )}
        {togglePopUp ? (
          <KnowUs togglePopUp={togglePopUp} settogglePopUp={settogglePopUp} />
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default App;
