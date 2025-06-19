import React from 'react'
import { useState } from 'react'
export default function Calculator() {
    const [display,setdisplay] = useState('')
    const buttonhandler=(value)=>{
        if(value === 'CE') {
            setdisplay(display.slice(0,-1))
        }
      else if (value === 'C'){
            setdisplay("")
        }
        else if(value === "="){
                setdisplay(eval(display).toString())
        }
        else{

            setdisplay(display + value)
        }
    }
  return (
    <div>
      <div className='bg-gray-500 pt-5 mx-110 rounded'>
       <input type="text" className='bg-sky-100 px-2 ml-21 text-left py-4 width-20 m-2 rounded mb-5 text-' disabled value={display}/> 
       <div className='flex space-x-5 ml-10'>
        <button className='rounded bg-white p-5 my-4 ml-0' onClick={()=>buttonhandler("%")}>
            %
        </button>
        <button className='rounded bg-white p-5 my-4 ' onClick = {()=>buttonhandler("CE")}>
            CE
        </button>
        <button className='rounded bg-white p-5 my-4  ' onClick = {()=>buttonhandler("C")}>
            C
        </button>
        <button className='rounded bg-white p-5 my-4 ' onClick = {()=>buttonhandler("/")}>
            /  
        </button>
       </div>
       <div className='flex space-x-5 ml-10'>
        <button className='rounded bg-white p-5 my-4 ml-0' onClick = {()=>buttonhandler("7")}>
            7
        </button>
        <button className='rounded bg-white p-5 my-4 ' onClick = {()=>buttonhandler("8")}>
            8
        </button>
        <button className='rounded bg-white p-5 my-4  ' onClick = {()=>buttonhandler("9")}>
            9
        </button>
        <button className='rounded bg-white p-5 my-4 ' onClick = {()=>buttonhandler("*")}>
            * 
        </button>
       </div>


       <div className='flex space-x-5 ml-10'>
        <button className='rounded bg-white p-5 my-4 ml-0' onClick = {()=>buttonhandler("4")}>
            4
        </button>
        <button className='rounded bg-white p-5 my-4 ' onClick = {()=>buttonhandler("5")}>
            5
        </button>
        <button className='rounded bg-white p-5 my-4  ' onClick = {()=>buttonhandler("6")}>
            6
        </button>
        <button className='rounded bg-white p-5 my-4 ' onClick = {()=>buttonhandler("-")}>
            -  
        </button>
       </div>

       <div className='flex space-x-5 ml-10'>
        <button className='rounded bg-white p-5 my-4 ml-0' onClick = {()=>buttonhandler("1")}>
            1
        </button>
        <button className='rounded bg-white p-5 my-4 ' onClick = {()=>buttonhandler("2")}>
            2
        </button>
        <button className='rounded bg-white p-5 my-4  ' onClick = {()=>buttonhandler("3")}>
            3
        </button>
        <button className='rounded bg-white p-5 my-4 ' onClick = {()=>buttonhandler("+")}>
            +  
        </button>
       </div>

       <div className='flex space-x-5 ml-10'>
        <button className='rounded bg-white p-5 my-4 ml-0' onClick = {()=>buttonhandler("0")}>
            0
        </button>
        <button className=' rounded bg-white p-5 my-4 ' onClick = {()=>buttonhandler("00")}>
            00
        </button>
        <button className='rounded bg-white p-5 my-4  ' onClick = {()=>buttonhandler(".")}>
            .
        </button>
        <button className='rounded bg-white p-5 my-4 ' onClick = {()=>buttonhandler("=")}>
            =   
        </button>
       </div>
      </div>
    </div>
  )
}
