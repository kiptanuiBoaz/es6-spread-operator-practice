import React , {useState} from "react";

function App() {

  const [listItem, addlistItem] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  function handleChange(event){
    const newValue = event.target.value;

    addlistItem(newValue);

  }

  function  handleClick(){

    setTodoItems((prevValues)=>{
      return[ ...prevValues, listItem]

      
    });
     
    addlistItem("");

  };


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange ={handleChange} type="text" value ={listItem} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* map through all the todoItems array and for each "item"  render a list html elenent */}
          {todoItems.map( function (item) { return(<li>{item}</li>) })}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
