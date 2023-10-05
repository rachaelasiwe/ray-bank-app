import React, { useRef, useState } from 'react'
import { styled } from 'styled-components';
import logo from '../assets/raybank.png'
import Nigeria from '../assets/nigeria.jpeg'
import Canada from '../assets/canada.jpeg';
import Mozambique from '../assets/mozambique.png';
import Cameroon from '../assets/cameroon.png';
import Kenya from '../assets/kenya.png';
import Ghana from '../assets/ghana.jpeg';
import SouthAfrica from '../assets/southafrica.png';
import Uk from '../assets/uk.png';
import Us from '../assets/us flag.jpeg';
import { SearchForm, Interface, Faq, Footer, Button } from '../components';
import { useModal } from '../hooks/useModal'
import { AddCustomer, ExistingCustomer } from '../modal';
import { AiOutlineMenu as Menu } from 'react-icons/ai';
import { FaTimes as Cancel } from 'react-icons/fa'
import { TbRulerMeasure } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [search_name, set_search_name] = useState("");
    const [country, set_country] = useState(Nigeria);
    const [showNav, setShowNav] = useState(false);
    // const navRef = useRef();
    const navigate = useNavigate();

    const { handleShowModal, set_modal_content} = useModal();
  const addUser = () => {
      set_modal_content(<AddCustomer />)
        handleShowModal(true);
    }

    const existingUser = () => {
        // set_modal_content(<ExistingCustomer />);
        // handleShowModal(true);
        navigate('/account');

    }
    
    const showNavBar = () => {
        console.log("GOT A CLICK",showNav)
        setShowNav(!showNav)
        // console.log("GOT A CLICK 2", showNav)

        // let nav = document.querySelector ('nav');
        // nav.classList.toggle('active-nav');
    }

    
    return (
        <>
            <Wrapper>
                <header>
                    <a><img src={logo} /></a>
                    <nav>
                        <a href="#">Personal</a>
                        <a href="#">Business</a>
                        <a href="#">Ways To Bank</a>
                        <a href="#">Contact Us</a>
                        <Button onClick={addUser}>Sign Up</Button>
                        <Button onClick={existingUser}>Login</Button>
                        <span><Cancel onClick={showNavBar}/></span> 
                    </nav>
                </header>
                    <div>
                        <SearchForm onChange={set_search_name}/>
                        <div>
                            <a href="">Country<img src={country} /></a>
                            <ul>
                                <li><img src={Canada} />&nbsp;<a href="#">Canada</a></li>
                                <li> <img src={Kenya} />&nbsp;<a href="#">Kenya</a></li>
                                <li> <img src={Uk} />&nbsp;<a href="#">UnitedKingdom</a></li>
                                <li> <img src={Nigeria} />&nbsp;<a href="#">Nigeria</a></li>
                                <li> <img src={SouthAfrica} />&nbsp;<a href="#">SouthAfrica</a></li>
                                <li> <img src={Mozambique} />&nbsp;<a href="#">Mozambique</a></li>
                                <li>  <img src={Ghana} />&nbsp;<a href="#">Ghana</a></li>
                                <li> <img src={Cameroon} />&nbsp;<a href="#">Cameroon</a></li>
                                <li> <img src={Us} />&nbsp;<a href="#">USA</a></li>
                            </ul>
                        </div>
                        <div>
                        
                        {
                            showNav ?
                            <div style={{display:"flex",flexDirection:"column"}}>
                                
                                <span><Cancel onClick={showNavBar}/></span>

                                <nav>
                                    <a href="#">Personal</a>
                                    <a href="#">Business</a>
                                    <a href="#">Ways To Bank</a>
                                    <a href="#">Contact Us</a>
                                    <Button onClick={addUser}>Sign Up</Button>
                                    <Button onClick={existingUser}>Login</Button>
                                </nav>
                                </div>
                                :
                            <Menu onClick={showNavBar} />
                            }
                        </div>
                    </div>
        
            </Wrapper>
            <Interface />
            <Faq />
            <Footer />
        </>
  )
}

export default Login
const Wrapper = styled.div`
    width: 100%;
    background: white;
    display: flex;
    gap: 20px;
    position:relative;
    @media screen and (max-width: 400px){
           gap: 0px;
        }
     
    & > header{
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 945px){
           justify-content:space-between;
        }
        @media screen and (max-width: 765px){
           justify-content:space-between;
        }
        @media screen and (max-width: 500px){
           justify-content:space-between;
        }
        @media screen and (max-width: 400px){
           justify-content:space-around;
        }
            & > a > img{
            width:150px;
            height:120px;
            display: flex;
            margin: 0px;
            @media screen and (max-width:945px){
                width:120px;
                height:100px; 
            }
            @media screen and (max-width:765px){
                width:120px;
                height:100px; 
            }
            @media screen and (max-width: 500px){
                width:120px;
                height:100px; 
            }
            @media screen and (max-width: 400px){
                width:100px;
                height:80px; 
            }
        }
        & > nav{
            display: flex;
            align-items:center;
            gap:30px;
            font-size: 20px;
            flex: 1;
            transform:translateY(0);
            transition: all 0.3s;
                & > active-nav{
                transform:translateY(0vh);
                }
                 & > a{
                text-decoration: none;
                color:#3d3d3d;
                transition: all .2s;
                &:hover{
                    color: tomato;
                    border-bottom: 4px solid tomato;
                    transition: all .2s;
                }
            }
            & > span{
                    font-size: 40px;
                    color: white;
                    background: red;
                    border-radius: 50%;
                    display: none;
                    align-items: center;
                    @media screen and (max-width: 945px){
                        display: flex;
                        align-self: flex-end;
                    } 
                    @media screen and (max-width: 765px){
                        display: flex;
                        align-self: flex-end;
                    }
                    @media screen and (max-width: 500px){
                        display: flex;
                        align-self: flex-end;
                    }
                    @media screen and (max-width: 400px){
                        display: flex;
                        align-self: flex-end;
                    }
                }
            @media screen and (max-width: 945px){
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 0;
                right: 0;
                background-color: #f2f2f2;
                width: 250px;
                height: 100vh;
                justify-content: flex-start;
                padding: 30px 20px 0;
                transform: translateY(-100vh);
            }
            @media screen and (max-width: 765px){
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 0;
                right: 0;
                background-color: #f2f2f2;
                width: 250px;
                height: 100vh;
                justify-content: flex-start;
                padding: 30px 20px 0;
                transform: translateY(-100vh);
            }
            @media screen and (max-width: 500px){
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 0;
                right: 0;
                background-color: #f2f2f2;
                width: 250px;
                height: 100vh;
                justify-content: flex-start;
                padding: 30px 20px 0;
                transform: translateY(-100vh);
            }
            @media screen and (max-width: 400px){
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 0;
                right: 0;
                background-color: #f2f2f2;
                width: 250px;
                height: 100vh;
                justify-content: flex-start;
                padding: 30px 20px 0;
                transform: translateY(-100vh);
            }
            } 
        }

        & > div{
            display:flex;
            align-items: center;
            gap: 10px;
            & > div:nth-of-type(2){
                position:relative;
                & > a{
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    font-size: 30px;
                        @media screen and (max-width: 945px) {
                            font-size: 20px;
                        }
                        @media screen and (max-width: 765px) {
                            font-size: 20px;
                        }
                        @media screen and (max-width: 500px) {
                            font-size: 20px;
                        }
                        @media screen and (max-width: 400px) {
                            font-size: 15px;
                        }
                    & > img{
                        width:30px;
                        height:30px;
                        @media screen and (max-width: 945px){
                            width:20px;
                            height: 20px;
                        }
                        @media screen and (max-width: 765px){
                            width:20px;
                            height: 20px;
                        }
                        @media screen and (max-width: 500px){
                            width:20px;
                            height: 20px;
                        }
                        @media screen and (max-width: 400px){
                            width:20px;
                            height: 20px;
                        }
                    }
                }

                & > ul{
                    position: absolute;
                    display: none;
                    right:3px;
                    top:0;
                    & > li{
                        display:flex;
                        align-items: center;
                        background: #f2f2f2;
                        & > a{
                            text-decoration: none;
                            font-size: 20px;
                            margin-top: 30px;
                            &:hover{
                                border-bottom: 4px solid tomato;
                            }
                        }
                        & > img{
                            width:30px;
                            height:30px;
                            margin-top: 30px;
                        }
                    }
                }
                &:hover > a + ul{
                    display:block;
                    
                }

            }
            & > div:nth-of-type(3){
                    font-size: 30px;
                    color: skyblue;
                    display: none;
                    margin-top: 0px;
                    
                    & > div:first-of-type{
                        display: flex;
                        width: 100%;
                        gap: 10px;
                            & > span{
                                font-size: 40px;
                                color: red;
                                display: flex;
                                justify-content: flex-end;
                                display: none;

                                @media screen and (max-width: 945px){
                                display: flex;
                                position: absolute;
                                right: 0px;
                                top: 10px;
                                align-items: center;
                                justify-content: flex-end;
                                }
                                @media screen and (max-width: 765px){
                                display: flex;
                                position: absolute;
                                right: 0px;
                                top: 10px;
                                align-items: center;
                                justify-content: flex-end;
                                }
                                @media screen and (max-width: 500px){
                                display: flex;
                                position: absolute;
                                right: 0px;
                                top: 10px;
                                align-items: center;
                                justify-content: flex-end;
                                }
                                @media screen and (max-width: 400px){
                                display: flex;
                                position: absolute;
                                right: 0px;
                                top: 10px;
                                align-items: center;
                                justify-content: flex-end;
                                }
                            }
                        & > nav{
                            display: flex;
                            background-color: #f2f2f2;
                                width: 250px;
                                height: 100vh;
                                flex-direction: column;
                                gap:10px;
                                font-size: 25px;
                                
                                padding: 10px 20px;
           
                                    & > a{
                                    display: none;
                                    text-decoration: none;
                                    align-items: center;
                                    color: #070766;
                                        &:hover{
                                            border-bottom: 4px solid bisque;
                                            transition: all 0.3s;
                                        }
                                        @media screen and (max-width: 945px){
                                        display: flex;
                                        top: 0;
                                        right: 0px;
                                        background-color: #f2f2f2;
                                        width: 250px;
                                        height: 60px;
                                        padding: 20px 20px; 
                                         }
                                        @media screen and (max-width: 765px){
                                        display: flex;
                                        top: 0;
                                        right: 0px;
                                        background-color: #f2f2f2;
                                        width: 250px;
                                        height: 60px;
                                        padding: 20px 20px; 
                                        }
                                        @media screen and (max-width: 500px){
                                        display: flex;
                                        top: 0;
                                        right: 0px;
                                        background-color: #f2f2f2;
                                        width: 250px;
                                        height: 60px;
                                        padding: 20px 20px; 
                                        }
                                        @media screen and (max-width: 400px){
                                        display: flex;
                                        top: 0;
                                        right: 0px;
                                        background-color: #f2f2f2;
                                        width: 250px;
                                        height: 30px;
                                        padding: 20px 20px; 
                                        }
                                    }
                                    }
                                    }
                                    

                    @media screen and (max-width: 945px){
                        display: flex;
                        position: absolute;
                        right: 0px;
                        top: 10px;
                        align-items: center;
                        justify-content: flex-end;
                    }
                    @media screen and (max-width:765px){
                        display: flex;
                        justify-content: flex-end;
                        position: absolute;
                        right: 0px;
                        top: 10px;
                        align-items: center;
                    }
                    @media screen and (max-width: 500px){
                        display: flex;
                        justify-content: flex-end;
                        position: absolute;
                        right: 0px;
                        top: 10px;
                        align-items: center;
                    }
                    @media screen and (max-width: 400px){
                        display: flex;
                        justify-content: flex-end;
                        position: absolute;
                        right: 0px;
                        top: 10px;
                        
                    }
                    @media screen and (max-width: 380px){
                        display: flex;
                        justify-content: flex-end;
                        position: absolute;
                        right: 0px;
                        top: 10px;
                        
                    }
                }

        }
    
        
    
    
`