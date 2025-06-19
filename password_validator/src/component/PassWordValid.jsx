import React from 'react'
import './PassWordValid.css'
import {  useState } from "react";

export default function PassWordValid() {
  const [pass,setpass] = useState('')
  
  const [min,setmin] = useState(false)
  const [max,setmax] = useState(false)
  const [lowercase,setlowercase] = useState(false)
  const [uppercase,setuppercase] = useState(false)
  const [digit,setdigit] = useState(false)
  const [specialchar,setspecialchar] = useState(false)
  const [success,setsuccess] = useState(false)  



  const passwordhandle=()=>{
    setmin(false);
    setmax(false);
    setlowercase(false);
    setuppercase(false);
    setdigit(false);
    setspecialchar(false);
    setsuccess(false);

      const isMin = pass.length >= 8;
  const isMax = pass.length <= 14;
  const hasLower = /[a-z]/.test(pass);
  const hasUpper = /[A-Z]/.test(pass);
  const hasDigit = /\d/.test(pass);
  const hasSpecial = /[^A-Za-z0-9]/.test(pass);



    if(pass.length<8){
      console.log("you'r password should be minimum 8 char")
      setmin(true);
    }
    if(pass.length>12){
      console.log("you'r password should be maximum 12 char")
      setmax(true);
    }
    
    if(!/[a-z]/.test(pass)){
      console.log("you'r password should be at least one lowecase")
      setlowercase(true);
    }
    if(!/[A-Z]/.test(pass)){
      console.log("you'r password should be at least one uppercase")
      setuppercase(true);
    }
    if(!/\d/.test(pass)){
      console.log("you'r password should be at least one digit")
      setdigit(true);
    }
    if(!/[^A-Za-z0-9]/.test(pass)){

      console.log("you'r password should be at least one special char")
    setspecialchar(true);
    }


    if (isMin && isMax && hasLower && hasUpper && hasDigit && hasSpecial) {
    setsuccess(true);
    console.log("✅ Password is strong!");
  } 

    }

    const showpass=()=>{
     const icon =  document.getElementById("icon");
    const input =   document.getElementById("pass");
      if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
};
    
  
  return (
    <div>
     <div className="outer-box">
    <input type="password" placeholder="Enter Password" onChange={(e)=>setpass(e.target.value)} value={pass} id='pass' /><i class="fa-regular fa-eye-slash" onClick={showpass} id='icon'></i>
    <br />
    <button onClick={passwordhandle}>Submit</button>
   {
    pass && <p id='enterpass'>You Enterd Password : {pass}</p>
   }

</div>
     {min && <p style={{ color: 'red' }}>❌ Minimum 8 characters required</p>}
      {max && <p style={{ color: 'red' }}>❌ Maximum 12 characters allowed</p>}
      {lowercase && <p style={{ color: 'red' }}>❌ At least one lowercase letter required</p>}
      {uppercase && <p style={{ color: 'red' }}>❌ At least one uppercase letter required</p>}
      {digit && <p style={{ color: 'red' }}>❌ At least one digit required</p>}
      {specialchar && <p style={{ color: 'red' }}>❌ At least one special character required</p>}
      {success && <p style={{ color: 'green' }}>✅ Strong password!</p>}
    </div>
  )
}
