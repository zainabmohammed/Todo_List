import "./TodoStyle.css";
import React, { useState } from "react";
//import Model from "./ModelTodo";
import swal from "sweetalert";
import HeaderTodo from "./HeaderTodo";
import { useStore } from "../Store";
import trans from "../trans";
// import Media from "react-media";


function Todo() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const {lang} = useStore();
  //const [openModel, setOpenModel] = useState(false);
  

  function addItem() {
    if (!newItem) {
      alert("Enter New Item...");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldlist) => [...oldlist, item]);
    setNewItem("");
  }
  function deletItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }


  return (
    <div>
    
     
      <HeaderTodo />
      <div className="Todo-container">
        <div className="Titel-todo">
          <h1>{trans[lang].nav_title} </h1> 
          <p> {trans[lang].nav_text}</p>
        </div>

        <div className="contentEnter">
          <input
            type="text"
            placeholder="Write Text here . . ."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />

          <button className="add-btn-web" onClick={() => addItem()}> {trans[lang].nav_button} </button>
         
        </div>
        <hr></hr>
        <div className="Todo-result">
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}{" "}
                  <button
                    onClick={() => {
                      swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this imaginary file!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      }).then((willDelete) => {
                        if (willDelete) {
                          deletItem(item.id);

                          swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                          });
                        } else {
                          swal("Your imaginary file is safe!");
                        }
                      });
                    }}
                  >
                    X
                  </button>
                </li>
              );
            })}
            <p>{trans[lang].nav_count} :{items.length}</p>
          </ul>
        </div>
        {/* {openModel && <Model closeModel={setOpenModel} />} */}
        <button className="add-btn-mobile" onClick={() => addItem()}>+Add New </button>
    
      </div>
      
    </div>

  );
}

export default Todo;
