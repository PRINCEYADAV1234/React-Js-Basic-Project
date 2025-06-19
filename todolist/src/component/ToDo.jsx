// import React from 'react'
// import { useState } from "react";
// export default function ToDo() {
//   const todohandle=()=>{
//       console.log("you click on the button");     
//       const newtodo = document.getElementById("todos").value;
//       document.getElementById("todos").value=""
//       setshowtodo([...showtodo,newtodo])      
//     }
//     const delete_3=(index)=>{
//       console.log("you click on the delete button")
//       const hello = setshowtodo(showtodo.filter((_,i)=> i !==index ))
//       setshowtodo(hello)
//     }
//     const [showtodo,setshowtodo] = useState(["hello"])
//   return(
//     <div className='bg-gradient-to-bl from-orange-400 to-indigo-600 py-46 '>
//       <div className="bg-blue-900 mx-105 my-2 px-2 py-6 rounded" >
//           <input type="text" name="todo" id="todos" placeholder='Enter Your To Do' className='p-2 m-2 border-1 text-white' />
//           <button className="text-white p-2 px-5 bg-blue-400 m-4 hover:bg-orange-500 rounded" onClick={todohandle}>Submit</button>
//       </div>
//           <div id='showtodo'>
//             <ul>{showtodo.map((showtodo,index)=><li key={index}> 
//               {
//                showtodo && 
//               <div className='justify-self-center'>
//                 {/* <p className='justify-self-center py-4 my-2 text-white'>You'r todo show here</p> */}
//               <div className=' px-40 bg-white text-grey-900 my-5 mx-20 justify-self-center rounded'>
//                 <h5>{showtodo}</h5>
//               {/* <ul>{showtodo.map((showtodo,index)=><li key={index}>{showtodo}</li>)} </ul> */}
//               <button className='text-white p-2 px-5 bg-red-400 m-4 hover:bg-red-900 rounded' onClick={delete_3}> Delete </button>
//               </div>
//               </div> 
//               }  </li>)}</ul>
//           </div>
//     </div>
//   )
// }




// /*  abc {
// border 2px solid black;
// m-50px ; p-70;

// }  */















// chat gpt code 


// import React, { useState } from "react";

// export default function ToDo() {
//   const [inputValue, setInputValue] = useState('');
//   const [todos, setTodos] = useState([]);

//   const todohandle = () => {
//     if (inputValue.trim() !== '') {
//       setTodos([...todos, inputValue]); // Add to array
//       setInputValue(''); // Clear input
//     }
//   };

//   const deleteTodo = (index) => {
//     const newTodos = todos.filter((_, i) => i !== index);
//     setTodos(newTodos);
//   };

//   return (
//     <div className='bg-gradient-to-bl from-orange-400 to-indigo-600 py-46'>
//       <div className="border-2 border-grey-200 mx-105 px-20 py-10 rounded">
//         <input
//           type="text"
//           placeholder='Enter Your To Do'
//           className='p-2 m-2 border text-black rounded'
//           onChange={(e) => setInputValue(e.target.value)}
//           value={inputValue}
//         />
//         <button
//           className="text-white p-2 px-5 bg-blue-400 m-4 hover:bg-blue-900 rounded"
//           onClick={todohandle}
//         >
//           Submit
//         </button>
//       </div>

//       {/* Show Todos */}
//       <div className='px-40 mt-6'>
//         {todos.length > 0 && (
//           <div className="text-white">
//             <p className="font-bold text-xl text-blue-700 mb-2">Your Todos:</p>
//             {todos.map((todo, index) => (
//               <div key={index} className="mb-4 flex items-center text-blue-900 justify-between bg-white bg-opacity-10 p-4 rounded shadow">
//                 <span>{todo}</span>
//                 <button
//                   className='text-white p-1 px-3 bg-red-500 hover:bg-red-700 rounded'
//                   onClick={() => deleteTodo(index)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
