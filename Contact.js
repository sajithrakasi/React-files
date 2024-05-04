import axios from 'axios'
import React, { useState } from 'react'

export default function Contact() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[address,setAddress]=useState('')
    const[message,setMessage]=useState('')
   
    

    const handleSubmit = (e) => {
      e.preventDefault();
     
       if(name===''&&email===''&&address===''){
        setMessage('enter required fields')
       }else{
        axios.post('http://localhost:3001/user',{name:name,email:email,address:address})
        .then(res=>console.log(res))
        setMessage('we will contact soon')
       }

    }

    const changeName=(e)=>{
     setName(e.target.value)
    }
    const changeEmail=(e)=>{
  setEmail(e.target.value)
    }
    const changeAddress=(e)=>{
    setAddress(e.target.value)
    }
  return (
    <div>
    <div className='container' style={{backgroundColor:'white'}}>
        <form onSubmit={handleSubmit}>
            <label>Name : </label>
      <input type='text' value={name} placeholder='Enter your name' onChange={changeName}/><br></br><br></br>
      <label>Email : </label>
      <input type='email' value={email} placeholder='Enter your Email' onChange={changeEmail}/><br></br><br></br>
      <label>Address :</label>
      <textarea value={address} placeholder='Enter your Address' onChange={changeAddress}/><br></br><br></br>
      <button type='submit'>submit</button>
      </form>
    </div>
     <p className='message'>{message}</p>
    </div>
  )
}
