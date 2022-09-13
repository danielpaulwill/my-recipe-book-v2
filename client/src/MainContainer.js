import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from "./Login";
import SignUp from "./SignUp";

function MainContainer({ setUser, goToLoginClick }) {
  let navigate = useNavigate()
  // const [errors, setErrors] = useState()
  
  // const login = <Login goToSignupClick={goToSignupClick} handleLoginClick={handleLoginClick} />
  // const signUp = <SignUp handleSignupClick={handleSignupClick} goToLoginClick={goToLoginClick} />

  // const [currentPage, setCurrentPage] = useState(signUp)

  // Auto-login
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
      res.json().then((user) => {
        setUser(user)
      });
      // navigate('/game/play')
      alert("You have auto logged in");
    } else {
      res.json().then((err) => alert(err.errors))
      // navigate('/welcome')
    }});
  }, []);

  function handleSignupClick(username, password) {
    fetch('/users', {
      method: 'POST',
      // mode: 'no-cors',
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
        // navigate('/game/setup')
        // window.scrollTo(0, 0);
        // setCurrentPage()
      } else {
        res.json().then((err) => alert(err.errors))
      }})
  };

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
        });
        // navigate('/game/play')
        // window.scrollTo(0, 0);
      } else {
        res.json().then((err) => alert(err.errors))
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
      </Routes>
      {/* <h1>MainContainer</h1> */}
      {/* {currentPage} */}
    </div>
  );
}

export default MainContainer;
