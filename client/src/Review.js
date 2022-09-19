import { useEffect, useState } from 'react'

function Review({ review }) {
  const [canEdit, setCanEdit] = useState(false)
  const [reviewText, setReviewText] = useState(review.review_text)

  function handleEditClick(e) {
    e.preventDefault()
    setCanEdit(canEdit => !canEdit)
  }

  function handleEditType(e) {
    setReviewText(e.target.value)
  }

  function handleChangeEdit(e) {
    e.preventDefault()

  }


  return (
    <div className="recipeCard">
      <h4>{review.user}</h4>
      <p>{review.review_text}</p>
      <form>
        <input className={canEdit ? 'textInput' : 'noInput'} value={reviewText} type="text" onChange={handleEditType}>{}</input>
        <button className="normalButton" onClick={canEdit ? handleChangeEdit : handleEditClick}>{canEdit ? 'Save Changes' : 'Edit Review'}</button>
      </form>
    </div>
  );
}

export default Review;
