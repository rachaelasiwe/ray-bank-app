import styled from 'styled-components'
import { BsSearch as SearchIcon } from 'react-icons/bs';
import React,{ useState } from 'react';

const SearchForm = ({onChange}) => {
    const [search, set_search] = useState("");



    const handleInput = (e) => {
        const { value } = e.target;
        set_search(value);
        onChange(value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
      }
  return (
    <Wrapper>
    <form onSubmit={handleSubmit}>
        <input tye="text" placeholder='Type To Search...' value={search} onChange={handleInput}/>
        <button>
        <SearchIcon  />
        </button>
    </form>
  </Wrapper>
  )
}

export default SearchForm;

const Wrapper = styled.div`
   width: 250px;
   display: flex;
   gap: 5px;
   align-items: center;
        @media screen and (max-width: 500px){
          width: 200px;  
        }
        @media screen and (max-width: 400px){
          width: 200px;  
        }
   & > span{
    flex-shrink: 0;
    width: 30px;
    font-size: 35px;
    color: rgb(6, 116, 28);
    display: flex;
    justify-content: center;
    align-items: center;
    
   }
   & > form{
    display: flex;
    flex:1;
    align-items: center;
    & > input{
        padding: 8px 5px;
        border-radius: 5px 0 0 5px;
        outline: none;
        border: 1px solid #aaa;
        flex: 1;
            @media screen and (width <= 500px){
                
            }
    } 
        & > button{
        color: white;
        outline: none;
        border:none;
        background-color: rgb(24, 6, 116);
        border-radius: 0 5px 5px 0px;
        padding: 8px 5px; 
    }
    }
   
    
`