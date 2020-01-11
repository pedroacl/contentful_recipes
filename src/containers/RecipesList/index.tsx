import React, { useEffect, useState } from 'react'

import RecipeCard from './components/RecipeCard'

import { getRecipes } from 'services/recipes'

import './styles.css'

const RecipesList = () => {
  type State = {
    recipes: Recipe[]
  }

  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes()

      if (!data) return

      const mapped = data.items.map((item: any) => item.fields)
      setRecipes(mapped)
      console.log(mapped)
    }

    fetchRecipes()
  }, [])

  return (
    <div className="container">
      <h1>Our weekly menu</h1>

      <div className="recipes-list">
        {recipes.map(recipe => <RecipeCard key={recipe.title} recipe={recipe} />)}
      </div>
    </div>
  )
}

export default RecipesList