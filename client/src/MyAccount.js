import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Recipe from './Recipe';

function MyAccount({ user }) {
  const [recipes, setRecipes] = useState()

  let navigate = useNavigate()

  useEffect(() => {
    if (user === '') {
      navigate('/login')
    } else {
      fetch(`/recipes/${user.id}`).then((res) => {
        if (res.ok) {
          res.json().then((res) => {
            setRecipes(res)
          });
        } else {
          res.json().then((err) => {
            alert(`${err.errors}`)
          })
    }})};
  }, []);

  let recipeList = recipes?.map(recipe => (
    <div className="recipeCard" key={recipe.id}>
        <h3>{recipe.title}</h3>
        <img className="recipeImage" src={recipe.photo} alt="A yummy recipe" />
        <p><b>Category:</b> {recipe.category}</p>
        <p><b>Ingredients List:</b> {recipe.ingredients}</p>
        <p><b>Instructions:</b> {recipe.instructions}</p>
      </div>
  ))





  return (
    <div>
      <h4>Username:<br></br>{user.username}</h4>
      {/* <button>Delete User</button> */}
      <h4>User's Recipes</h4>
      {recipeList}
    </div>
  );
}

export default MyAccount;
