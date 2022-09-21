import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MyAccount({ user }) {
  const [recipes, setRecipes] = useState()

  let navigate = useNavigate()

  useEffect(() => {
    if (user === '') {
      navigate('/login')
    } else {
      fetch(`/recipes/${user.id}`).then((res) => {
        if (res.ok) {
          res.json().then((res) => {
            setRecipes(res)
          });
        } else {
          res.json().then((err) => {
            alert(`${err.errors}`)
          })
    }})};
  }, []);



  return (
    <div>
      <h4>Username:<br></br>{user.username}</h4>
      {/* <button>Delete User</button> */}
    </div>
  );
}

export default MyAccount;
