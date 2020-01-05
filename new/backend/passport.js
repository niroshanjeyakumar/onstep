const passport=require('passport');
const LocalStrategy=require('passport-local');

 passport.use(new LocalStrategy (
    function(email,password){
            return 1;
    }))

