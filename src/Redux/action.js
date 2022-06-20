import { INCREASE_COUNTER,DECREASE_COUNTER } from "./actionType";
export const inc=(payload)=>{
    return{
        type:INCREASE_COUNTER,
        payload:payload
    }
}
export const dec=(payload)=>{
    return{
        type:DECREASE_COUNTER,
        payload:payload
    }
}