/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./tsp.css";

const TSP = () => {
    return (
        <div className="tsp">
            <header className="header">
                <div className="header-image">
                    <img src="/tsp.webp" className="image" />
                </div>
                <div className="header-text">
                    <span className="header-text-span">S/4TestMate</span>
                </div>
            </header>
            <div className="body">
                <div className="body-background-image"></div>
                <div className="login-card">
                    <div className="login-card-heading-div">
                        <span className="login-card-heading-span">
                            LOGIN OR REGISTER
                        </span>
                    </div>
                    <div className="login-card-email">
                        <input type="text" placeholder="Email" aria-label="Email" />
                    </div>
                    <div className="login-card-password">
                        <input type="password" placeholder="Password" aria-label="Password" />
                    </div>
                    <div className="login-card-checkbox">
                        <input type="checkbox" id="remember_me" />
                        <label htmlFor="remember_me">Remember me</label>
                    </div>
                    <div className="login-card-button">
                        <button className="login-card-sign-in">Sign in</button>
                        <button className="login-card-create">Create Account</button>
                    </div>
                </div>
            </div>
            <div className="tsp-footer">
                <div className="footer-text">
                    <span className="footer-text-span">
                        Copyright The Silicon Partners, 2023
                    </span>
                </div>
                <div className="footer-buttons">
                    <button className="footer-button-back-to-home">Back to Home</button>
                    <button className="footer-button-Contact-Us">Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default TSP;