import axios from 'axios'
import React, {useState } from 'react'

function App2(){
const [file, setFile] = useState()
const upload = () => {
    const formData = new FormData
    formData.append('file', file )
    axios.post('http://localhost:3001/',formData)
    .then( res => {})
    .catch(er => console.log(er))
}

  return (
    <div>
        <input type="file" onChange={(e) => setFile(e.target.file[0])} />
        <button type='button' onClick={upload}></button>      
    </div>
  )
}

export default App2
