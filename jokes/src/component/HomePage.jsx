import React from "react";
import "./Homepage.css";
import { useState } from "react";

export default function HomePage() {
    const [joke, setJoke] = useState(null);
    async function fetchData(){
  try {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); 
    setJoke(data)
        console.log(data); 

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
  return (
    <div>
      <div className="container_1">
        {joke && (
          <div>
            <h5>{joke.setup}</h5>
            <p>{joke.punchline}</p>
          </div>
        )}
      </div>

        <div className="button">
      <button type="button" className="btn btn-danger mx-3"  onClick={fetchData}>
        Show Jokes
      </button>
      <button type="button" className="btn btn-primary mx-3 " onClick={fetchData}>
        Next Jokes 
      </button>
        </div>
    </div>
  );
}
