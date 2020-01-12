import React, { useEffect, useState } from 'react'
import { useMachine } from '@xstate/react';
import { useParams } from 'react-router'
import { Alert, Spin } from 'antd';

import TagsList from './components/TagsList'

import { stateMachine, States, Events } from '../loadingMachine'
import { getRecipe } from 'services'

import './styles.scss'

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState<Recipe>()
  const { id } = useParams()
  const [current, send] = useMachine(stateMachine)

  useEffect(() => {
    if (!id) {
      send(Events.ERROR)
      return
    }

    const fetchRecipe = async () => {
      try {
        const data = await getRecipe(id)
        setRecipe(data.fields)
        send(Events.LOADED)
      } catch (error) {
        send(Events.ERROR)
      }
    }

    send(Events.LOAD)
    fetchRecipe()
  }, [id, send, setRecipe])

  return (
    <div className="recipe-info__container">
      <a className="recipe-info__back-btn" href="/">{'< Back'}</a>

      {current.matches(States.LOADING) && <div className="recipe-info__loading">
        <Spin size="large" />
      </div>}

      {current.matches(States.LOADED) && recipe &&
        <div className="recipe-info">
          <div className="recipe-info__photo" style={{ backgroundImage: `url(${recipe.photo.fields.file.url})` }} />

          <div className="recipe-info__body">
            {recipe.tags && <TagsList tags={recipe.tags} />}

            <h1>{recipe.title}</h1>

            <p className="recipe-info__description">{recipe.description}</p>
            {recipe.chef && <p className="recipe-info__chef">
              Shared with you by: <span className="recipe-info__chef-name">{recipe.chef.fields.name}</span>
            </p>}
          </div>
        </div >
      }

      {current.matches(States.ERROR) &&
        <Alert message="Error loading recipes" type="error" />
      }
    </div>
  )
}

export default RecipeDetails