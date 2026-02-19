import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// lazy import — 해당 Route에 접근할 때만 컴포넌트 + CSS 로드
const Home = lazy(() => import("./components/Home"));
const TodoList = lazy(() => import("./components/TodoList"));
const UpDown = lazy(() => import("./components/UpDown"));
const Counter = lazy(() => import("./components/Counter"));
const NotFound = lazy(() => import("./components/NotFound"));
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/UpDown" element={<UpDown />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
