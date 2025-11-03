import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import './styles/global.css';

export default function App(){
  // simple screen state for S1 (no router yet)
  const [screen, setScreen] = useState('welcome');

  function handleLoginSuccess(){
    // for now redirect to placeholder main (we haven't built MyBooks)
    setScreen('main');
  }
  if(screen === 'main'){
    return (
      <div style={{minHeight:'100vh', padding:20}}>
        <h1 style={{textAlign:'center'}}>My Books (placeholder)</h1>
        <p style={{textAlign:'center'}}>You are logged in (mock). Next: build MyBooks screen.</p>
        <div style={{display:'flex', justifyContent:'center', marginTop:24}}>
          <button className="btn" onClick={()=>setScreen('welcome')}>Logout (back to welcome)</button>
        </div>
      </div>
    )
  }

  return (
    <>
      {screen === 'welcome' && <WelcomeScreen onStart={() => setScreen('login')} />}
      {screen === 'login' && <LoginScreen onBackToWelcome={() => setScreen('welcome')} onGoToSignUp={() => setScreen('signup')} onLoginSuccess={handleLoginSuccess} />}
      {screen === 'signup' && <SignUpScreen onBackToWelcome={() => setScreen('welcome')} onGoToLogin={() => setScreen('login')} onSignUpSuccess={handleLoginSuccess} />}
    </>
  )
}