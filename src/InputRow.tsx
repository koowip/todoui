import './InputRow.css'
import { useState } from 'react'
import axios from 'axios'


const InputRow = () => {

  const[inputTxt, setInputTxt] = useState('');

  const handleInputChange = (e: any) => {
    setInputTxt(e.target.value);
  }

  const handleSubmit = async () => {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5154/new',
      headers: {},
      data: {
        "content" : inputTxt,
        "iscomplete" : false
      }
    });
  }

  return (
    <>
      <div className='textFormContainer'>
        <div className='textInputContainer'>
          <label htmlFor='textInput'>Enter ToDo here: </label>
          <input type='text' id='textInput' value={inputTxt} onChange={handleInputChange}/>
        </div>
        <div className='submitButtonContainer'>
          <button onClick={handleSubmit}></button>
        </div>
      </div>
    </>
  )
}

export default InputRow