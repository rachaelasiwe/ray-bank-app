import React, { useState } from 'react'
import { styled } from 'styled-components'
const faq_list = [
    {
        id: 1,
        question: "What is RayBank Mobile App?",
        answer: "The RayBank app is an innovative mobile payment application that offers a “more than banking experience”; built on cutting-edge technology, offering tailored and personalized services, ease of use and excellent customer experience,This new App is in line with our promise at integration to bring the best of the RayBank mobile apps,together to accommodate existing subscribers of these apps on a world class platform."
    },
    {
        id: 2,
        question: "Where can I download the RayBank app?",
        answer: "It is available for download on the app stores i.e. Android Playstore and IOS Store."
    },
    {
        id: 3,
        question: "What is the transaction limit on Raybank Mobile App?",
        answer: "Individual transaction limit is N5m per day (N1m per transaction)."
    },
    {
        id: 4,
        question: "How can I request for a token?",
        answer: "Call our Contact Center on 081-354-532-65 for soft token"
    },
    {
        id: 5,
        question: "What are some of the unique features of RayBank Mobile App?",
        answer:"Dubai Visa application,Flight booking,Target saving,Foreign currency transfers,Better customer experience"
    },
    {
        id: 6,
        question: "How do I activate my RayBank Mobile app (existing customers)?",
        answer:"Visit the Android PlayStore or iOS Store,Download “RayBank” app,After a successful download, login with your existing credentials of RayBank Mobile Apps"
    },
    {
        id: 7,
        question: "How do I activate my RayBank Mobile app (new customers)?",
        answer:"Visit the Android PlayStore or iOS Store,Download the RayBank app,Select 'Sign up' to register,Select Unique User ID and Password,Create PIN with card or OTP sent, to mobile number/ Call our Contact Center(01-2702005) to set up an E-PIN/token."
    },
    {
        id: 8,
        question: "How is RayBank app different from other existing apps?",
        answer:"It offers additional features and benefits to customers that helps create excellent customer experience."
    }
]

const Faq = () => {
    const [show_index, set_show_index] = useState(null);
    const handleClick = (id) => {
        if (show_index == id) {
            set_show_index(null)
            return;
        }
        set_show_index(id);
    }
  return (
      <Wrapper>
            <h1>More About RayBank</h1>
          {faq_list.map((each_Faq) =>
          <div key={each_Faq.id}>
                  <div onClick={()=>handleClick(each_Faq.id)}>{each_Faq.question}
                      <span> + </span>
                  </div>
                  {show_index == each_Faq.id ?
                      <div>
                      {each_Faq.answer}
                  </div>
                 : <></> }
              </div>
          )}
    </Wrapper>
  )
}

export default Faq
const Wrapper = styled.section`
width: 100%;
margin: 30px auto;
background: #3a3a;
/* border: 1px dotted orangered; */
padding: 20px;

& > h1{
    text-align: center;
    color: #f2f2f2;
    font-size: 40px;
}
& > div > div:first-child{
    background-color: rgb(13, 49, 14);
    display:flex;
    justify-content: space-between;
    padding: 8px;
    gap: 20px;
    align-items: center;
    color: white;
    font-size: 20px;
    & > span{
        cursor:pointer;
    }
}
& > div > div:nth-child(2){
    background-color: #f2f2f2;
    font-size: 18px;
    padding: 20px;
    line-height: 1.5;
}
& > div{
    margin-top: 5px;
}
`