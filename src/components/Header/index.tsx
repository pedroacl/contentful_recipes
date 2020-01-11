import React from 'react'
import Button from 'components/Button'

import './styles.scss'

const Header = () => {
  return <header className="App-header">
    <div className="header-container">
      <a className="header-container__home-link" href="/">Marley Spoon</a>

      <div className="header-container__navigation-links">
        <ul className="header-container__links">
          <li className="header-container__link active">
            <a href="/recipes">Recipes</a>
          </li>
        </ul>

        <ul className="header-container__links">
          <li className="header-container__link">
            <a href="#">Login</a>
          </li>
          <li>
            <Button label="Sign up"/>
          </li>
        </ul>
      </div>
    </div>
  </header>
}

export default Header