import React from 'react'
import { useHistory } from 'react-router-dom'

import './styles.scss'

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
      <div
        className="recipe-card__photo"
        onClick={handleOnClick}
        style={{ backgroundImage: `url(${recipe.photo.fields.file.url})` }} />

      <div className="recipe-card__title" onClick={handleOnClick}>
        <p className="">{recipe.title}</p>
      </div>
    </div>
  )
}

export default RecipeCard