import './jokes.css'
import { useState} from 'react';


export default function jokesgenerator() {
const [showjokes,setjokes] = useState('');
async function fetchData() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  setjokes (  <>
    Setup: {data.setup}
    <br />
    Punchline: {data.punchline}
  </>
)
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

  return (
    <div className='background'>
        <h2 className='justify-self-center underline m-10'>Jokes Generator</h2>
        <div className="border-black border-2 border-solid m-20 px-50 py-20"> 
          {showjokes}
        </div>

        <button className='text-align-center p-2 ml-140 text-white bg-blue-700 rounded border-black border-2' onClick={fetchData}>
          Show Jokes  
        </button>
    </div>
  )
}
