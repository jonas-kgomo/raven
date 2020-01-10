import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import "./styles/tailwind.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo';
import client from './apollo';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
      document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// hot reload module
if (module.hot) module.hot.accept();