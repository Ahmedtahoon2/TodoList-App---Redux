import { useSelector } from "react-redux";
import { selectTodoList } from "src/features/TodoSlice";
import TodoItem from "components/TodoItem/TodoItem";
import Input from "components/Input/Input";
import "./App.css";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className='app'>
      <div className='container'>
        <div className='todo-container'>
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
            />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
