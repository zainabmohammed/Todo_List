import { Routes, Route } from "react-router-dom";
import About from "./component/About";

import Foo from "./component/Foo";
import HeaderTodo from "./component/HeaderTodo";
import SvgTodo from "./component/SvgTodo";
import "./App.css";
//import Foo from "./component/Foo";

import Todo from "./component/Todo";
import { useStore } from "./Store";

function App() {

  const {lang} = useStore()

  return (
    <div className={`App ${lang === "ar" ? "ar-container" : ""}`}>

      <Routes>
        <Route path="/header" element={<HeaderTodo />} />
        <Route excat path="/" element={<Todo />} />
        <Route path="/foo" element={<Foo />} />
        <Route path="/about" element={<About />} />
        <Route path="/svg" element={<SvgTodo />} />
      </Routes>
    </div>
  );
}

export default App;
