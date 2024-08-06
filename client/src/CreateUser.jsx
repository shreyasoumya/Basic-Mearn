import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/createUser', { name, email, age })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="w-50 rounded">
        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className='mb-2'>
            <label>Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div className='mb-2'>
            <label>Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className='mb-2'>
            <label>Age</label>
            <input type="text" onChange={(e) => setAge(e.target.value)}></input>
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
