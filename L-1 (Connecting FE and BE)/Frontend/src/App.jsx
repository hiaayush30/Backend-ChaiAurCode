import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes").then((res) => {
      setJokes(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <>
      <h1>Jokes with Hitesh Sir</h1>
      <p>Length of Jokes:{jokes.length}</p>
      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <h3>{joke.desc}</h3>
          </div>
        )
      })}
    </>
  )
}

export default App
