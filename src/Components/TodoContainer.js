import React, { useState } from "react";
import { Link } from "react-router-dom";

const TodoContainer = (props) => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth());
  const [todoList, setTodoList] = useState([]);
  const [todoError, setTodoError] = useState({});
  const errros = {};
  console.log(todoList);
  const month_names_short = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };
  const runValidation = () => {
    if (todo.length === 0) {
      errros.todo = "Todo field can not be empty";
    } else if (todo.length < 10) {
      errros.todo = "Todos can be of minimum 10 characters long";
    }
  };
  const handleDelete = (title) => {
    const result = todoList.filter((ele) => ele.title !== title);
    setTodoList([...result]);
  };
  const handleLogout = () => {
    localStorage.clear();
    props.history.push("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    runValidation();
    if (Object.keys(errros).length === 0) {
      setTodoError({});
      const todoData = {
        title: todo,
        date: `${date} ${month_names_short[month]}`,
      };
      setTodoList([...todoList, todoData]);
      setTodo("");
      setDate(new Date().getDate());
      setMonth(new Date().getMonth());
    } else {
      setTodoError(errros);
    }
  };
  return (
    <div className="todo_container">
      <div className="header">
        <div className="name">
          Hello <span className="user_name">{props.match.params.name}</span>
        </div>
        <div className="logout">
          <p onClick={handleLogout}>Logout</p>
        </div>
      </div>
      <div className="form_wrapper">
        <form onSubmit={handleSubmit}>
          <div className="todo_form">
            <input type="text" value={todo} onChange={handleTodoChange} />
            <button type="submit" className="btn">
              Add
            </button>
            {todoError.todo && <span>{todoError.todo}</span>}
          </div>
        </form>
      </div>
      <div className="todo_list">
        {todoList.map((ele, i) => {
          return (
            <div className="list" key={i}>
              <p onDoubleClick={() => handleDelete(ele.title)}>{ele.title}</p>
              <p>{ele.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoContainer;
