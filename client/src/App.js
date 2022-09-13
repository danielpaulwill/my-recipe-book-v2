import './App.css';
import Navbar from './Navbar';
import { useState } from 'react'


function App() {
  const [user, setUser] = useState('')

  return (
    <div className="App">
            <Navbar user={user} />

    </div>
  );
}

export default App;
