import { useState } from "react";
import "./TodoList.css";
import { useEffect } from "react";

const todoList = [
  { id: 1, task: "첫번째할일", isDone: false },
  { id: 2, task: "두번째할일", isDone: true },
  { id: 3, task: "세번째할일", isDone: false },
];
function TodoItem({ todo, isDoneToggle, deleteTodo }) {
  console.log(todo.task);
  return (
    <li className={todo.isDone ? "completed" : ""}>
      <input
        type="checkbox"
        defaultChecked={todo.isDone}
        onChange={() => {
          isDoneToggle(todo.id);
        }}
      />
      <span>{todo.task}</span>
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        ✖️
      </button>
    </li>
  );
}
function TodoList() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [todoValue, setTodoValue] = useState("");
  const [filter, setFilter] = useState("all");
  function addTodo() {
    console.log("할일추가");
    if (!todoValue.trim()) return;
    //1. 새로운 할일 배열만들기
    const newTodos = [
      ...todos,
      { id: Date.now(), task: todoValue.trim(), isDone: false },
    ];
    //2. 기존 할일을 새로운 할일로 바꾸기
    setTodos(newTodos);
    setTodoValue("");
  }

  // 토글 함수
  function isDoneToggle(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
    );
    setTodos(newTodos);
  }

  // 할 일 삭제 함수
  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  }

  function clearAll() {
    if (window.confirm("모든 할 일을 삭제하시겠습니까?")) {
      setTodos([]);
    }
  }

  function deleteCompleted() {
    const newTodos = todos.filter((todo) => !todo.isDone);
    if (window.confirm("완료된 항목을 모두 삭제하시겠습니까?")) {
      setTodos(newTodos);
    }
  }

  const leftCount = todos.filter((todo) => !todo.isDone).length;

  const filteredTodos =
    filter === "active" ? todos.filter((todo) => !todo.isDone) : todos;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <h1>📝 To-Do List</h1>
      <div className="todo-stats">
        남은 할 일: <strong>{leftCount}</strong>
      </div>

      <div className="filter-group">
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "active" : ""}
        >
          전체
        </button>
        <button
          onClick={() => setFilter("active")}
          className={filter === "active" ? "active" : ""}
        >
          미완료
        </button>
      </div>

      <div className="input-box">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
        <button onClick={addTodo}>추가</button>
      </div>

      {todos.length > 0 && (
        <div className="clear-box">
          <button onClick={deleteCompleted} className="clear-done-btn">
            완료 삭제 ✔️
          </button>
          <button onClick={clearAll} className="clear-btn">
            전체 삭제 🗑️
          </button>
        </div>
      )}

      <ul className="todo-list">
        {filteredTodos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            isDoneToggle={isDoneToggle}
            deleteTodo={deleteTodo}
          />
        ))}
        {/* <li>
          <input type="checkbox" />
          <span>두번째 할일</span>
          <button>✖️</button>
        </li>
        <li className="completed">
          <input type="checkbox" defaultChecked="true" />
          <span>첫번째 할일</span>
          <button>✖️</button>
        </li>
        <li>
          <input type="checkbox" />
          <span>세번째 할일</span>
          <button>✖️</button>
        </li> */}
      </ul>
    </div>
  );
}

export default TodoList;
