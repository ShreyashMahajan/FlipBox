import '../signUp/signUp.css'
import '../login/login.css'
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Navbar } from '../../../components/navbar/navbar';
import { useAuth } from '../../../context/authContext/authContext';


export const Login = () => {
  const [user, setUser] = useState({ email: 'admin@gmail.com', password: 'admin' });
  const { login, logout, isUserLoggedIn } = useAuth();

  console.log('location', location);

  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const submit = e => {
    e.preventDefault();
    login(user);
  }
  return (


    <div className="app-container auth-container">
      <Navbar />

      <main className='mainbar auth-mainbar' >
        <div className="form-wrapper">
          <h2 className="form__heading"> Login </h2>
          <div className="form-main-container">
            <form action="#" id="login" className="form-container form--login" onSubmit={submit} >
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" id="email" placeholder="enter email address" value={user.email} className="input-data" required onChange={(e) => inputChangeHandler(e, email)} />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" className="input-data" placeholder="enter password" value={user.password} required onChange={(e) => inputChangeHandler(e, password)} />
              <div className="user-info-cont">
                <div className="user-remember">
                  <input type="checkbox" name="userRemember" id="userRemember" className=" input-user-remember" placeholder="enter password" />
                  <span className="user-remember__heading">Remember me</span>
                </div>
                <NavLink to="/" className='item--link' ><span className="forgot-pass--link"> Forgot your
                  Password? </span> </NavLink>
              </div>
              <button className="btn-user--login" type="submit">Login</button>
              <NavLink to="/signup" className='item--link'>
                <p className="user-new-account">Create New Account</p>
              </NavLink>
            </form>
          </div>
        </div>
      </main>
    </div>

  )
}