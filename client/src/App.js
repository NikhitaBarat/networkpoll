import React from 'react';
import { Suspense } from 'react';
import { Header, SubHeader } from './components';
// import { Home, Register } from './views';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useSlashAuth } from '@slashauth/slashauth-react'
import Dashboard from './pages/dashboard/dashboard.pages';

const Home = React.lazy(() => import("./pages/home/home.pages.jsx"));
const Register = React.lazy(() => import("./pages/register/register.pages.jsx"));

function App() {
  const { loginNoRedirectNoPopup, isAuthenticated } = useSlashAuth();
  console.log(isAuthenticated)
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <SubHeader />
        <Header/>
        <Routes>
          <Route index element={<Home/>}/> 
          <Route path='/register' element={<Register/>}/>
          { isAuthenticated && <Route path="/vote" element={<Dashboard />} />}
        </Routes>
        <button className="login-button" onClick={() => loginNoRedirectNoPopup()}>Login With Wallet</button>
      </Suspense>
    </div>
  );
}

export default App;
