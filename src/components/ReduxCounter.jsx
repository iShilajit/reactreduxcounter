import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from '../Redux/action';

export const ReduxCounter = () => {
    const count=useSelector((state)=>state.cnt);
    const dispatch=useDispatch()

    const handleInc=()=>{
        dispatch(inc(1))
    }
    const handleDec=()=>{
      dispatch(dec(1))
    }
  return (
    <div>
        <div style={{display:"flex" ,justifyContent:"center",marginTop:"50px"}}>
        <button  style={{ boxShadow:" 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
         backgroundColor:"#f44336",border:"1px solid white",
         width:"120px",height:"30px", color:"white"}}
         onClick={handleDec}
         >
            REDUCER
        </button>
        
        <div style={{marginLeft:"5px",color:"#008CBA",marginTop:"2px"}}>
          
           Count: {count}
        </div>
        <button
         style={{ boxShadow:" 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
         backgroundColor:"#4CAF50",border:"1px solid white",
         width:"120px",height:"30px",marginLeft:"5px", color:"white"}}
         onClick={handleInc}
         >
            ADD
        </button>
       
        </div>
    </div>
  )
}
