import React from 'react';
//import logo from './logo.svg';
import './index.css';
import PostView from './components/PostView';
import Tweet from './components/Tweet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  return (
    <body class="bg-white font-sans">
    
      <div class="">
        <div class="container mx-auto flex items-center py-5">
         <nav class="w-2/5">
           <a href="#" class="top-nav"><FontAwesomeIcon icon='home'/>Home</a> 
           <a href="#" class="top-nav"><i className="fa"/>Home</a> 
         </nav>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
           <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
         </svg>
         
        <div class="w-3/5 flex justify-end">
          <div class="mr-4">
             <input class="bg-gray-200 h-8 px-5 py-2 text-xs w-48 rounded-full" placeholder="Search Raven"></input>
          </div>
          <button class="font-small bg-blue-500 hover:bg-blue-300 hover:text-gray text-white font-bold py-1 px-4 rounded-full">
            Tweet
       </button>
       </div>
          
        </div>

       <header class="bg-purple-100 m-6 p-6 rounded shadow-lg">
          <h1 class="text-teal-500 text-2xl">Welcome to Raven</h1>
       </header>

 
 


</div> 

       
        <p class="font-bold">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <PostView/>

        <Tweet/>
        
      
    </body>
  );
}

export default App;
