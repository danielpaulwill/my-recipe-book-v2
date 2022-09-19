import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Review from './Review';

function MyAccount({ user }) {

  let navigate = useNavigate()

  useEffect(() => {
    if (user === '') {
      navigate('/login')
    }
  }, []);

  return (
    <div>
      <h4>Username:<br></br>{user.username}</h4>
      <button>Delete User</button>
    </div>
  );
}

export default MyAccount;
