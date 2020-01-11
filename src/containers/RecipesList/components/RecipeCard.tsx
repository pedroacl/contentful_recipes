import React from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'

type Props = {
  recipe: Recipe
}

const RecipeCard: React.FC<Props> = (props) => {
  const { recipe } = props

  const history = useHistory()

  const handleOnClick = () => {
    history.push(`recipes/${recipe.id}`)
  }

  return (
    <div className="recipe-card">
      <img
        className="recipe-card__photo"
        onClick={handleOnClick}
        src={recipe.photo.fields.file.url}
        alt={recipe.photo.fields.title} />

      <div className="recipe-card__title">
      <p className="">{recipe.title}</p>
      </div>
    </div>
  )
}

export default RecipeCard