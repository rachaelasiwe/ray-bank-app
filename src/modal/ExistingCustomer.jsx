import React, { useEffect,useState } from 'react'
import { styled } from 'styled-components'
import { Button } from '../components'
import { useNavigate } from 'react-router-dom';
// import Api from '../Api';

const ExistingCustomer = () => {
    const [type_of_account, set_type_of_account] = useState("")
    const [account_number, set_account_number] = useState("");
    const [password, set_password] = useState("");
    const [show, set_show] = useState(false);
    const navigate = useNavigate();

        const body = {
            password
        }
    const handleHide =(element)=>{
        let close = 'HIDE';
        let open = 'SHOW';
        if (!hideStatus) {
            element.innerHTML = open;
            hideStatus = true;
            password.type = 'text';
        }
        else {
            element.innerHTML = close;
            hideStatus = false;
            password.type = 'password';
        }
    }

    const validatePassword = (e) => {
        const pass = e.target.value;
        set_password(pass);
    }

    const submitForm = (e) => {
        e.preventDefault();
        const body = {
            type_of_account,
            account_number,
            password
        }
        if (!type_of_account || !account_number || !password ) {
            alert("All fields are required")
            return;
        }
        navigate('/account');
    }

    // useEffect(() => {
    //     let user = localStorage.getItem('user');
    //     if (user) {
    //         navigate('./account/login');
    //     } 
    // },[])
  return (
    <Wrapper>
          <form onSubmit={submitForm}>
              <div>
                    <label htmlFor="">Type Of Account</label>
                    <select value={type_of_account} onChange={(e)=>set_type_of_account(e.target.value)}>
                        <option value="1">Type of Account</option>
                        <option value="2">Savings</option>
                        <option value="3">Current</option>
                    </select>
              </div>
              <div>
                    <label htmlFor="">Account Number</label>
                    <input type="number" value={account_number} onChange={(e)=>set_account_number(e.target.value)} />
              </div>
              <div>
                    <label htmlFor="">Password</label>
                    <input type={show?"text":"password"} name="password" placeholder='Enter Password'value={password} onChange={validatePassword} />
                    <span onClick={() => set_show(!show)}>HIDE</span>
            </div>
              <Button>Login</Button>
        </form>
    </Wrapper>
  )
}

export default ExistingCustomer;
const Wrapper = styled.div`
    /* background-color: #f2f2f2; */
    & > form{
        margin:30px auto;
        max-width:400px;
        border:1px solid gray;
        background-color: #f2f2f2;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap:15px;
        padding:20px;
        align-items: center;

        & > div{
            max-width: 500px;
            border-radius: 5px;
            align-items: center;padding: 10px 20px;
            width: 90%;
            background: bisque;
            position: relative; 
        
            & > label{
                width:100%;
                text-transform: capitalize;
                
            }
            & > input{
                    width:100% !important;
                    padding:8px 15px;
                    border:1px solid darkgray;
                    outline: none;
                    
                    &:focus{
                        border: 2px solid rgb(182, 4, 173);
                    }
                    }
                & > select{
                    width:100% !important;
                    padding:8px 15px;
                    border:1px solid darkgray;
                    outline: none;
                    
                    &:focus{
                        border: 2px solid rgb(128,0,122);
                    }
                }
            & > span:first-of-type{
                position: absolute;
                right:25px;
                top:35px;
                cursor: pointer;
            }
            }
        }
`