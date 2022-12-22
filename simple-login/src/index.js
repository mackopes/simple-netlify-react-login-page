import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './LandingPage';
import reportWebVitals from './reportWebVitals';
// import {Helmet} from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  // Navigate,
  // useNavigate,
  Routes,
  // useLocation,
} from 'react-router-dom';

// const netlifyAuth = {
//   isAuthenticated: false,
//   user: null,
//   authenticate(callback) {
//     this.isAuthenticated = true;
//     window.netlifyIdentity.open();
//     window.netlifyIdentity.on('login', user => {
//       this.user = user;
//       callback(user);
//     });
//   },
//   signout(callback) {
//     this.isAuthenticated = false;
//     window.netlifyIdentity.logout();
//     window.netlifyIdentity.on('logout', () => {
//       this.user = null;
//       callback();
//     });
//   }
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        {/* <Route path="app" element={<App />} />
        <Route path="public" element={<Public />} />
        <Route path="login" element={<Login />} /> */}
        {/* <PrivateRoute path="protected" element={<Protected />} /> */}
        {/* <Route path="protected" element={
          <RequireAuth>
            <Protected />
          </RequireAuth>
        } /> */}
      </Routes>
    </Router>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
