import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "src/features/TodoSlice";
import "./Input.css";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(
        saveTodo({
          id: Date.now(),
          title: input,
          done: false,
        })
      );
      setInput("");
    } else {
      alert("Please add some todos");
    }
    return;
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='input-container'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type='submit'
        className='btn'>
        Add
      </button>
    </form>
  );
};

export default Input;
