import React, { useState } from "react";
import './style.css';


function TodoList (){

    const [newItem,setNewItem]=useState("");
    const [items,setItems] =useState([{
        id:Math.floor(Math.random()*1000),
        value:"test"


    }]);

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

        <div className="container">
        <div className="Todo">
            <h3>Simple ToDo APP</h3>
            <p>This todo app for test react.</p>
            <input  type="text"placeholder="write text here.."
            value={newItem}
            onChange={e=>setNewItem(e.target.value)}
            
            />
            <button onClick={()=>addItem()}>primary</button>
            <hr></hr>

    {items.map(item=>{
        return(

            < div className="item"key={item.id}>{item.value}<button onClick={()=> deletItem(item.id)}>X</button></div>
        )

    })}
        
    



        </div>
        </div>



    );
    }
export default TodoList