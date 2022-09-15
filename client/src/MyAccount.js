import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Review from './Review';

function MyAccount({ user }) {
  const [reviews, setReviews] = useState()

  console.log({ reviews })

  let navigate = useNavigate()

  useEffect(() => {
    if (user === '') {
      navigate('/login')
    } else {
      fetch(`/reviews/${user.id}`).then((res) => {
        if (res.ok) {
          res.json().then((res) => {
            setReviews(res)
          });
        }})}
  }, []);


  let userReviews = reviews?.map(review => <Review key={review.id} review={review} />)


  return (
    <div>
      <h4>Username:<br></br>{user.username}</h4>
      <h4>Reviews</h4>
      {userReviews}
    </div>
  );
}

export default MyAccount;
