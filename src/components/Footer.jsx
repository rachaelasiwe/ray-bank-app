import React from 'react'
import {styled} from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
        <div>
              <div>
                    <h1>ABOUT US</h1>
                    <a href="">Our History</a>
                    <a href="">Corporate Profile</a>
                    <a href="">Corporate Governance</a> 
                    <a href="">Board and Management Team</a>
                    <a href="">Our Awards</a>   
            </div>
              <div>
                    <h1>CAREERS</h1>
                    <a href="">Working At RayBank</a>
                    <a href="">Your Career</a>
                    <a href="">Recruitment Process</a> 
                </div>
              <div>
                    <h1>CONTACT US</h1>
                    <a href="">We Care</a>
                    <a href="">Branches With Wi-Fi</a>
                    <a href="">Branch & ATM Locator</a> 
                    <a href="">Biometrics Enrollment</a>
                    <a href="">Agent Banking Details</a>    
            </div>
              <div>
                    <h1>QUICK LINKS</h1>
                    <a href="">Scam Alert</a>
                    <a href="">Online Security Tips</a>
                    <a href="">Anti-Money Laundering</a> 
                    <a href="">Support Center</a>
                    <a href="">Download Center</a>
            </div>
              <div>
                    <h1>YOU ARE</h1>
                    <a href="">An Individual</a>
                    <a href="">A Job Applicant</a>
                    <a href="">A Company</a> 
                    <a href="">A Journalist</a>
                    <a href="">An Entrepreneur</a>
            </div>  
        </div>  
    </Wrapper>
  )
}

export default Footer;
const Wrapper = styled.div`
color: #777;
display: flex;
padding: 15px 10px;
background: #0586bd;
& > div{
        align-items: flex-start;
        padding: 10px 0;
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        & > div{
            flex-basis:25%;
            flex-grow: 1;
            margin-bottom: 20px;
            & > h1{
                font-size: 20px;
                color:#760838;
                @media screen  and (max-width: 945px){
                  font-size: 18px;
            }
                @media screen  and (max-width: 765px){
                  font-size: 22px;
            }
                @media screen  and (max-width: 500px){
                  font-size: 22px;
            }
            }
            & > a{
                display:block;
                text-decoration: none;
                color: white;
                font-size: 17px;
                margin-bottom: 10px;
                cursor: pointer;
                &:hover{
                    color: #f80d77;
                }
                @media screen  and (max-width: 945px){
                  font-size: 12px;
            }
                @media screen  and (max-width: 765px){
                  font-size: 18px;
            }
                @media screen  and (max-width: 500px){
                  font-size: 18px;
            }
            }
        }
    }
    @media screen and (max-width: 945px){
      & > div{
        display: flex;
        padding: 2px 10px;
      }
    }
    @media screen and (max-width: 765px){
      & > div{
        display: block;
        padding: 2px 10px;
      }
    }
    @media screen and (max-width: 500px){
      & > div{
        display: block;
        padding: 2px 10px;
      }
    }

`