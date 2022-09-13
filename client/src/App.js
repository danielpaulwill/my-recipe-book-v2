import './App.css';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import MainContainer from './MainContainer';


function App() {
  const [user, setUser] = useState('')
    let navigate = useNavigate()

  function goToLoginClick() {
    // setCurrentPage(login)
  }
  

  return (
    <div className="App">
            <Navbar user={user} setUser={setUser} goToLoginClick={goToLoginClick} />
            <MainContainer setUser={setUser} goToLoginClick={goToLoginClick} />

    </div>
  );
}

export default App;
