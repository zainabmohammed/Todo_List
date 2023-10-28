import swal from "sweetalert";
import trans from "../../../trans";
import { useHomeStore, useStore } from "../../../Store";
import { BiTrash } from "react-icons/bi";
import "./style.css";
import { useEffect } from "react";

const TodoList = () => {
  const { lang } = useStore();
  const { items, setItems } = useHomeStore();

  useEffect(() => {
    let storageValue = JSON.parse(localStorage.getItem("items"));
    if (storageValue?.length !== 0) {
      setItems(storageValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // function deletItem(id) {
  //   const newArray = items.filter((item) => item.id !== id);
  //   setItems(newArray);
  // }

  
 //#for get all items in list
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
// delete items in todo list
  function deletItem(id) {
    fetch("http://localhost:5000/todo/"+id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: setItems,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        getTodolist();
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="todo-list">
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
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
                <BiTrash />
              </button>
            </li>
          );
        })}
        <p>
          {trans[lang].nav_count} :{items.length}
        </p>
      </ul>
    </div>
  );
};

export default TodoList;
