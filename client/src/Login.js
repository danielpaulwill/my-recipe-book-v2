import { useState } from "react";

function Login({ goToSignupClick, handleLoginClick }) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  function handleSubmit(e) {
    e.preventDefault();
    handleLoginClick(username, password)
  }

  return (
    <div id="signup">
      <h3>Login</h3>
      <form>
        <input className="textInput" type="text" placeholder="username" onChange={e => setUsername(e.target.value)}></input>
        <br></br>
        <br></br>
        <input className="textInput" type="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
        <br></br>
        <br></br>
        <button className="normalButton" onClick={handleSubmit}>Log in</button>
      </form>
      <br></br>
      <br></br>
      <div>
        <p>Don't have an account?</p>
        <button className="normalButton" onClick={goToSignupClick}>Sign Up Here</button>
      </div>
    </div>
  );
}

export default Login;
