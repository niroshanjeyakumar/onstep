const user=(state={},action)=>{
    switch(action.type){
        case 'LOGGED_IN':
            state={
                isloggedin:true,
                details:action.payload
            }
            return state;
            break;
        case 'LOGGED_OUT':
            state={
                isloggedin:false,
                details:null
            }
            return state;
            break;
        default:
            return state;
    }
}