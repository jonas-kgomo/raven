import React from 'react';
import logo from './logo.svg';
import './index.css';
import PostView from './components/PostView';
import Tweet from './components/Tweet';

function App() {
  return (
    <div class="bg-grey-light font-sans">
      <header >
      <div>

  <header class="bg-purple-darker m-6 p-6 rounded shadow-lg">
    <h1 class="text-blue text-3xl">Welcome to React</h1>
  </header>
  <p class="text-yellow">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
</div>  
       <a>sf</a>
        <p class="font-bold">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <PostView/>

        <Tweet/>
        
      </header>
    </div>
  );
}

export default App;
