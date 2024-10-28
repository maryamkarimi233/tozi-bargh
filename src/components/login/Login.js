import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      navigate('/sing');
    } else {
      alert('نام کاربری یا کلمه عبور اشتباه است');
    }
  };

  return (
    <div className="login-container">
      <h2>صفحه ورود</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>نام کاربری:</label>
          <select value={username} onChange={(e) => setUsername(e.target.value)}>
            <option value="">انتخاب نام کاربری</option>
            {users.map((user, index) => (
              <option key={index} value={user.username}>{user.username}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>کلمه عبور:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit" className="login-button">ورود</button>
      </form>
    </div>
  );
};

export default Login;
