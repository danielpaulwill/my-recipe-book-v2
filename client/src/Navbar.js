import { useNavigate, NavLink } from 'react-router-dom'

function Navbar({ user, setUser, goToLoginClick }) {
  let navigate = useNavigate()

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE" 
    }).then((res) => {
      if (res.ok) {
        setUser('');
        navigate('/login')
      }});
  }




  return (
    <div id="navbar">
      <div id="logo">
        <h2 className="logo1" style={{ color: '#B3531b' }}>my</h2><h1 style={{ color: '#E0190e' }}>RECIPE</h1><h2 className="logo1" style={{ color: '#B3531b' }}>book</h2>
      </div>
      <div className={(user === '') ? 'loggedOut' : 'loggedIn'}>
        <h3>{(user === '') ? "Please log in" : `Hello, ${user.username}`}</h3>
        <button className="normalButton" onClick={(user === '') ? goToLoginClick : handleLogout}>{(user === '') ? 'Log In' : 'Log Out'}</button>
      </div>
      <div id="navigation">
        {/* <p>Recipes</p> */}
        <NavLink
          to="recipes" className='navlinks'
          // style={({ isActive }) =>
          //   isActive ? activeStyle : undefined
          // }
        >
          Recipes
        </NavLink>
        <NavLink
          to='account' className='navlinks'
        >
          My Account
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
