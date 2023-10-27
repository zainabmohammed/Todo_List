import { useHomeStore, useStore } from "../../../Store";
import trans from "../../../trans";
import "./style.css";
import { useEffect, useState } from "react";
const FormInput = () => {
  const { lang } = useStore();
  const { newItem, setNewItem, setItems, items } = useHomeStore();
  const [loading, setLoading] = useState(false);

  const getTodolist = () => {
    fetch("http://localhost:5000/todo")
      .then((res) => res.json())
      .then((datatable) => {
        setItems(datatable);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function addItem() {
    if (!newItem) {
      alert("Enter New Item...");
      return;
    }

    setLoading(true)

    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newItem,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        setNewItem("");
        setLoading(false)
        getTodolist();
      })
      .catch((error) => console.log("error", error));

    // const item = {
    //   id: Math.floor(Math.random() * 1000),
    //   value: newItem,
    // };

    // setItems([...items, item]);
    // setNewItem("");
  }

  return (
    <>
      <div className="form-input">
        <input
          type="text"
          placeholder="Write Text here . . ."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <button className="add-btn-web" onClick={() => addItem()}>
          {loading ? "loading..." : trans[lang].nav_button}
        </button>
      </div>

      {/* <button className="add-btn-mobile" onClick={() => addItem()}>
       {!loading ? "loading..." : "+Add New"}
      </button> */}
    </>
  );
};

export default FormInput;
