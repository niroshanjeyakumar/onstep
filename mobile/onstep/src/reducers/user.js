const user=(state={},{type,payload})=>{
    switch(type){
        case 'LOGGED_IN':
            state={
                isloggedin:true,
                details:payload
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