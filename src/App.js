import { useState } from "react";
import TodoList from "./TodoList";
import  "./app.css"

const App = () => {

  const[inputList, setInputList] = useState("");
  const [ Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      setInputList("");
  };
  const deleteItem = (id) => {
    console.log("deleted"); 

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id ;
      })
    })
  }

  return (
    <div className="main-div">
       <div className="center-div"></div>
       <br/>
       <h1>ToDo List</h1>
       <br />
       <input type='text' placeholder="add a items" value={inputList}   onChange={itemEvent} />
       <button onClick={listofItems}> + </button>
       <i className="fa fa-times" />
       <ol>
        {
          Items.map((itemval, index) => {
            return <TodoList 
            key ={index} 
            id={index} 
            onSelect={deleteItem} 
            text={itemval}/>
          })
        }
        </ol>
        
  
    </div>
  );
}

export default App;
