import React, { useEffect, useState } from 'react'
import { Spin } from 'antd';

import RecipeCard from './components/RecipeCard'

import { getRecipes } from 'services'

import './styles.scss'

const RecipesList = () => {
  type State = {
    recipes: Recipe[]
  }

  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loadingRecipes, setLoadingRecipes] = useState(false)

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoadingRecipes(true)
      const data = await getRecipes()
      if (!data) return

      const mapped = data.items.map((item: any) => { return { ...item.fields, id: item.sys.id } })
      setRecipes(mapped)
    }

    fetchRecipes()
    setLoadingRecipes(false)
  }, [])

  return (
    <div className="recipes-list">
      <h1>Our weekly menu</h1>

      {loadingRecipes ? <div className="recipes-list__loading-container"><Spin size="large"/></div> :
        <div className="recipes-list__container">
          {recipes.map(recipe =>
            <RecipeCard
              key={recipe.title}
              recipe={recipe} />)}
        </div>
      }
    </div>
  )
}

export default RecipesList