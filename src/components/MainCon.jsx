import React from 'react'
import { styled } from 'styled-components';
import Tools from '../assets/ray1.jpg';
import Tools2 from '../assets/ray2.jpg';
import Tools3 from '../assets/arm2.jpg';
import { FiPhoneCall as Call } from 'react-icons/fi';
import { GrUserSettings as Setting } from 'react-icons/gr';
import { FcMoneyTransfer as Transfer } from 'react-icons/fc';
import { FaUserPlus as AddAcc } from 'react-icons/fa';
import { FaUser as Officer } from 'react-icons/fa';
import { GrSettingsOption as Set } from 'react-icons/gr';
import { MdOutlinePersonAddDisabled as Disable } from 'react-icons/md';
import { GiBuyCard as Card } from 'react-icons/gi';
import { MdBalance as Balance } from 'react-icons/md';




const MainCon = () => {
    return (
        <>
            <Wrapper>
                <div>
                    <ul>
                        <li><p><Setting /></p><a>Manage Account</a></li>
                        <li><p><Balance /></p><a>Account Balance</a></li>
                        <li><p><Transfer /></p><a>Transfer</a></li>
                        <li><p><Card /></p><a>Buy Airtime</a></li>
                        <li><p><Call /></p><a>Customer Care</a></li>
                        <li><p><Officer /></p><a>Account Officer</a></li>
                        <li><p><AddAcc /></p><a>Add Account</a></li>
                        <li><p><Disable /></p><a>Disable Account</a></li>
                        <li><p><Set /></p><a>Settings</a></li>
                    </ul>
                </div>
                <div>
                    <div>
                        <img src={Tools} />
                        <img src={Tools2} />
                        <img src={Tools3} />
                        {/* <img src={Tools4} /> */}
                        {/* <img src={Tools5} /> */}
                    </div>
                    <div>
                        <p>
                            Managing the setting of a bank involves a complex interplay of strategic decision-making, regulatory compliance, customer service, and security considerations. Banks are critical institutions in any economy, as they provide financial services and play a pivotal role in facilitating economic growth. Here's an overview of key aspects involved in managing the setting of a bank:
                        </p>
                        <p>
                            
                            Managing the setting of a bank involves a complex interplay of strategic decision-making, regulatory compliance, customer service, and security considerations. Banks are critical institutions in any economy, as they provide financial services and play a pivotal role in facilitating economic growth. Here's an overview of key aspects involved in managing the setting of a bank:

                            Location Selection: The choice of location is fundamental to the success of a bank. Factors to consider include accessibility, proximity to potential customers, competition, and regulatory requirements. Urban areas with a high population density often attract more customers, but they may also come with higher operating costs.

                            Regulatory Compliance: Setting up a bank requires strict adherence to regulatory guidelines and compliance with local, national, and international banking laws. These regulations cover aspects such as capital adequacy, liquidity, reporting, and anti-money laundering measures. A team of legal and compliance experts is essential to navigate this complex landscape.

                            Capitalization: Adequate capital is crucial for a bank's stability and growth. Managing capital involves determining the initial capital injection, maintaining a sufficient capital buffer, and raising additional capital as needed to meet regulatory requirements and business expansion.

                            Technology Infrastructure: In the digital age, a robust technology infrastructure is vital. Banks need secure and efficient systems for online banking, transaction processing, data storage, and cybersecurity. Staying current with technology trends is essential to meet customer expectations and safeguard sensitive financial information.
                        </p>
                        <p>
                            Risk Management: Banks are exposed to various risks, including credit risk, market risk, operational risk, and regulatory risk. Establishing a comprehensive risk management framework is essential for identifying, assessing, and mitigating these risks. This framework should include risk assessment tools, stress testing, and contingency planning.

                            Customer Service: Building a strong customer base is key to a bank's success. Excellent customer service, personalized financial advice, and competitive product offerings can help attract and retain customers. Banks should invest in training staff to provide quality service and create positive customer experiences.

                            Security: Banks hold sensitive financial data, making them attractive targets for cyberattacks and physical theft. Implementing robust security measures, including encryption, firewalls, surveillance systems, and employee training, is vital to protect both the bank and its customers.

                            Marketing and Branding: Effective marketing strategies can help raise awareness of the bank's services and build a strong brand presence. Developing a clear brand identity and marketing campaigns that resonate with the target audience can drive customer acquisition.
                        </p>
                        <p>

                        </p>
                    </div>    
                </div>    
            </Wrapper>
            <Table>
                <div>&copy; RayBank.com | Designed by Asiwe Rachael</div>
            </Table> 
            
        </>
  )
}

export default MainCon
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    & > div:first-of-type{
        flex: 3;
        height: 100vh;
        background: #11b3e9;
        position: relative;
       
        & > ul{
            list-style: none;
            color:aliceblue;
            height: 100vh;
            & > li{
                
                &:hover{
                    background: #076d8f;
                    border-bottom: 4px solid green;
                    transition: all .2s;
                }
            }
           
            & > li > p{
                font-size: 25px;
                color: #3a3a3a;
                position: absolute;
                
            }
            & > li > a{
                padding-left: 30px;
                display: block;
                margin: 10px 10px;
                padding-top: 20px;
                font-size: 22px;
                text-align: bottom;
                @media screen and (max-width: 945px){
                    /* margin: 2px 5px; */
                    font-size: 20px;
                    /* padding-left */
                }
                @media screen and (max-width: 765px){
                    /* margin: 8px 5px; */
                    font-size: 20px;
                }
                @media screen and (max-width: 500px){
                    /* margin: 2px 5px; */
                    font-size: 20px;
                }
            }
        }
    }
    & > div:nth-of-type(2){
        flex:7;
        height: 100vh;
        padding: 80px 100px;
        overflow-y: scroll;
        /* background: #dd4f05; */
        background: #f2f2f2;
        display: flex;
        gap: 20px;
        @media screen and (max-width: 945px){
            display: block;
            padding: 20px;
            }
            & > div:first-of-type{
                display: flex;
                flex-direction: column;
                gap: 10px; 
                & > img{
                    width: 350px;
                    height: 300px;
                }
                @media screen and (max-width: 945px){
                  align-items: center;
                  padding: 5px 20px;
                }
                @media screen and (max-width: 765px){
                  align-items: center;
                  padding: 5px 20px;
                }
                @media screen and (max-width: 500px){
                  align-items: center;
                  padding: 5px 20px;
                }     
            }
            & > div:nth-of-type(2){
                display: flex;
                flex-direction: column;
                & > p{
                    color: #3a3a3a;
                    font-size: 18px;
                    flex-wrap: wrap;
                    @media screen and (max-width: 945px){
                        font-size: 15px;
                        text-align: center;
                        padding: 20px;
                    }
                    @media screen and (max-width: 765px){
                        font-size: 15px;
                        text-align: center;
                        padding: 20px;
                    }
                    @media screen and (max-width: 500px){
                        font-size: 15px;
                        text-align: center;
                        padding: 20px;
                    }
                }
            }
    }
`
const Table = styled.div`
    width: 100%;
    display: inline-block;

    & > div{
        background: #3a3a40;
        /* color:#686868; */
        color:  #008489;
        text-align: center;
        height: 80px;
        padding-top: 20px;
        width: 100%;
        font-size: 22px;
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
    `