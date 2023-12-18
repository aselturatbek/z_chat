import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    // Şifreleri karşılaştır
    if (password !== confirmPassword) {
      alert('Şifreler eşleşmiyor. Lütfen tekrar deneyin.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      });

      if (response.ok) {
        // Başarılı kayıt, kullanıcıyı giriş sayfasına yönlendir
        navigate('/Login');
      } else {
        // Başarısız kayıt, kullanıcıyı bilgilendir
        alert('Kayıt başarısız. Kullanıcı adı veya e-posta zaten kullanımda.');
      }
    } catch (error) {
      console.error('Register request error:', error);
      alert('Herhalde kayit olamadin <3');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <div className="input-group">
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      
      <button onClick={handleRegister}>Register</button>

      {/* Giriş sayfasına yönlendiren bağlantı */}
      <p>
        Zaten bir hesabınız mı var?{' '}
        <Link to="/Login" className="login-link">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default Register;
