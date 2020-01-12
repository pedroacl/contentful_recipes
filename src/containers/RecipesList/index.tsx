import React, { useEffect, useState } from 'react'
import { Spin } from 'antd';
import { useMachine } from '@xstate/react';
import { Alert } from 'antd';

import RecipeCard from './components/RecipeCard'

import { stateMachine, States, Events } from '../loadingMachine'
import { getRecipes } from 'services'

import './styles.scss'

const RecipesList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [current, send] = useMachine(stateMachine)

  useEffect(() => {
    const fetchRecipes = async () => {
      send(Events.LOAD)

      try {
        const data = await getRecipes()
        const mapped = data.items.map((item: any) => { return { ...item.fields, id: item.sys.id } })
        setRecipes(mapped)
        send(Events.LOADED)
      } catch (error) {
        send(Events.ERROR)
      }
    }

    fetchRecipes()
    send(Events.LOADED)
  }, [send])

  return (
    <div className="recipes-list">
      <h1>Our weekly menu</h1>

      {current.matches(States.LOADING) && (
        <div className="recipes-list__loading-container">
          <Spin size="large" />
        </div>
      )}

      {current.matches(States.LOADED) && (
        <div className="recipes-list__container">
          {recipes.map(recipe =>
            <RecipeCard
              key={recipe.title}
              recipe={recipe} />)}
        </div>
      )}

      {current.matches(States.ERROR) && (
        <Alert message="Error loading recipes" type="error" />
      )}
    </div>
  )
}

export default RecipesList