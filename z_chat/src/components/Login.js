import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        // Başarılı giriş, kullanıcıyı yönlendir
        navigate('/Mainscreen');
      } else {
        // Başarısız giriş, kullanıcıyı bilgilendir
        alert('Giriş başarısız. Kullanıcı adı veya şifre yanlış.');
      }
    } catch (error) {
      console.error('Login request error:', error);
      alert('Giriş sırasında bir hata oluştu.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>

      {/* Kayıt ol bağlantısı */}
      <p>
        Henüz hesabınız yok mu?{' '}
        <Link to="/register" className="register-link">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;
