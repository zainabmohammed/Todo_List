import {useStore } from "../../Store";
import trans from "../../trans";
import "./style.css";
import FormInput from "../../component/Home/FormInput";
import TodoList from "../../component/Home/TodoList";

function HomeScreen() {
  const { lang } = useStore();

  return (
    <div className="home-screen">
      <div className="Todo-container">
        <div className="titel-todo">
          <h1>{trans[lang].nav_title} </h1>
          <p> {trans[lang].nav_text}</p>
        </div>
        <FormInput />
        <hr></hr>
        <TodoList />
      </div>
    </div>
  );
}

export default HomeScreen;
