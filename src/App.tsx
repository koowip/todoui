import { useEffect, useState } from 'react';
import './App.css'
import Card from './Card.tsx'
import InputRow from './InputRow.tsx';
import axios from 'axios';

function App() {
  const [todoList, settodoList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5154/allToDo')
      .then(response => {
        settodoList(response.data);
      })

  }, [])

  return (
    <>
      <div className="backplate">
        <InputRow />
        <div className="mainplate">
          {todoList.map((item, index) => (
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
