import { INCREASE_COUNTER,DECREASE_COUNTER } from "./actionType";
const i={
    cnt:0
}
export const reducer=(state=i,{type,payload})=>{
    switch(type){
        case INCREASE_COUNTER:
            return{
                ...state,cnt:state.cnt+payload
            }
            case DECREASE_COUNTER:
                return{
                    ...state,cnt:state.cnt-payload
                }  
                
            default:
                return state    
    }
}