

exports.signup = (req,res)=>{
    console.log(req.body);
    const {username,email,password} = req.body();
   
}