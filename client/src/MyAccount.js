import { useEffect } from 'react';

function Recipe({ user }) {


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

  return (
    <div>
      <h4>Username:<br></br>{user.username}</h4>
      <h4></h4>
    </div>
  );
}

export default Recipe;
