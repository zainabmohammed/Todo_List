import swal from "sweetalert";
import trans from "../../../trans";
import { useHomeStore, useStore } from "../../../Store";
import { BiTrash } from "react-icons/bi";
import './style.css'

const TodoList = () => {
  const { lang } = useStore();
  const { items, setItems } = useHomeStore();

  function deletItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="todo-list">
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.value}</span>
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
                <BiTrash/>
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

export default TodoList
