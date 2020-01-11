import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getRecipes, getRecipe } from 'services/recipes'

import './styles.css'

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState<Recipe>()
  const { id } = useParams()

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipe('2E8bc3VcJmA8OgmQsageas')

      if (!data || !id) return
      setRecipe(data.fields)

      console.log('id', data.fields)
    }

    fetchRecipes()
  }, [id, setRecipe])

  if (!recipe) return <div>Not found</div>

  return (
    <div className="recipe-details">
      <div className="recipe-details__photo" style={{ backgroundImage: `url(${recipe.photo.fields.file.url})` }} />

      <div className="recipe-details__description">
        <p>{recipe.title}</p>
        <p>{recipe.description}</p>
      </div>

      <div className="recipe-details__details">
        {recipe.title}
      </div>

    </div >
  )
}

export default RecipeDetails