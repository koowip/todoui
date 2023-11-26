import { useEffect, useState } from 'react';
import './App.css'
import Card from './Card.tsx'
import InputRow from './InputRow.tsx';
import axios from 'axios';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newToDo, setNewToDo] = useState(null);

  useEffect(() => {
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

   const deleteToDo = async (id: string) => {
    await axios.delete(`http://localhost:5154/del/${id}`);
    setToDoList(prev => prev.filter(x => x.id !== id))
   }

   const updateToDo = async (id: string, content: string) => {
    const reponse = await axios({
      method: 'put',
      url: 'http://localhost:5154/edit',
      headers: {},
      data: {
        "id" : id,
        "content": content,
        "iscomplete" : false
      }
    })

   }

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
            deleteToDo={deleteToDo}
            updateToDo={updateToDo}
          />
          ))}      
        </div>
      </div>
    </>
  )
}

export default App
