import { use, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(),isDone :false}]);
  let [newTodo, setNewTodo] = useState("");

  let addnewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(),isDone:false }];
    });
    setNewTodo("");
  };
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };
  let markAllDone = () => {
    setTodos(
      todos.map((todo) => {
        return {
          ...todo,
          isDone:true,
        };
      })
    );
  };
  let markAsDone = (id) => {
    setTodos((prevTasks) =>
      prevTasks.map((todo) => {
        if (todo.id == id) {
          return{
            ...todo,
            isDone:true,
          }
        }else{
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        placeholder="Add a task..."
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <br></br>
      <button onClick={addnewTask}>Add task</button>
      <br></br>
      <br></br>
      <hr></hr>
      <h4>ToDo List</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
            <button onClick={() => markAsDone(todo.id)}>markAsDone</button>
          </li>
        ))}
      </ul>
      <br></br>
      <button onClick={markAllDone}>mark all done </button>
    </div>
  );
}
