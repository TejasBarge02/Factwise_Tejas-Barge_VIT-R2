import React from 'react';
import WithLoader from './WithLoader'; // Import your withLoader HOC here

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
};

const UserList = ({ data }) => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WithLoader(UserList, fetchData);
