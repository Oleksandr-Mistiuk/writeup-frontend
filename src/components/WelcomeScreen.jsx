import React from 'react';

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="center-screen" style={{gap:20}}>
      <img src="/logo.png" alt="WriteUp logo" style={{width:150, height:150, borderRadius:14, background:'#f3f3f3ff', padding:8}}/>
      <div style={{maxWidth:720, width:'100%'}}>
        <h1 style={{marginBottom:6}}>Welcome</h1>
        <p className="lead" style={{marginBottom:18}}>Write. Share. Grow.</p>
      </div>
      <button className="btn" onClick={onStart} style={{minWidth:220}}>Get Started</button>
    </div>
  )
}