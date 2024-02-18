import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {editTodoAsync} from '../redux/todoSlice';

const EditTodoForm = () => {
  const [value, setValue] = useState ('');

  const dispatch = useDispatch ();

  const onSubmit = event => {
    event.preventDefault ();
    if (value) {
      dispatch (
        editTodoAsync ({
          title: value,
        })
      );
    }
  };

  return (
    <form onSubmit={onSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={e => setValue (e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">Edit Task</button>
    </form>
  );
};

export default EditTodoForm;
