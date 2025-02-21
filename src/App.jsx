import { useState } from 'react'
import './App.css'


const users = [
  { "id": 1, "name": "Alex Adams", "age": 23 },
  { "id": 2, "name": "John Doe", "age": 25 },
  { "id": 3, "name": "Emily Smith", "age": 22 },
  { "id": 4, "name": "Michael Brown", "age": 30 },
  { "id": 5, "name": "Sarah Johnson", "age": 27 },
  { "id": 6, "name": "David Williams", "age": 24 },
  { "id": 7, "name": "Laura Miller", "age": 26 },
  { "id": 8, "name": "James Taylor", "age": 29 },
  { "id": 9, "name": "Sophia Davis", "age": 21 },
  { "id": 10, "name": "Daniel Moore", "age": 28 }
]


function App() {
  const [selUser, setUser] = useState(null) 

  return (
    <div>
      {
        selUser ? 
        <div className='modal'>
          <div className="modal-content">
          <center>
            <div className="top">
            <h1>Selected User</h1>
            <button onClick={() => {setUser(null)}}><img src="/close.svg" alt="" /></button>
            </div>
        <div
          className="profile-container"
        >
          <h1>{selUser?.name}</h1>
          <b>{selUser?.age} years old</b>
        </div>
        <br />
        <button className='delete' onClick={() => setUser(null)}>delete user</button>
      </center>
          </div>
        </div>
      : (
        <center>
                  <h1>No user selected, Please click on user</h1>
        </center>
      )
      }
      <br />
      <br />
      <br />

      <div className='container'>

        {
          users.map((user, idx) => (
            <div
              key={user.id}
              className="profile-container"
              onClick={() => {
                  setUser(user)
              }}
            >
              <h1>{user.name}</h1>
              <b>{user.age} years old</b>
            </div>
          ))
        }

      </div>
    </div>
  )
}


export default App
