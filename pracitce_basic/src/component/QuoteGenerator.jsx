import React, { useState } from 'react'
import "./jokes.css"


export default function QuoteGenerator() {
    const [showquote,setquote] = useState('')

    async function fetchdata(){
        try {
            const responce = await fetch("https://thequoteshub.com/api/")
            if(!responce.ok){
                throw new Error(`https:server error ${responce.status}`);  
            }
            const data = await responce.json();
            console.log(data)
          setquote("Quote:"+ data.text + "\nAuthor : " + data.author)
        }catch (error) {
    console.log ('Fetch error:', error);
  }
    }
  return (
    <div  className='background'>
      <h2 className='justify-self-center underline m-10'>Jokes Generator</h2>
        <div className="border-black border-2 border-solid m-20 px-50 py-20"> 
          {showquote}
        </div>
          <button className='border-2 border-black p-2 bg-sky-600 hover:bg-sky-900  ml-150 ' onClick={fetchdata}>
                show Quote
          </button>
    </div>
  )
}
