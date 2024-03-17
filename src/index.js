import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import LoginButton from "../components/login";
import LogoutButton from "../components/logout";
import Profile from "../components/profile";

const IndexPage = () => (
  <Auth0Provider
      domain="dev-ujbug0lrq88yile8.us.auth0.com"
      clientId="7rChKF3lHO64GABJwP2MTJYuEGk1CIuU"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App>
        <div className="App">
        <LoginButton />
        <LogoutButton />
        <Profile />
        <button>Sign in here pls</button>
        </div>
      </App>
    </Auth0Provider>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
