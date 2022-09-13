import './App.css';
import { useState } from 'react'
import Navbar from './Navbar';
import MainContainer from './MainContainer';


function App() {
  const [user, setUser] = useState('')
    // let navigate = useNavigate()

  return (
    <div className="App">
            <Navbar user={user} />
            <MainContainer setUser={setUser} />

    </div>
  );
}

export default App;
