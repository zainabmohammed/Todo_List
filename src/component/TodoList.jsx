import React, { useState } from "react";


function TodoList (){

    const [newItem,setNewItem]=useState("");
    const [items,setItems] =useState([]);

// let mylist = [
//     {
//         id: 1,
//         todo: "todo One"
//     },
//     {
//         id: 2,
//         todo: "todo Two"
//     }
// ];

// mylist.push({
//     id: 3,
//     todo: "three"
// })

// mylist = [...mylist, {
//     id: 3,
//     todo: "todo Two"
// }]

//mylist = mylist.filter(el=> el.id !== 2)
function addItem(){
     console.log(newItem)
    if (!newItem){
        alert("enter new item..")
        return;
    }

    const item={
        id:Math.floor(Math.random()*1000),
        value:newItem


    };
    setItems (oldList=>[...oldList,item]);


    
}
function deletItem(id){
    const newArray = items.filter(item=>item.id!==id);
    setItems(newArray);

}

    return(

        <div className="Todo">
            <h1>Todo List App</h1>
            <input  type="text"placeholder="Add an item.."
            value={newItem}
            onChange={e=>setNewItem(e.target.value)}
            
            />
            <button onClick={()=>addItem()}>Add</button>
<ul>
    {items.map(item=>{
        return(

            <li key={item.id}>{item.value}<button onClick={()=> deletItem(item.id)}>X</button></li>
        )

    })}
        
    
</ul>



        </div>




    );
    }
export default TodoList