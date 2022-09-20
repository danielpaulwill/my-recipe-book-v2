import { useState } from 'react'

function Review({ review, id, reviewUser, user }) {
  const [canEdit, setCanEdit] = useState(false)
  const [reviewExists, setReviewExists] = useState(true)
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
    fetch(`/reviews/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        review_text: reviewText,
      })
    }).then((res) => res.json())
      .then((data) => {
        setReviewText(data.review_text)
        setCanEdit(canEdit => !canEdit)
      })
  };

  function handleDeleteClick(e) {
    e.preventDefault()
    fetch(`/reviews/${id}`, {
      method: "DELETE" 
    }).then((res) => {
      console.log(res)
      setReviewExists(reviewExists => !reviewExists)
    });
  }


  return (
    <div className={reviewExists ? "reviewCard" : "noInput"}>
      <h5>User: {reviewUser.username}</h5>
      <p className={canEdit ? 'noInput' : 'reviewText'}>{reviewText}</p>
      <form className={canEdit ? 'reviewForm' : 'noInput'}>
        <textarea className='textInput' value={reviewText} type="text" onChange={handleEditType}></textarea>
        <button className="reviewButton" onClick={handleChangeEdit}>Save Changes</button>
        <br></br>
        <button className='reviewButton' onClick={handleDeleteClick}>Delete Review</button>
      </form>
      <button className={canEdit ? 'noInput' : 'reviewButton'} onClick={handleEditClick}>Edit Review</button>
      <p className='editError'>{error}</p>
    </div>
  );
}

export default Review;
