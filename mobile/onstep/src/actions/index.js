export const loggedIn = (details) =>{
    return{
        type:'LOGGED_IN',
        payload:details
    } ;
};

export const loggedOut = () =>{
    return{
        type:'LOGGED_OUT'
    };
};
