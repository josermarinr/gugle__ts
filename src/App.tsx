import React from 'react';
import './App.css';
import Home from './page/home/Home';
import { BrowserRouter as 
            Router, 
            Route, 
            Switch } from "react-router-dom";
import SearchPage from './page/search/SearchPage'

function App() {
  return (
    <div className="App">
      <Router>

          <Switch>

            <Route path="/search">
              <SearchPage/>
            </Route> 

            <Route path="/">
              <Home/>
            </Route>

          </Switch>


      </Router>

    </div>
  );
}

export default App;
