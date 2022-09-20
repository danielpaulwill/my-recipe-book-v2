import { useState } from 'react'
import Review from './Review'

function Recipe({ recipe, user }) {
  const [reviews, setReviews] = useState(recipe.reviews)
  const [revFormVis, setRevFormVis] = useState(false)
  const [reviewText, setReviewText] = useState()

  let recipeReviews = reviews?.map(review => <Review key={review.id} review={review.review_text} id={review.id} reviewUser={review.user} user={user} />)
    
  function handleWriteReview(e) {
    e.preventDefault()
    setRevFormVis(revFormVis => !revFormVis)
  }

  function handleEditType(e) {
    setReviewText(e.target.value)
  }

  function handleReviewCreate(e) {
    console.log(e.target.value)
  }

  return (
    <div className="recipeCard">
      <h3>{recipe.title}</h3>
      <img className="recipeImage" src={recipe.photo} alt="A yummy recipe" />
      <p><b>Category:</b> {recipe.category}</p>
      <p><b>Ingredients List:</b> {recipe.ingredients}</p>
      <p><b>Instructions:</b> {recipe.instructions}</p>
      <button className={revFormVis ? 'noInput' : 'normalButton'} onClick={handleWriteReview} >Write Review</button>
      <form className={revFormVis ? 'reviewForm' : 'noInput'}>
        <textarea className='textInput' type="text" onChange={handleEditType}></textarea>
        <button className="reviewButton" onClick={handleReviewCreate}>Save Review</button>
        <br></br>
        <button className='reviewButton' onClick={handleWriteReview}>Cancel</button>
      </form>
      {recipeReviews}
    </div>
  );
}

export default Recipe;
