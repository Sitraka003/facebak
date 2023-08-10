import React, { useEffect, useState } from 'react';
import { getUsers } from './api/users';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <>
            <li key={user.id}>{user.username}</li>
            <li key={user.id}>{user.email}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default App;
