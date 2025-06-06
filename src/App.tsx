import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState<[]>()
  useEffect(() => {
    const getUsers = async() => {
      const res = await fetch("http://44.221.139.44:5000/services/users")
      const response = await res.json()
      setUsers(response)
    }

    getUsers();
  },[])

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
        {users?.map(item => {
          return(
            <p>{item.name} {item.email} {item.direction} {item.petPhoto}</p>
          )
        })}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
