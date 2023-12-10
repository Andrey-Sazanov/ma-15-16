"use client";
import React from "react";
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';
import "./style.css";

export const Login = (): JSX.Element => {
  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
  }
  interface FacebookResponse {
    id: string;
    accessToken: string;
    name: string;
    email: string;
    picture: { data: { url: string } };
  }
  
  const responseFacebook = (response: FacebookResponse) => {
    console.log(response);
  }
  
  return (
    <div className="index">
      <div className="div">
        <div className="frame-footer-sign-in">
          <div className="frame">
            <p className="p">
              <span className="text-wrapper">Noviopus © 2023</span>
            </p>
          </div>
          <div className="frame-2">
            <div className="by-signing-in-you-wrapper">
              <p className="p">
                <span className="text-wrapper">By signing </span>
                <span className="text-wrapper">in</span>
                <span className="text-wrapper">, you are creating a Noviopus career account. </span>
                <span className="text-wrapper">A</span>
                <span className="text-wrapper">nd agree to the Noviopus</span>
              </p>
            </div>
            <div className="frame-terms-of-use">
              <p className="p">
                <span className="text-wrapper">Terms of Use</span>
              </p>
            </div>
            <div className="frame-and">
              <p className="p">
                <span className="text-wrapper">and</span>
              </p>
            </div>
            <div className="frame-privacy-policy">
              <p className="p">
                <span className="text-wrapper">Privacy Policy</span>
              </p>
            </div>
          </div>
          <div className="line">
            <img
              className="line"
              alt="Line"
              src="https://cdn.animaapp.com/projects/655f50a56adb05354e8cc65c/releases/655f50f261650bef5e9ab215/img/line-3-1@2x.png"
            />
          </div>
        </div>
        <div className="frame-body">
          <div className="overlap">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="frame-3" />
                <div className="rectangle-wrapper">
                  <img
                    className="rectangle"
                    src=""/>
                </div>
              </div>
            </div>
            <div className="frame-4">
              <div className="frame-second-title">
                <p className="reach-your-career">
                  <span className="span">Reach your career goals</span>
                </p>
              </div>
              <div className="frame-big-title">
                <p className="login-to-noviopus">
                  <span className="text-wrapper-2">Login to Noviopus</span>
                </p>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div className="forgot-your-password-wrapper">
                  <p className="forgot-your-password">
                    <span className="text-wrapper">Forgot your password?</span>
                  </p>
                </div>
                <div className="frame-get-started">
                  <div className="sign-in-wrapper">
                    <p className="sign-in">
                      <button className="sign-in-btn">Sign in</button>
                    </p>
                  </div>
                </div>
                <div className="frame-or-register">
                  <div className="overlap-group-2">
                    <div className="OR-wrapper">
                      <p className="OR">
                        <span className="text-wrapper-4">OR</span>
                      </p>
                    </div>
                    <img
                      className="img"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/655f50a56adb05354e8cc65c/releases/655f50f261650bef5e9ab215/img/line-1-1@2x.png"
                    />
                    <img
                      className="line-2"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/655f50a56adb05354e8cc65c/releases/655f50f261650bef5e9ab215/img/line-2-1@2x.png"
                    />
                  </div>
                </div>
                <div className="frame-PASSWORD">
                  <div className="frame-password">
                    <div className="password-wrapper">
                      <p className="span-wrapper">
                        <span className="text-wrapper-4">Password</span>
                      </p>
                    </div>
                  </div>
                  <input type="text" className="frame-5" />
                </div>
                <div className="frame-email">
                  <div className="frame-wrapper">
                    <div className="email-wrapper">
                      <p className="span-wrapper">
                        <span className="text-wrapper-4">Email</span>
                      </p>
                    </div>
                  </div>
                  <input type="text" className="frame-5" />
                </div>
                   <div className="facebook-login">
                  <FacebookLogin
                    appId="yourAppID" 
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    className = "facebook-login"/>
                  </div> 
                 <GoogleLogin
                  className="google-login"
                  clientId="YOUR_CLIENT_ID"
                  buttonText="Login with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
          /> *
              </div>
            </div>
            <img
              className="arrow"/>
          </div>
        </div>
        Navbar  
        {/* <Navbar/> */}
      </div>
    </div>
  );
};
