import React, { useState } from 'react';

export default function SignUpScreen({ onBackToWelcome, onGoToLogin, onSignUpSuccess }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit(e){
    e.preventDefault();
    // TODO: integrate with backend /auth/register
    console.log('signup', {username, email});
    onSignUpSuccess && onSignUpSuccess();
  }

  return (
    <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:20}}>
      <form className="form" onSubmit={submit}>
        <img src="/logo.png" alt="logo" style={{width:86, height:86, alignSelf:'center', borderRadius:12, background:'#fff', padding:6}}/>
        <h1 style={{textAlign:'center'}}>Welcome</h1>
        <p style={{textAlign:'center', marginBottom:6}}>Sign up to get started</p>

        <input className="input" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
        <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="input" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />

        <div style={{height:8}}/>
        <button className="btn" type="submit">Sign Up</button>

        <p style={{textAlign:'center', marginTop:12, opacity:0.95}}>
          Already have an account? <button type="button" onClick={onGoToLogin} style={{background:'none', border:'none', color:'var(--color-white)', fontWeight:700, cursor:'pointer'}}>Log in</button>
        </p>

        <p style={{textAlign:'center', marginTop:6}}>
          <button type="button" onClick={onBackToWelcome} style={{background:'none', border:'none', color:'rgba(255,255,255,0.75)', cursor:'pointer'}}>Back</button>
        </p>
      </form>
    </div>
  )
}