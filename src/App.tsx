import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import RecipesList from './containers/RecipesList';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>

        <main>
          <Switch>
            <Route path="/">
              <RecipesList />
            </Route>
            <Route path="/users">
              Here
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
