import { useState, useEffect } from 'react'
import './App.css'

// functions
import getTest from './api/test';

function App() {
  const [data, setData] = useState("Hello Wurld :)")

  useEffect(() => {
		getTest()
			.then((res) => setData(res.message))
			.catch((err) => console.log(err));
	}, []);

  return (
    <div className='container'>
      <p className='p'> { data } </p>
    </div>
  )
}

export default App
