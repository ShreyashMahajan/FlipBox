import { Navbar } from "../../../components/navbar/navbar"
import '../forgotPass/forgotPass.css'

export const ForgotPass = () => {
  return (
    <div className="forgotPass-cont">
      <Navbar />
      <main className="main-container">
        <div className="form-wrapper">
          <h2 className="form__heading ">Forgot Password</h2>
          <div className="form-main-container">
            <div id="login" className="form-container">
              <label htmlFor="user-reset-phone-email">Enter Phone / Email Id</label>
              <input type="text" name="reset-phone-email" id="reset-phone-email" className="input-data" placeholder="enter phone/email" />
              <label htmlFor="user-otp">Enter OTP</label>
              <div className="confirm-user-data">
                <input type="text" name="userOtp" id="userOtp" placeholder="enter OTP" className="input-data" />
                <label htmlFor="inputPassword">New Password</label>
                <input type="text" name="inputPassword" id="inputPassword" className="input-data" placeholder="password" />
                <label htmlFor="inputPassword">Confirm Password</label>
                <input type="text" name="confirmPassword" id="confirmPassword" className="input-data" placeholder="confirm password" />
              </div>
              <button className="btn-user--login btn--reset">Reset Password</button>
              <a href="/authentication/login_page/login.html"> <button className="btn-user--login btn--change-pass">Change Password</button> </a>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}