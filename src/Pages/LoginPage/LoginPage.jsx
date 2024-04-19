import React, { useState } from 'react';
import './LoginPage.css'
import logo from '../../Common/Images/hiAra_logo.png'

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Logic for handling login
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
  <div className="login-container-main">
    <div className='left-block'>
        <div className="image-container">
       <img src={logo} width="400px"/>
       </div>
    </div>
    <div className='right-block'>
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
    </div>
  );
};

export default LoginPage;
