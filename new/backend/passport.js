const passport=require('passport');
const LocalStrategy=require('passport-local');

 passport.use(new LocalStrategy (
    function(email,password){
            return 1;
    }))

    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
       
      passport.deserializeUser(function(id, done) {
        User.findById(id, function (err, user) {
          done(err, user);
        });
      })