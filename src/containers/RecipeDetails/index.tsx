import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Spin } from 'antd';

import TagsList from './components/TagsList'

import { getRecipe } from 'services'

import './styles.scss'

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState<Recipe>()
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    if (!id) return

    const fetchRecipes = async () => {
      setIsLoading(true)
      const data = await getRecipe(id)

      if (!data) return
      setRecipe(data.fields)
    }

    fetchRecipes()
    setIsLoading(false)
  }, [id, setRecipe])

  if (!recipe) return <div>Not found</div>

  return (
    <div className="recipe-info__container">
      <a className="recipe-info__back-btn" href="/">{'< Back'}</a>

      {isLoading ? <div className="recipe-info__loading">
        <Spin size="large" />
      </div> :
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
        </div >}
    </div>
  )
}

export default RecipeDetails