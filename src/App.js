import React from 'react';
import logo from './logo.svg';
import './styles/app.css';
import PostView from './components/PostView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <PostView/>
        
      </header>
    </div>
  );
}

export default App;
