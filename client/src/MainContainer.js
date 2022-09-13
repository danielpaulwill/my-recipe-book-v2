import { useState, useEffect } from 'react'
import Login from "./Login";
import SignUp from "./SignUp";

function MainContainer({ setUser }) {
  // const [errors, setErrors] = useState()
  
  const login = <Login goToSignupClick={goToSignupClick} handleLoginClick={handleLoginClick} />
  const signUp = <SignUp handleSignupClick={handleSignupClick} goToLoginClick={goToLoginClick} />

  const [currentPage, setCurrentPage] = useState(signUp)

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
        setCurrentPage()
      } else {
        res.json().then((err) => alert(err.errors))
      }})
  };

  function handleLoginClick() {

  }

  function goToLoginClick() {
    setCurrentPage(login)
  }

  function goToSignupClick() {
    setCurrentPage(signUp)
  }


  return (
    <div id='mainContainer'>
      {/* <h1>MainContainer</h1> */}
      {currentPage}
    </div>
  );
}

export default MainContainer;
