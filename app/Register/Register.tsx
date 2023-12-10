"use client";
import React, { useState } from 'react';
 import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
 import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';
import './style.css'
interface FormState {
  firstName:string;
  lastName: string;
  email: string;
  password: string;
}
interface FacebookResponse {
  id: string;
  accessToken: string;
  name: string;
  email: string;
  picture: { data: { url: string } };
}
const RegistrationPage: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
   const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
     console.log(response);
   }

  const responseFacebook = (response: FacebookResponse) => {
    console.log(response);
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  };
  return (<div className="index">
  <div className="div">
    <div className="frame-footer">
      <div className="frame">
        <p className="p">
          <span className="text-wrapper">Noviopus © 2023</span>
        </p>
      </div>
      <div className="frame-2">
        <div className="by-signing-up-you-wrapper">
          <p className="p">
            <span className="text-wrapper">By signing up, you are creating a Noviopus career account. </span>
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
    </div>
    <div className="overlap">
      <div className="frame-body">
        <div className="overlap-group">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="frame-3" />
              <div className="rectangle-wrapper">
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https:cdn.animaapp.com/projects/654b7f52f15e9264a9097b82/releases/654b7fa037c3baf19c3c050e/img/rectangle-26-1@2x.png"
                />
              </div>
            </div>
          </div>
          <img
            className="frame-why-noviopus"
            alt="Frame why noviopus"
            src="https:cdn.animaapp.com/projects/654b7f52f15e9264a9097b82/releases/654b7fa037c3baf19c3c050e/img/frame-why-noviopus-1@2x.png"
          />
          <img
            className="frame-arrow"
            alt="Frame arrow"
            src="https:cdn.animaapp.com/projects/654b7f52f15e9264a9097b82/releases/654b7fa037c3baf19c3c050e/img/frame-arrow-1@2x.png"
          />
          <div className="frame-sign-in-form">
      <div className="frame-4">
        
         <GoogleLogin
              className='google-login'
            clientId="YOUR_CLIENT_ID"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        
        <div className="facebook-login">
        <FacebookLogin
      appId="yourAppID"  replace with your app ID
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}
    />
                  </div> 
              <div className="frame-or-register">
                <div className="overlap-group-3">
                  <div className="frame-OR">
                    <p className="OR">
                      <span className="text-wrapper-3">OR</span>
                    </p>
                  </div>
                  <div className="frame-lines">
                    <img
                      className="line"
                      alt="Line"
                      src="https:cdn.animaapp.com/projects/654b7f52f15e9264a9097b82/releases/654b7fa037c3baf19c3c050e/img/line-2-4@2x.png"
                    />
                    <img
                      className="line-2"
                      alt="Line"
                      src="https:cdn.animaapp.com/projects/654b7f52f15e9264a9097b82/releases/654b7fa037c3baf19c3c050e/img/line-2-4@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-first-name">
                <div className="frame-wrapper">
                  <div className="div-wrapper">
                    <p className="span-wrapper">
                      <span className="text-wrapper-3">First name</span>
                    </p>
                  </div>
                </div>
                <input className='frame-5' type="text" name="" id="" />
              </div>
              <div className="frame-last-name">
                <div className="frame-last-name-2">
                  <div className="last-name-wrapper">
                    <p className="span-wrapper">
                      <span className="text-wrapper-3">Last name</span>
                    </p>

                  </div>
                </div>
                <input className='frame-5' type="text" name="" id="" />
              </div>
              <div className="frame-email">
                <div className="frame-wrapper">
                  <div className="div-wrapper">
                    <p className="span-wrapper">
                      <span className="text-wrapper-3">Email</span>
                    </p>
                    
                  </div>
                </div>
                <input className='frame-5' type="email" name="" id="" />
              </div>
              <div className="frame-PASSWORD">
                <div className="frame-password">
                  <div className="password-wrapper">
                    <p className="span-wrapper">
                      <span className="text-wrapper-3">Password</span>
                    </p>
                  </div>  
                </div>
                <input className='frame-5' type="password" name="" id="" />
              </div>
              <button className="frame-get-started">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Navbar/> */}
      NavBar
    </div>
  </div>
  

</div>
);
};
export default RegistrationPage;
