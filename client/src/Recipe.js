import { useState } from 'react'
import Review from './Review'

function Recipe({ recipe }) {
  // const [reviews, setReviews] = useState(recipe.reviews)

  // let reviewArr = recipe.reviews.map()
  
  // if (reviews.length > 0) {
    let recipeReviews = recipe.reviews?.map(review => <Review key={review.id} review={review.review_text} id={review.id} reviewUser={review.user} />)
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
