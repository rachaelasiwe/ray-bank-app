import React, { useState } from 'react'
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
import { SearchForm, MainCon } from '../components';


const Account = () => {
  const [search_name, set_search_name] = useState ("");
  const [country, set_country] = useState(Nigeria);
  return (
    <>
    <Wrapper>
         <header>
                    <a><img src={logo} /></a>
                    <nav>
                        <a href="#">Home</a>
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
                    </div>
      </Wrapper>
      <MainCon />
      </>
  )
}

export default Account
const Wrapper = styled.div`
    width: 100%;
    background: #11b3e9;
    display: flex;
    justify-content: start;
    gap: 20px;
    position: relative;
    & > header{
        display: flex;
        @media screen and (max-width: 500px){
           justify-content:space-between; 
        }
            & > a > img{
            width:140px;
            height:120px;
            
        }
        & > nav{
            display: flex;
            align-items:center;
            justify-content: flex-end;
                 & > a{
                text-decoration: none;
                color:#3d3d3d;
                transition: all .2s;
                font-size: 30px;
                align-items: center;
                right: 10px;
                position: absolute;
                &:hover{
                    color: tomato;
                    border-bottom: 4px solid tomato;
                    transition: all .2s;
                }
            }
          
            }
        }
        & > div{
            display:flex;
            align-items: center;
            gap: 20px;
            @media screen and (max-width: 945px){
                display: none;
            }
            @media screen and (max-width: 765px){
                display: none;
            }
            @media screen and (max-width: 500px){
                display: none;
            }
            & > div:nth-of-type(2){
                position:relative;
                
                & > a{
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    font-size: 30px;
                    
                    & > img{
                        width:30px;
                        height:30px;
                    }
                }

                & > ul{
                    position: absolute;
                    display: none;
                    right:3px;
                    top:0;
                    background: #f2f2f2;
                    border-radius: 15px;
                    & > li{
                        display:flex;
                        align-items: center;
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
          }
  `