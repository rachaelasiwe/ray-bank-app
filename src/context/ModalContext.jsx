import React from 'react'
import { createContext } from "react";
import { useState, useEffect, useRef } from 'react';
import { styled } from 'styled-components'
import {FaTimes as CancelIcon} from 'react-icons/fa'


export const ModalContext = createContext({});



const ModalContextProvider = (props) => {
    // const [show_modal, set_show_modal] = useState(false);
    const [modal_content, set_modal_content] = useState("");
    const modalRef = useRef();
    const children = props.children;

    const handleShowModal = (show) => {
        if (show) modalRef.current.showModal();
        else modalRef.current.close();
    }
    const value = {
        set_modal_content,
        handleShowModal,
    }
    return (
        <ModalContext.Provider value={value}>
            <dialog ref={modalRef} style={{backgroundColor:"transparent",       border:'none'}}>
                <Wrapper>
                    <div>
                        <span onClick={()=>handleShowModal(false)}>
                            <CancelIcon />
                        </span>
                        <div>
                            {modal_content}
                        </div>
                    </div>
                    
                </Wrapper>
            </dialog>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    & > div{
        position: relative;
        padding: 20px;
        width: fit-content;
        background-color: #f2f2f2;
        top: 60px;
        border-radius: 10px;
        box-shadow: 0 0 10px 2px rgba(0,0,0,0.1);
        height: fit-content;
        & > span{
            position: absolute;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 25px;
            background-color:red;
            border-radius: 50%;
            top: -50px;
            right: 0;
            color: white;
        
        }
    }
`