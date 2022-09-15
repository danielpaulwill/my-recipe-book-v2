
function Review({ review }) {

  return (
    <div className="recipeCard">
      <h3>{recipe.title}</h3>
      <img className="recipeImage" src={recipe.photo} />
      <p><b>Category:</b> {recipe.category}</p>
      <p><b>Ingredients List:</b> {recipe.ingredients}</p>
      <p><b>Instructions:</b> {recipe.instructions}</p>
    </div>
  );
}

export default Review;
