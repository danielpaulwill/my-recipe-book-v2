import { useState } from 'react'
import Review from './Review'

function Recipe({ recipe }) {
  const [reviews, setReviews] = useState(recipe.reviews)
  
  // if (reviews.length > 0) {
    let recipeReviews = reviews?.map(review => <Review key={review.id} review={review} />)
    // }
    
  return (
    <div className="recipeCard">
      <h3>{recipe.title}</h3>
      <img className="recipeImage" src={recipe.photo} alt="A yummy recipe" />
      <p><b>Category:</b> {recipe.category}</p>
      <p><b>Ingredients List:</b> {recipe.ingredients}</p>
      <p><b>Instructions:</b> {recipe.instructions}</p>
      {recipeReviews}
    </div>
  );
}

export default Recipe;
