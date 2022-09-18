import { useState, useEffect } from 'react'
import Recipe from './Recipe'

function RecipeList() {
  const [recipes, setRecipes] = useState()
  
  useEffect(() => {
    fetch("/recipes").then((res) => {
      if (res.ok) {
        res.json().then((res) => {
          setRecipes(res)
        });
      } else {
        res.json().then((err) => {
          alert(`${err.errors}`)
        })
      }});
    }, []);
    
    let theRecipes = recipes?.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)
    
    return (
      <div>
      <h1>RecipeList</h1>
      <div className='recipeCardContainer'>
      {theRecipes}
      </div>
    </div>
  );
}

export default RecipeList;
