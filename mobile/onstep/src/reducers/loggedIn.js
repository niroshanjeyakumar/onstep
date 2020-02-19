const LoggedIn =(state=false,{type,payload})=>{
    switch(type){
        case 'LOGIN':
            return !state

        default :  
            return state
    }

}

export default LoggedIn;