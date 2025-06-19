import React from 'react'
import './App.css'
import { useState } from "react";


export default function App() {


  const  [name,setname] = useState('')
  const  [phone,setphone] = useState('')
  const  [email,setemail] = useState('')
  const [pass,setpass] = useState ('')
  const [submit,setsubmit] = useState(false)
  const [error,seterror] = useState(false)

const [nameError, setNameError] = useState('');
const [passError, setPassError] = useState('');
const [emailError, setEmailError] = useState('');
const [phoneError, setPhoneError] = useState('');

  const erromessage= (e)=>{
    e.preventDefault()


    setNameError('');
  setPassError('');
  setEmailError('');
  setPhoneError('');
  seterror(false)
  setsubmit(false)

   let valid = true;
    if(name.length === 0 || /^\d+$/.test(name)) {
      setNameError("please Enter the valide name")
      valid(false)
    }
    else if (!email.includes("@") || !email.includes(".")){
      setEmailError("please Enter the valide email ")
      valid(false) 
    }
    else if (!/^\d{10}$/.test(phone)){
      setPhoneError("please Enter the valid phone no. ")
      valid(false) 
    }
    else if (pass.length < 6){
              setPassError("please Enter the valide password must be 6 char")
              valid(false) 
    }
      if (valid) {
    setsubmit(true);
  } else {
    seterror(true);
  }
}
  

  
  return (
    <div>

      <div className="container">
      <h4>Form </h4>

      <form onSubmit={erromessage}>

      <label htmlFor="name">Name :</label>
      <input type="text" value={name}  onChange={(e) => setname(e.target.value)} /> <br />
      { nameError && <p className="error">{nameError}</p> }
      <label htmlFor="email">Email :</label>
      <input type="email" value={email}  onChange={(e) => setemail(e.target.value)} /><br />
      { emailError && <p className="error">{emailError}</p> }
      <label htmlFor="phone">Phone :</label>
      <input type="number" id="phone"  value={phone}  onChange={(e) => setphone(e.target.value)} />< br />
      { phoneError && <p className="error">{phoneError}</p> }

      <label htmlFor="pass">Password : </label>
      <input type="password" name="pass" id="password" value={pass}  onChange={(e) => setpass(e.target.value)} /> <br /> <br />
      { passError && <p className="error">{passError}</p> }
      <input type="submit" value="submit" id='submit'  />
      </form>

      {submit && <p className='success'>  Form Submitted SuccessFlly</p>}
      {error && <p> fix the error </p>}
      </div>

      <div className="showmessage">

      <h4>Name You Entered : {name}</h4>
      <h4>Email You Entered : {email}</h4>
      <h4>phone number You Entered : {phone}</h4>
      <h4>password  You Entered : {pass}</h4>
      </div>

    </div>
  )
}








