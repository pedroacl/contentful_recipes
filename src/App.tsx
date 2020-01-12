import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import RecipesList from 'containers/RecipesList';
import RecipeDetails from 'containers/RecipeDetails';
import Header from 'components/Header'
import Footer from 'components/Footer'

import 'normalize.css';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />

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

        <Footer />
      </div>
    </Router>
  );
}

export default App;
