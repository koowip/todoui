import { useEffect, useState } from 'react';
import './App.css'
import Card from './Card.tsx'
import InputRow from './InputRow.tsx';
import axios from 'axios';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newToDo, setNewToDo] = useState(null);

  useEffect(() => {
    console.log(newToDo);
    if (newToDo) {
      const newList = [...toDoList, newToDo];
      setToDoList(newList)
      setNewToDo(null)
    } else {
    axios.get('http://localhost:5154/allToDo')
      .then(response => {
        setToDoList(response.data);
    })
    } 
   }, [newToDo])

  return (
    <>
      <div className="backplate">
        <InputRow setNewToDo={setNewToDo}/>
        <div className="mainplate" key={toDoList.length}>
          {toDoList.map((item, index) => (
            <Card
            key={index}
            title={item.id}
            description={item.content}
            isComplete={item.isComplete}
          />
          ))}      
        </div>
      </div>
    </>
  )
}

export default App
