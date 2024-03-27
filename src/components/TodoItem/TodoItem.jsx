/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCheck, deleteTodo } from "src/features/TodoSlice";
import deleteSvg from "src/assets/highlight_remove.svg";
import "./TodoItem.css";

const TodoItem = ({ id, title }) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCheck(id));
    setIsChecked(!isChecked);
  };
  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        className='checkbox'
        id={id}
        onClick={handleClick}
      />
      <label
        htmlFor={id}
        className={isChecked && "active"}>
        {title}
      </label>
      <button
        className='delete-btn'
        onClick={() => dispatch(deleteTodo(id))}>
        <img
          src={deleteSvg}
          alt='delete'
        />
      </button>
    </div>
  );
};

export default TodoItem;
