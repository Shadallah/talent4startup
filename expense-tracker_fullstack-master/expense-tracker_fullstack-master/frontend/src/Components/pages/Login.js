import React, { useState } from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { ToastContainer, toast } from 'react-toastify';
//import FormStyling from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';




  
const Login = ({ setAuthenticated }) => {



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

    
        // Perform login logic

        
        
          const handleLogin = async () => {
           
          }


          return (
        
            <LoginStyled>
               <h2>Log in</h2>
    <div className="input-ctn">
    <input 
    type="text"
    placeholder="Email"
    name={'email'} 
    //style={inputStyle}
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    </div>
    <div className="input-ctn">
    <input 
    type="text"
    placeholder="Password"
    name={'password'} 
    //style={inputStyle}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
    </div>
      <div className='submit-btn'>
    
      <Button 
                    name={'Submit'}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                    onClick={handleLogin}
                />
    </div>
  
          </LoginStyled>

      )
  }

      
const LoginStyled = styled.form`

    display: flex;
    flex-direction: column;
    margin: 150px 450px 400px;
    gap: 1rem;
    border: #191a1c;

    
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        //resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);

.input-ctn{
    margin: '10px 0';
    padding: '10px';
    border: '1px solid #ddd';
    borderRadius: '4px';
    width: '500px';
    }

    .submit-btn{
        button{
        hight: 300px
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;

export default Login