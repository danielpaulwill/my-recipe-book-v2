import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  function handleSort(e) {
    fetch("/sort")
    .then((res) => res.json())
    .then((data) => console.log(data))
      };

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
      <h4>User's Reviewed Recipes</h4>
      <button onClick={handleSort}>Console log sorted recipes</button>
      <div className='recipeCardContainer'>
        {recipeList}
      </div>
    </div>
  );
}

export default MyAccount;
