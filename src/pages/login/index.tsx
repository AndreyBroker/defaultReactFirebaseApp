import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import { useMediaQuery } from '@mui/material';
import { Input } from "@mui/material"
import { User } from '../../types/redux/userTypes';
import { AuthenticationAction } from '../../redux/actions/auth.actions';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const user: User = { name: 'João', email, password };
    dispatch({type: AuthenticationAction.LOGIN, payload: user});
  };

  return (
    <div className='FlexColumn' 
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center", 
        alignItems: "center",
      }}>
      <form onSubmit={handleLogin} className='FlexColumn' 
      style={{
        width: isSmallScreen ? "80%" : "auto",
        minWidth: "30%",
        borderRadius: "5px",
        padding: "15px",
        gap: "15px",
        backgroundColor: isSmallScreen ? "transparent" :  "#FFF",
        boxShadow: isSmallScreen ? "none" : "0 0 5px 0 black"
      }}>
        <div style={{ fontSize: "25px", padding: "5px", textAlign: "center", fontWeight: "600"}}>Conecte-se</div>
        <div className='FlexColumn'>
          <label style={{fontSize: "14px"}}>Email</label>
          <Input type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
        </div>
        <div className='FlexColumn'>
          <label style={{fontSize: "14px"}}>Senha</label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type='submit' className='loginButton btn'>Entrar</button>
        
      </form>
    </div>
  );
};

export default LoginPage;
