import React from "react";
import "./login.css"

const Login = () => {
    return (
        <div className="login_component">
            <div className="login-left-section">
                <span className="login-left-section-span1">Hi! Welcome Back Team</span>
                <span className="login-left-section-span2">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
            </div>
            <div className="login-right-section">
                <div className="login-card">
                    <div className="login-card-heading-div">
                        <div className="login-card-heading">Login</div>
                        <div className="login-card-subheading">Please Login in to your account</div>
                    </div>
                    <div className="login-card-email">
                        <label>Email</label>
                        <input type="text" placeholder="example@tsp.tech" aria-label="Email" />
                    </div>
                    <div className="login-card-password">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" aria-label="Password" />
                    </div>
                    <div className="login-card-checkbox-password">
                        <div className="login-card-checkbox">
                            <input type="checkbox" id="remember_me" /><label htmlFor="remember_me">Remember me</label>
                        </div>
                        <div className="login-card-forgot-password">
                            Forgot Password?
                        </div>
                    </div>
                    <div className="login-card-button">
                        <button className="login-card-sign-in">Sign in</button>
                    </div>
                    <div className="login-card-copyright">
                        <span className="login-card-copyright-text">Copyright &#169; 2021-2022. All rights reserved</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;