

function Navbar({ user }) {
  return (
    <div id="navbar">
      <div id="logo">
        <h2 className="logo1">my</h2><h1>RECIPE</h1><h2 className="logo1">book</h2>
      </div>
      <div className={(user === '') ? 'loggedOut' : 'loggedIn'}>
        <h3>{(user === '') ? "Please log in" : `Hello, ${user.username}`}</h3>
        <button className="normalButton">{(user === '') ? 'Log In' : 'Log Out'}</button>
      </div>
      <div id="navigation">
        <p>Recipes</p>
        <p>My Account</p>
      </div>
    </div>
  );
}

export default Navbar;
