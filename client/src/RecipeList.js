import { useState, useEffect } from 'react'
import Recipe from './Recipe'

function RecipeList({ user }) {
  const [recipes, setRecipes] = useState([])
  const [recipeFormVis, setRecipeFormVis] = useState(false)
  const [recipeTitle, setRecipeTitle] = useState()
  const [imgUrl, setImgUrl] = useState()
  const [description, setDescription] = useState()
  const [category, setCategory] = useState()
  const [ingredients, setIngredients] = useState()
  const [instructions, setInstructions] = useState()
  
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

    function handleShowRecipe(e) {
      e.preventDefault()
      if (user.id !== undefined) {
        setRecipeFormVis(recipeFormVis => !recipeFormVis)
      } else {
        alert('Log in to create a recipe')
      }
    }

    function handleRecipeSubmit(e) {
      e.preventDefault()
      fetch('/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          photo: imgUrl,
          title: recipeTitle,
          description: description,
          ingredients: ingredients,
          instructions: instructions,
          category: category,
      })})
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setRecipes([...recipes, data])
            setRecipeFormVis(recipeFormVis => !recipeFormVis)
          });
        } else {
          res.json().then((err) => alert(err.errors))
        }})
    };
    
    let theRecipes = recipes?.map(recipe => <Recipe key={recipe.id} recipe={recipe} user={user} />)

    return (
      <div className='centeredDiv'>
        <h1>Recipes</h1>
        <button className={recipeFormVis ? 'noInput' : 'normalButton'} onClick={handleShowRecipe}>Create New Recipe</button>
          <br></br>
          <br></br>
        <form className={recipeFormVis ? 'recipeForm' : 'noInput'}>
          <input placeholder='Recipe Title' onChange={e => setRecipeTitle(e.target.value)}></input>
            <br></br>
            <br></br>
          <input placeholder='Image URL' onChange={e => setImgUrl(e.target.value)}></input>
            <br></br>
            <br></br>
          <input placeholder='Recipe Description' onChange={e => setDescription(e.target.value)}></input>
            <br></br>
            <br></br>
          <label>Choose a Category</label>
            <br></br>
          <select name="category" onChange={e => setCategory(e.target.value)}>
            <option value="">Please choose a category</option>
            <option value="Baked Goods">Baked Goods</option>
            <option value="Drinks">Drinks</option>
            <option value="Entrees">Entrees</option>
            <option value="Sides">Sides</option>
          </select>
            <br></br>
            <br></br>
          <textarea placeholder='Ingredients' onChange={e => setIngredients(e.target.value)}></textarea>
            <br></br>
            <br></br>
          <textarea placeholder='Preparation Instructions' onChange={e => setInstructions(e.target.value)}></textarea>
            <br></br>
          <button className='normalButton' onClick={handleRecipeSubmit}>Submit Recipe</button>
            <br></br>
          <button className='normalButton' onClick={handleShowRecipe}>Cancel</button>
        </form>
          <br></br>
        <div className='recipeCardContainer'>
        {theRecipes}
        </div>
      </div>
  );
}

export default RecipeList;
