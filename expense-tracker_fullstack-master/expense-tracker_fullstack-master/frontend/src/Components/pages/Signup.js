import React, {useState} from 'react'
import styled from 'styled-components';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import { plus } from '../../utils/Icons';
import FormStyling from 'styled-components';



const Signup = () => {

    const [firstname, setfirstName] = useState('');
    const [lastname, setlastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
   // const [confirmPassword, setConfirmPassword] = useState('');
   
    
    
    
    const handleSignup = ({ setAuthenticated }) => {

        if(!firstname || !lastname || !email || !password){

            toast.error('Fill up all the fields')
            return
        // Perform signup logic
        setAuthenticated(true); // Update authentication state
      }
    }

    

    return (
    //     <>
    //     <form style={FormStyling}>
    //     <input
    //   type="text"
    //   placeholder="firstname"
    //   style={inputStyle}
    //   value={firstname}
    //   onChange={(e) => setfirstName(e.target.value)}
    // /><br></br>
        
    //       <input
    //   type="text"
    //   placeholder="lastname"
    //   value={lastname}
    //   onChange={(e) => setlastName(e.target.value)}
    // /><br></br>
    // <input
    //   type="email"
    //   placeholder="Email"
    //   value={email}
    //   onChange={(e) => setEmail(e.target.value)}
    // /><br></br>
    // <input
    //   type="password"
    //   placeholder="Password"
    //   value={password}
    //   onChange={(e) => setPassword(e.target.value)}
    // /><br/>
    
      
    //   <br/>
        
    //     <button onClick={handleSignup}>Sign Up</button>
    
    
    //     </form>
    //     </>
    <SignupStyled>
        <div className='Main-ctn'>
            <li>
                
            </li>
            <h2>Sign up</h2>
        <div className="input-ctn">
        <input 
      type="text"
      placeholder="First Name"
      name={'title'} 
      //style={inputStyle}
      value={firstname}
      onChange={(e) => setfirstName(e.target.value)}
    />
        </div><br/>
        <div className="input-ctn">
        <input 
      type="text"
      placeholder="Last Name"
      name={'title'} 
      //style={inputStyle}
      value={lastname}
      onChange={(e) => setfirstName(e.target.value)}
    />
        </div><br/>
        <div className="input-ctn">
        <input 
      type="text"
      placeholder="Email"
      name={'email'} 
      //style={inputStyle}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
        </div><br/>
        <div className="input-ctn">
        <input 
      type="text"
      placeholder="Password"
      name={'password'} 
      //style={inputStyle}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
        </div><br/>
        <div className="submit-btn">
                <Button 
                    name={'Submit'}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                    onClick={handleSignup}
                />
            </div>
        </div>
        
    </SignupStyled>  
    // <FormStyled >
            
    //         <div className="input-control">
    //             <input 
    //                 type="text" 
    //                 value={firstname}
    //                 name={'firstname'} 
    //                 placeholder="firstname"
    //                 //onChange={handleInput('firstname')}
    //             />
    //         </div>
            
            
            
    //         <div className="submit-btn">
    //             <Button 
    //                 name={'Add Income'}
    //                 bPad={'.8rem 1.6rem'}
    //                 bRad={'30px'}
    //                 bg={'var(--color-accent'}
    //                 color={'#fff'}
    //             />
    //         </div>
    //     </FormStyled>

    )
   
}
// const SignupStyled = styled.form`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     hight: 200px;
//     width: 50rem;
//     margin-bottom 30px;
//     margin-left: 200px;
//     gap: 1rem;
//     border: 2px solid #191a1c; //black border color
//     border-radius: 2rem;
//     padding: 2rem ;
//     input-ctn{
//     display:flex;
//     gap: 2rem; 
//     width: 20rem; 
//     }
    


const SignupStyled = styled.form`

    display: flex;
    flex-direction: column;
    margin: 150px 450px 400px;
    gap: 3rem;
    border: #191a1c;

    
    input, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
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

    



    
    



export default Signup