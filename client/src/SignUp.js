import { useState } from "react";

function SignUp({ handleSignupClick, goToLoginClick }) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  function onSignupClick(e) {
    e.preventDefault()
    handleSignupClick(username, password)
  }

  return (
    <div id="signup">
      <h3>Signup</h3>
      <form>
        <input className="textInput" type="text" placeholder="username" onChange={e => setUsername(e.target.value)}></input>
        <br></br>
        <br></br>
        <input className="textInput" type="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
        <br></br>
        <br></br>
        <button className="normalButton" onClick={onSignupClick}>Sign up</button>
      </form>
      <br></br>
      <br></br>
      <div>
        <p>Already signed up?</p>
        <button className="normalButton" onClick={goToLoginClick}>Go to Login</button>
      </div>
    </div>
  );
}

export default SignUp;
