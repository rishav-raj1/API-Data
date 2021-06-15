import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {


  const [users, setUsers] = useState([]);

  const getUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      setUsers(await response.json());

  }
  
  useEffect(() => {
          getUsers();
  }, []);


  return(
    <div>

  <h1 className="heading_style"> Rishav Kumar (Jsonplaceholder API) </h1>


  {
      users.map((curElem) => {
          return (
            <div>

            <div className="cards">
              <div className="card">
              <h3 className="card_id">UserId:{curElem.userId}</h3>
              <div className="card_info">
              <span className="card_title">{curElem.title}</span>
              <h3 className="card_id">id:{curElem.id}</h3>
              </div>
              </div>
            </div>
            </div>
          )

      })
  }

  </div>

  );
}

export default App
