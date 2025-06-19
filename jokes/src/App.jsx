import React from 'react' 
 
 import "./App.css";
import HomePage from './component/HomePage';
 export default function App() {
   return (
     <div>

       <div className="container_hello">
       <h1>Jokes Generator</h1>
       </div>
        <HomePage />
     </div>
   )
 }