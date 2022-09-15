import { useEffect, useState } from 'react';

function MyAccount({ user }) {
  const [reviews, setReviews] = useState()

  useEffect(() => {
    fetch(`/reviews/${user.id}`).then((res) => {
      if (res.ok) {
      res.json().then((res) => {
        setReviews(res)
      });
    }});
  }, []);


  let userReviews = reviews?.map(review => <Review key={review.id} review={review} />)


  return (
    <div>
      <h4>Username:<br></br>{user.username}</h4>
      <h4>Reviews</h4>
      
    </div>
  );
}

export default MyAccount;
