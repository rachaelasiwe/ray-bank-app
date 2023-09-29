import React from 'react'
import { styled } from 'styled-components'
// import backgroundimg from '../assets/background.jpg'
import logo from '../assets/option2.avif'
import { GiDialPadlock as Security } from 'react-icons/gi'
import { FcAlarmClock as Clock } from 'react-icons/fc'
import {PiHandSwipeRight as Hand} from 'react-icons/pi'
import { ImLocation2 as Locator } from 'react-icons/im';
import { TbDialpad as Dial } from 'react-icons/tb';
import { BsGift as Gift } from 'react-icons/bs';
import { GiWhistle as Whistle } from 'react-icons/gi';
import { SiWhatsapp as Whatsapp } from 'react-icons/si';
import { FaHandsHelping as Help } from 'react-icons/fa';


const Interface = () => {
    return (
        <>
      <Wrapper>
        <div>
            <div>
                <h1>RayBank</h1>
                <h2>Mobile Banking</h2>
                <p>Introducing you to the mobile banking that makes<br />
                everyday banking a lot easier. The convenient, secure<br />
                way to carry out your banking operations anytime.<br />
                and services tailored to your needs.
                </p>
            </div>
            <div>
                <img src={logo} />
            </div>
        </div>
      </Wrapper>
      <Table>
                <div>
                    <h1>RayBank</h1>
                    <h2>mobile services</h2>
                    <p>Perform simple, secure and instant financial <br />transactions using your mobile <br />phone on any mobile network.</p>
            </div>
                <div>
                    <div>
                        <p><Hand /></p>
                        <h1>EASY ACCESS</h1>
                        <h2>EVERYTHING AT YOUR FINGERTIPS</h2>
                        <p>With our Mobile Banking services you<br /> can do basic banking transactions <br />from the convenience of your mobile <br />phone anyday, anytime, anywhere anytime.<br /> It is convenient, fast and secure.</p>
                    </div>
                    <div>
                        <p><Security /></p>
                        <h1>SECURITY</h1>
                        <h2>MAKE TRANSACTIONS WITH PEACE OF MIND</h2>
                        <p>Our platform provides a highly secure<br /> environment for you to perform your<br /> transactions without the threat of compromise</p>
                    </div>
                    <div>
                        <p><Clock /></p>
                        <h1>SPEED & EFFICIENCY</h1>
                        <h2>IT "JUST WORKS"</h2>
                        <p>Carry out secure transactions faster<br /> and more efficiently with straight-<br />through processing and simplified transaction functions</p>
                    </div>
                </div>     
        </Table>
        <Container>
          <div>
            <h1>RayBank Helpful Tools</h1>
          </div>
          <div>
            <div>
              <p><Dial /></p>
              <p>*923# Banking</p>
            </div>
            <div>
              <p><Locator /></p>
              <p>ATM & Branch<br />Locator</p>
            </div>
            <div>
              <p><Help /></p>
              <p>HELP</p>
            </div>
            <div>
              <p><Gift /></p>
              <p>More Xtravanganza</p>
            </div>
            <div>
              <p><Whatsapp /></p>
              <p>WhatsApp Banking</p>
            </div>
            <div>
              <p><Whistle /></p>
              <p>Whistle Blower</p>
            </div>
          </div>
        </Container>
      </>
  )
}

export default Interface;
const Wrapper = styled.div`
width: 100%;
display: flex;
background:skyblue;
    

      justify-content: space-around;
      & > div{
          display: flex;
          align-items:center;
          gap: 40px;
          @media screen and (max-width: 945px){
                display: block !important;
                
          }
          @media screen and (max-width: 765px){
                display: block !important;
                
          }
          @media screen and (max-width: 500px){
                display: block !important;
                
          }
      & > div:first-of-type{
        display: block;
        @media screen and (max-width: 945px){
              text-align: center;
          }
        @media screen and (max-width: 765px){
              text-align: center;
          }
          @media screen and (max-width: 500px){
              text-align: center;
          }

        & > h1{
          color:#76083f;
          font-weight: bold;
          font-size: 60px;
          margin-bottom: 0px;

        }
        & > h2{
          color: Tomato;
          font-size: 30px;
          padding-top: 0;
        }
        & > p{
          color: #3d3d3d;
          font-size: 20px;
          @media screen and (max-width: 945px){
            font-size: 18px;
          }
          @media screen and (max-width: 765px){
            font-size: 18px;
          }
          @media screen and (max-width: 500px){
            font-size: 18px;
          }

        }
      }
        & > div:nth-of-type(2){
          display: flex;
          & > img{
              width: 100%;
              height: 100%;;
              object-fit: contain;
              align-self:flex-end;
              
          }
      }
      }
`
const Table = styled.div`
   display: block;
  background-color: #f2f2f2;
  
  padding: 15px;
  & > div:first-of-type{
    width: 100%;
    text-align: center;
    display: block;
    justify-content:center;
    & >h1{
        color: #76083f;
        @media screen and (max-width: 945px){
          font-size: 30px;
    }
        @media screen and (max-width: 765px){
          font-size: 30px;
    }
        @media screen and (max-width: 500px){
          font-size: 30px;
    }
    
    }
    & > h2{
        color: #3a3a3a;
        font-size: 30px;
        @media screen and (max-width: 945px){
          font-size: 28px;
    }
        @media screen and (max-width: 765px){
          font-size: 28px;
    }
        @media screen and (max-width: 500px){
          font-size: 28px;
    }
    }
    p{
        font-size: 22px;
        word-spacing: .1em;
        @media screen and (max-width: 945px){
          font-size: 20px;
          word-spacing: 0;
    }
        @media screen and (max-width: 765px){
          font-size: 20px;
          word-spacing: 0;
    }
        @media screen and (max-width: 500px){
          font-size: 20px;
          word-spacing: 0;
    }
    }
    
  } 
  & >div:nth-of-type(2){
    width: 100%;
    display: flex;
    text-align: center;
    gap: 10px;
    justify-content: center;
        @media screen and (max-width: 945px){
              display: block !important;
        }
        @media screen and (max-width: 765px){
              display: block !important; 
        }
        @media screen and (max-width: 500px){
              display: block !important;
        }
    
      & > div{
        margin: 10px 20px;
        grid-template-columns: 2fr 2fr 2fr;
        padding: 10px 20px;
        gap: 10px;
        justify-content: center;
        align-items: center;
        background: white;
        box-shadow: 0 0 3px 1px rgba(0,0,0,0.05);
        border-radius: 10px; 
      

        & > h1{
            color:#3a3a;
            font-size: 30px;
        }
        & > h2{
            font-size: 18px;
        }
        & > p:first-of-type{
            color: #3d3d3d;
            font-size: 40px;
            margin-bottom: 0;
        }
        & > p:nth-of-type(2){
            font-size: 20px;
        }
  }
}
`
const Container = styled.div`
   display: grid;
  background-color: #b8c1c4;
  grid-template-columns: 1fr;
  
  padding: 15px;
  & > div:first-of-type{
    width: 100%;
    text-align: center;
    display: block;
    justify-content:center;
    & > h1{
        color: #76083f !important;
        font-size: 25px;
        @media screen and(max-width: 945px){
              text-align: center;
        }
        @media screen and(max-width: 765px){
              text-align: center;
        }
        @media screen and(max-width: 500px){
              text-align: center;
        }
    }
  } 
  & >div:nth-of-type(2){
    width: 100%;
    display: grid;
    text-align: center;
    gap: 10px;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
    overflow-x:auto;
    /* scrollbar-width: thin; */
    @media screen and(width <= 765px){
        /* gap: -10px; */
        }
      & > div{
        margin: 10px 20px;
        min-width:200px;
        gap: 10px;
        justify-content: center;
        align-items: center;
        background: #fff;
        box-shadow: 2px 4px 4px 2px rgba(240, 129, 86, 0.939);
        border-radius: 10px; 
        border: 1px solid blue;
        @media screen and(width <= 500px){
          
        }
        &:hover{
          background: #f86631;
        }
        & > p:first-of-type{
            color: #3d3d3d;
            font-size: 40px;
           
        }
        & > p:nth-of-type(2){
            font-size: 20px;
         
        }
  }

}
`