import { useState } from "react";
import { Navbar } from "../../../components/navbar/navbar"
import '../signUp/signUp.css';


export const SignUp = () => {
  const [user, setUser] = useState({});


  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const submit = (e) => {
    e.preventDefault();
    console.log('signup submit')
    console.log('from signup', user);
    signUp(user);
  }
  return (

    <div className="app-container auth-container">
      <Navbar />
      <main className="mainbar auth-mainbar">
        <div className="form-wrapper">
          <h2 className="form__heading ">Sign Up</h2>
          <div className="form-main-container">
            <div className="form-sub-container">
              <form action="#" id="signUp" className="form-container" onSubmit={submit}>
                <div className="form-data-container">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" className="input-data" placeholder="Name" onChange={(e) => inputChangeHandler(e)} />
                  <label htmlFor="email">Email address</label>
                  <input type="email" name="email" id="email" placeholder="enter email address" className="input-data" onChange={(e) => inputChangeHandler(e)} />
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name='password' className="input-data" placeholder="enter password" onChange={(e) => inputChangeHandler(e)} />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" className="input-data" placeholder="enter password again" onChange={(e) => inputChangeHandler(e)} />
                </div>
                <div className="form-data-container">
                  <label htmlFor="contact">Contact Number</label>
                  <input type="number" name="contact" id="userContact" className="input-data" placeholder="contact number" onChange={(e) => inputChangeHandler(e)} />
                  <div className="gender-info">
                    <label htmlFor="gender">Gender</label>
                    <br />
                    <input type="radio" name="gender" defaultValue="male" className="input-radio" onChange={(e) => inputChangeHandler(e)} />Male
                    <input type="radio" name="gender" defaultValue="female" className="input-radio" onChange={(e) => inputChangeHandler(e)} />Female
                    <input type="radio" name="gender" defaultValue="other" className="input-radio" onChange={(e) => inputChangeHandler(e)} />Other
                  </div>
                </div>
                <div className="form-sub-container">
                  <div className="user-info-cont">
                    <div className="user-remember">
                      <input type="checkbox" name="userRemember" id="userRemember" className=" input-user-remember" placeholder="enter password" />
                      <span className="user-remember__heading"> I accept all terms and conditions</span>
                    </div>
                  </div>
                  <button className="btn-user--login user-create-account" type="submit">Create New Account</button>
                  <a href="/authentication/login_page/login.html" className="link"> <p className="link-center">Already have an account</p> </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}