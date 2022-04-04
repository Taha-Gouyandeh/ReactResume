export const Diraction=(state=true,action)=>{
    switch(action.type){
        case 'Direct':
            return action.payload;
        default:
            return state    
    }
}