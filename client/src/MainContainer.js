import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from "./Login";
import SignUp from "./SignUp";
import RecipeList from './RecipeList';
import MyAccount from './MyAccount';

function MainContainer({ setUser, user, goToLoginClick }) {
  let navigate = useNavigate()

  // Auto-login
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
      res.json().then((user) => {
        setUser(user)
      });
      navigate('/recipes')
    } else {
      navigate('/login')
    }
  });
  }, []);

  // Sign up
  function handleSignupClick(username, password) {
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
    })})
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => setUser(data));
        navigate('/recipes')
      } else {
        res.json().then((err) => alert(err.errors))
      }})
  };

  // Log in
  function handleLoginClick(username, password) {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user)
          navigate('/recipes')
        });
      } else {
        res.json().then((err) => alert("Your username or password was incorrect. Please try again."))
      }
    });
  }

  function goToSignupClick() {
    navigate('/signup')
  }

  return (
    <div id='mainContainer'>
      <Routes>
        <Route path='login' element={<Login goToSignupClick={goToSignupClick} handleLoginClick={handleLoginClick} />} />
        <Route path='signup' element={<SignUp handleSignupClick={handleSignupClick} goToLoginClick={goToLoginClick} />} />
        <Route path='recipes' element={<RecipeList user={user} />} />
        <Route path='account' element={<MyAccount user={user} />} />
      </Routes>
    </div>
  );
}

export default MainContainer;
