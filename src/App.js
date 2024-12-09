import React, { useState } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Hello!');
    }, 2000);
  };

  const handleEmailOrPhoneChange = (event) => {
    setEmailOrPhone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="App">
      <div className="login-container">
        <div className="top">
          <span className="language">Tiếng Việt </span>
          <img src="/iconfackebook.webp" alt="Fakebook Icon" className="fakebook-icon" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="input-container input">
              <input
                type="text"
                id="emailOrPhone"
                value={emailOrPhone}
                onChange={handleEmailOrPhoneChange}
              />
              <label htmlFor="emailOrPhone" className={emailOrPhone ? 'active' : ''}>
                Số điện thoại hoặc email
              </label>
            </div>
            <div className="input-container input">
              <input className='password-icon'
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <label htmlFor="password" className={password ? 'active' : ''}>
                Password
              </label>
            </div>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? <div className="loader"></div> : 'Đăng nhập'}
          </button>
          <a href="#">Bạn quên mật khẩu ư?</a>
          <div className="divider"></div>
          <button className="create-account">Tạo tài khoản mới</button>
          <div className='meta'>
            <img src="/meta.png" alt="Meta Icon" className="fakebook-icon" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;