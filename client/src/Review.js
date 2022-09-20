import { useEffect, useState } from 'react'

function Review({ review, id, reviewUser, user }) {
  const [canEdit, setCanEdit] = useState(false)
  const [reviewText, setReviewText] = useState(review)
  const [error, setError] = useState('')

  function handleEditClick(e) {
    e.preventDefault()
    if (user.id === reviewUser.id) {
      setCanEdit(canEdit => !canEdit)
    } else {
      setError('Only original reviewer can edit')
    }
  }

  function handleEditType(e) {
    setReviewText(e.target.value)
  }

  function handleChangeEdit(e) {
    e.preventDefault()

  }


  return (
    <div className="reviewCard">
      <h5>User: {reviewUser.username}</h5>
      <p>{review}</p>
      <form className={canEdit ? 'reviewForm' : 'noInput'}>
        <input className='textInput' value={reviewText} type="text" onChange={handleEditType}>{}</input>
        <button className="reviewButton" onClick={canEdit ? handleChangeEdit : handleEditClick}>{canEdit ? 'Save Changes' : 'Edit Review'}</button>
        <br></br>
        <button className='reviewButton'>Delete Review</button>
      </form>
      <button className={canEdit ? 'noInput' : 'normalButton'} onClick={canEdit ? handleChangeEdit : handleEditClick}>{canEdit ? 'Save Changes' : 'Edit Review'}</button>
      <p className='editError'>{error}</p>
    </div>
  );
}

export default Review;
