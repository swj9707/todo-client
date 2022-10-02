import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Copyright from './component/Copyright';
import Login from './component/Login';
import { Box } from '@mui/material';
import App from './App';
import SignUp from './component/SignUp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<SignUp/>}/>
    </Routes>
   </BrowserRouter>
    <Box mt={5}>
      <Copyright/>
    </Box>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
