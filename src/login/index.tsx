import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import useSWR from 'swr';

export default function Login() {
  const { data: user, error, mutate } = useSWR('/user');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div style={{ padding: 15 }}>
      <h1>Login</h1>
      <p>
        <label>
          <div>Username:</div>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
      </p>
      <p>
        <label>
          <div>Password:</div>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
      </p>
      <button
        onClick={() => {
          axios
            .post('/login', {
              username,
              password,
            })
            .then((res) => {
              mutate(res.data);
            });
        }}
      >
        Login
      </button>
    </div>
  );
}
