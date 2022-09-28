import { useState } from 'react'
import Review from './Review'

function Recipe({ recipe, user }) {
  const [reviews, setReviews] = useState(recipe.reviews)
  const [revFormVis, setRevFormVis] = useState(false)
  const [reviewText, setReviewText] = useState()

  let recipeReviews = reviews?.map(review => <Review key={review.id} review={review.review_text} id={review.id} reviewUser={review.user} user={user} />)
    
  function handleWriteReview(e) {
    e.preventDefault()
    if (user.id !== undefined) {
      setRevFormVis(revFormVis => !revFormVis)
    } else {
      alert('Log in to write a review')
    }
  }

  function handleEditType(e) {
    setReviewText(e.target.value)
  }

  function handleReviewCreate(e) {
    e.preventDefault()
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recipe_id: recipe.id,
        review_text: reviewText,
    })})
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setReviews([...reviews, data])
          setRevFormVis(revFormVis => !revFormVis)
        });
      } else {
        res.json().then((err) => alert(err.errors))
      }})
  }

  return (
    <div className="recipeCard">
      <h3>{recipe.title}</h3>
      <img className="recipeImage" src={recipe.photo} alt="A yummy recipe" />
      <p><b>Category:</b> {recipe.category}</p>
      <p><b>Ingredients List:</b> {recipe.ingredients}</p>
      <p><b>Instructions:</b> {recipe.instructions}</p>
      <button className={revFormVis ? 'noInput' : 'normalButton'} onClick={handleWriteReview}>Write Review</button>
      <form className={revFormVis ? 'reviewForm' : 'noInput'}>
        <textarea className='textInput' type="text" onChange={handleEditType}></textarea>
        <br></br>
        <button className="reviewButton" onClick={handleReviewCreate}>Save Review</button>
        <br></br>
        <button className='reviewButton' onClick={handleWriteReview}>Cancel</button>
      </form>
      {recipeReviews}
    </div>
  );
}

export default Recipe;
