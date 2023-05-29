import { useHomeStore, useStore } from "../../../Store";
import trans from "../../../trans";
import "./style.css";

const FormInput = () => {
  const { lang } = useStore();
  const { newItem, setNewItem, setItems, items } = useHomeStore();

  function addItem() {
    if (!newItem) {
      alert("Enter New Item...");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems([...items, item]);
    setNewItem("");
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
          {trans[lang].nav_button}
        </button>
      </div>
      <button className="add-btn-mobile" onClick={() => addItem()}>
        +Add New
      </button>
    </>
  );
};

export default FormInput;
