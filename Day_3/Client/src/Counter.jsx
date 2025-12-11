import React from 'react';
import { useState } from 'react';
  import Checkbox from '@mui/material/Checkbox';


const Counter =()=>{
  const [Counter,setCounter]=useState(0);


const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };
  return(
    <>
    <h2>
      Counter:{Counter}
    </h2>
    <button onClick={()=>setCounter(Counter+1)}>Increment</button>
    <button onClick={()=>setCounter(Counter-1)}>Decrement</button>
    <button onClick={()=>setCounter(0)}>Reset</button>    
    <button onClick={()=>setCounter(Math.random()*10)} >Random</button>
    <button onClick={()=>setCounter(Counter*5)}>Multiply by 5</button>
       <div>
          <Checkbox {...label} defaultChecked />
          <Checkbox {...label} />
          <Checkbox {...label} disabled />
          <Checkbox {...label} disabled checked />
        </div>

    </>
  );
};
export default Counter;