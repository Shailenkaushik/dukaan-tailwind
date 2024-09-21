
import RevenueCard from './components/RevenueCard'
import './App.css'
import { useEffect, useState } from 'react';

function useDebounced(value,timeout){
  
     const [debouncevalue,setDebouncevalue]=useState("");
     useEffect(()=>{
     let timeoutclock= setTimeout(()=>{
        setDebouncevalue(value);
        
      },timeout)
      
      return ()=>{
        clearTimeout(timeoutclock);
      }

     },[value])

     return debouncevalue;

}

export default  function App() {
 
  const [str,setStr]=useState("");
  const debouncevalue=useDebounced(str,500);
  
  return (
    <>
     The input value is {debouncevalue}
     <input onChange={(e)=>{
      setStr(e.target.value)
     }} ></input>
    </> 
  )
}

