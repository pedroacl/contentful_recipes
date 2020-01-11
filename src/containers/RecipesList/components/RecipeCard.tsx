import React from 'react'
import './styles.css'

type Props = {
  recipe: Recipe
}

const RecipeCard: React.FC<Props> = (props) => {
  const { recipe } = props

  return (
    <div className="recipe-card">
      <img className="recipe-card__photo" src={recipe.photo.fields.file.url} alt={recipe.photo.fields.title}/>

      <div>
        <div>{recipe.title}</div>
      </div>
    </div>
  )
}

export default RecipeCard