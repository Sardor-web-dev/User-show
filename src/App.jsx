import { useState } from 'react'
import './App.css'
import { USERS } from './utils/users'

function App() {
  const [selUser, setUser] = useState(null) 

  return (
    <div>
      {
        selUser ? (
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
        )
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
        <User/>
      </div>
    </div>
  )

  
  function User() {
    return (
        <>
                {
          USERS.map((user, idx) => (
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
        </>
    );
}

}


export default App
