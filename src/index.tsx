import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer, {intitialState} from './reducer'
import {StateProvider} from './StateProvider';
import { ApolloClient, InMemoryCache, ApolloProvider  } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://workshop-advertisement.osc-fr1.scalingo.io/graphql',
  cache: new InMemoryCache()
});

// client
//   .query({
//     query: gql`
//         {
//         advertisements(research: "hello world"){
//             title
//             description
//             thumbnail
//             }
//         }
//       `
//   })
//   .then(result => console.log(result))
//   .catch(error => console.log);

ReactDOM.render(
  <React.StrictMode>
    

     
      <StateProvider initialState={intitialState} reducer= { reducer }>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </StateProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
