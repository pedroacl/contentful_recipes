import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import RecipesList from 'containers/RecipesList';
import RecipeDetails from 'containers/RecipeDetails';
import Button from 'components/Button'

import 'normalize.css';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="header-container">
            <a className="App-header__home-link" href="/">Marley Spoon</a>

            <div className="App-header__session-links">
              <p>Login</p>
              <Button />
            </div>
          </div>
        </header>

        <main className="main-container">
          <Switch>
            <Route path="/recipes/:id">
              <RecipeDetails />
            </Route>
            <Route path="/">
              <RecipesList />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
