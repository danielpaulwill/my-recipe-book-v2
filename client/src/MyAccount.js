import { useEffect, useState } from 'react';

function MyAccount({ user }) {
  const [review, setReview] = useState()

  // useEffect(() => {
  //   fetch(`/users/${user.id}`).then((res) => {
  //     if (res.ok) {
  //     res.json().then((user) => {
  //       setUser(user)
  //     });
  //     navigate('/recipes')
  //     alert("Welcome back!");
  //   } else {
  //     res.json().then((err) => {
  //       if (err.errors === undefined){
  //         alert("")
  //       } else {
  //       alert(err.errors)
  //     }
  //   })}});
  // }, []);


  // let theRecipes = recipes?.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)


  return (
    <div>
      <h4>Username:<br></br>{user.username}</h4>
      <h4>Reviews</h4>
      
    </div>
  );
}

export default MyAccount;
