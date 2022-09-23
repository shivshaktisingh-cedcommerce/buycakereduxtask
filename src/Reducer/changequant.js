const initialstate = 10;
 
const change = ( state = initialstate  , action )=>{
    switch(action.type){
        case  "BUY_CAKE":
            return state - 1;
        case "reset":
            return initialstate;
        default :
        return state
    }
 

}

export default change;