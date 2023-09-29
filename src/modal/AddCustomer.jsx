import React, { useState,useRef } from 'react'
import { Button } from '../components'
import {styled} from 'styled-components' 

const AddCustomer = () => {
    const [firstname, set_firstname] = useState("");
    const [lastname, set_lastname] = useState("");
    const [gender, set_gender] = useState("");
    const [mobile_number, set_mobile_number] = useState("");
    const [marital_status, set_marital_status] = useState("");
    const [password, set_password] = useState("");
    const [c_password, set_c_password] = useState("");
    const [date, set_date] = useState("");
    const messageRef = useRef();
    const [show, set_show] = useState(false);

    


    const generateAccNum = () => {
        const length = 10;
         let accNum = "";
         for (let i = 0; i < length; i++){
             accNum += Math.floor(Math.random() * 10);
        }
        return accNum;
     }
    const addUser = (e) => {
        e.preventDefault();
        const body = {
            firstname,
            lastname,
            mobile_number,
            marital_status,
            password,
            c_password,
            gender
        }
        const body2 = {
            account_no: generateAccNum(),
        }
        console.log(body2.account_no, 'account number')
        alert(`This is your account number: ${body2.account_no}`);

        if (!gender && !lastname && !firstname) {
            alert("All fields are required")
        }
    }

    const handleHide = (element) => {
        let form = document.forms['form'];
        let password = document.forms['form']['password'];
        let c_password = document.forms['form']['c_password'];
            let close = 'HIDE';
            let open = 'SHOW';
            if (!hideStatus) {
                element.innerHTML = open;
                hideStatus = true;
                password.type = 'text';
                c_password.type = 'text';
            }
            else {
                element.innerHTML = close;
                hideStatus = false;
                password.type = 'password';
                c_password.type = 'password';
            }
    }
    
        
    const validatePassword = (e) => {    
        const pass = e.target.value;
        set_password(pass);
        let message = messageRef.current;
    if (pass.length >= 8) {
        let special_char = pass.match(/\W/g);
        if (!special_char) {
            message.textContent = 'Weak Password';
            message.style.color = "orange"
            return;
        }
        else {
            if (special_char.length == 1) {
                message.textContent = 'Medium Password';
                message.style.color = 'yellow'

                return;
            }
            else {
                message.textContent = 'Strong Password';
                message.style.color = 'green';
                return;
            }
        }
    }
    else {
        message.textContent = 'password must be atleast 8 character long';
        message.style.color = 'red';
        return;
    }
    }
    



  return (
    <Wrapper>
          <form name="form" onSubmit={addUser}>
                <div>
                    <label>Firstname:</label>
                    <input type="text" name="" placeholder='Enter Firstname' value={firstname} onChange={(e) => set_firstname(e.target.value)} />
                </div>
                <div>
                    <label>Lastname:</label>
                    <input type="text" name="" placeholder='Enter Lastname' value={lastname} onChange={(e) => set_lastname(e.target.value)} />
                </div>
                <div>
                    <label>Mobile Number:</label>
                    <input type="number" value={mobile_number} onChange={(e) => set_mobile_number(e.target.value)} />
              </div>
              <div>
                    <label>Date of Birth:</label>
                    <input type="date" value={date} onChange={(e) => set_date(e.target.value)} />
              </div>
              <div>
                    <label>Gender:</label>
                    <select value={gender} onChange={(e)=>set_gender(e.target.value)}>
                        <option value="0">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
              </div>
              <div>
                    <label>Marital Status:</label>
                    <select value={marital_status} onChange={(e)=>set_marital_status(e.target.value)}>
                        <option value="0">Marital Status</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="single">single</option>
                  </select>
              </div>
              <div>
                    <label>password:</label>
                    <input type={show?"text":"password"} name="password" placeholder='Enter Password'value={password} onChange={validatePassword} />
                    <span onClick={() => set_show(!show)}>HIDE</span>
                    <br />
                    <span className='message' ref={messageRef}  ></span>
              </div>
              <div>
                    <label>Confirm password</label>
                    <input type={show?"text":"password"} name="c_password" placeholder='Confirm Password' value={c_password} onChange={(e)=>set_c_password(e.target.value)}/>
                  <span onClick={()=>set_show(!show)}>HIDE</span>
                </div>
         
              <Button >Submit</Button>
          </form>  
    </Wrapper>
  )
  }

export default AddCustomer;
const Wrapper = styled.div`
    border-radius: 40px;
    & > form{
        // margin:20px auto;
        // max-width:600px;
        border:1px solid gray;
        background-color: #f2f2f2;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap:2px;
        padding:20px 20px 10px;
        align-items: center;
        @media screen and (max-width: 400px){
           padding: 10px 10px 5px;
           gap: 0px;
        }
        & > div{
            max-width: 400px;
            border-radius: 8px;
            align-items: center;padding: 10px 20px;
            width: 90%;
            background: #9b9797;
            position: relative;
            @media screen and (max-width: 400px){
                max-width: 400px;
        }

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
                border: 2px solid rgb(128,0,122);
            }
            @media screen and (max-width: 400px){
                padding: 5px 8px;
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
            @media screen and (max-width: 400px){
                padding: 5px 8px;
        }
        }
        & > span:first-of-type{
            position: absolute;
            right:25px;
            top:35px;
            cursor: pointer;
          
        }
        @media screen and (width <= 500px) {
            & > span{

            }
        }
    }
}
`