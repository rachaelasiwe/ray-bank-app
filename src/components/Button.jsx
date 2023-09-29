import React from 'react'
import {styled} from 'styled-components'

const Btn = (props) => {
    const label = props.children || props.label || "Button"
    return (
            <button {...props}>
                {label}
            </button>
  )
}

const Button = styled(Btn)`
  padding: 10px 25px;
  border-radius: 6px;
  background-color: ${props => props.bg || "#390456"};
  color: ${props => props.color || "#e7e7e7"};
  outline: none;
  border: none; 
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  font-size:25px;
  cursor: pointer; 
  &:hover{
    background: blue;
    color: #fff;
  }
`

export default Button;