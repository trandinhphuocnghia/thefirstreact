//import react and hooks : usestate, useeffect , useref.
import { useState,useEffect,useRef } from "react";
import React from "react";
import searchIcon from '../../images/search-icon.svg'
import { Wrapper,Content } from "../searchbar/searchbar.style";

//functional components
const SearchBar = ({setSearch}) => {
   const [state,setState] = useState('');
    const initial = useRef(true)

    
 
   //effect hooks 
   useEffect(() => {
    if(initial.current){
        initial.current = false;
        return; 
    }   
    /* sideeffect func to executes func after a specified number of milliseconds */
    const timer = setTimeout(() => {
        setSearch(state);
    },500)

    //clean up
    return () =>{
        clearTimeout(timer)
    }
   },[setSearch, state]) /**dependicies if this change the next mouting sideeffect change */


   return (
       <Wrapper>
           <Content>
               <img src={searchIcon} alt='search-icon'/>
               <input type='text' placeholder='Search Movie'
               /*inline function to target to text in searchbar */
                onChange={event => setState(event.currentTarget.value)}
                value={state}
               />
           </Content>
       </Wrapper>
   ) 
}

export default SearchBar;