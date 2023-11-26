import { useState } from 'react'
import './Card.css'

interface CardProps {
  title: String,
  description: String,
  isComplete: String,
  deleteToDo: (id: string) => Promise<void>,
  updateToDo: (id: string, content: string) => Promise<void>
}
const Card: React.FC<CardProps> = ({
  title,
  description,
  isComplete,
  deleteToDo,
  updateToDo
}) => {

  const [textTable, setTextTable] = useState(description);

  return (
    <>
      <div className='card'>
        <div className='title'>{title}</div>
        <div className='description'>
        <input type="text" value={textTable} onChange={(e) => setTextTable(e.target.value)} />
        </div>
        <div className='isComplete'>{isComplete}</div>
        <button onClick={() => updateToDo(title, setTextTable)}>Update</button>
        <button onClick={() => deleteToDo(title)}>Delete</button>
      </div>
    </>
  )
}

export default Card