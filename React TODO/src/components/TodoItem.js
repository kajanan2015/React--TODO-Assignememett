import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import EditTodoForm from './EditTodoForm';

import {toggleCompleteAsync, deleteTodoAsync} from '../redux/todoSlice';

const TodoItem = ({id, title, completed}) => {
  const [save, setSave] = useState (false);
  const dispatch = useDispatch ();

  const handleCheckboxClick = () => {
    dispatch (toggleCompleteAsync ({id, completed: !completed}));
  };

  const handleDeleteClick = () => {
    dispatch (deleteTodoAsync ({id}));
  };

  return (
    <div>
      {save && <EditTodoForm />}
      <li
        className={`list-group-item ${completed && 'list-group-item-success'}`}
      >
        <div className="d-flex justify-content-between">

          <span className="d-flex align-items-center">
            <input
              type="checkbox"
              className="mr-3"
              checked={completed}
              onClick={handleCheckboxClick}
            />
            {title}
          </span>
          <div>
            <button onClick={() => setSave (true)} className="btn btn-danger">
              Edit
            </button>
            <button onClick={handleDeleteClick} className="btn btn-danger">
              Delete
            </button>
          </div>

        </div>
      </li>
    </div>
  );
};

export default TodoItem;
