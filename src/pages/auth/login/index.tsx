import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
          api
            .post('/login', {
              json: {
                username,
                password,
              },
            })
            .json()
            .then((data) => {
              mutate(data);
            });
        }}
      >
        Login
      </button>
    </div>
  );
}
