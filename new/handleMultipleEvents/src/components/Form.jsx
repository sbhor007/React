import React from 'react'
import { useState } from 'react'

function Form() {

    const [name, setName] = useState({firstName : '', lastName : ''})

    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(name);

    }

  return (
    <div>
        <h1>{name.firstName} - {name.lastName}</h1>
        <label htmlFor="firstName">First Name : </label>
        <input type="text" id='firstName' onChange={e => setName({...name,firstName : e.target.value})} placeholder='First Name'/><br /><br />
        <label htmlFor="lastName">Last Name : </label>
        <input type="text" id='lastName' onChange={e => setName({...name,lastName : e.target.value})} placeholder='Last Name'/> <br /><br />
        <button onClick={e=>handleSubmit(e)}>Submit</button> {/* submit form */}
    </div>
  )
}

export default Form