const jwt = require('jsonwebtoken')


module.exports =  async function(req, res, next){
    const token= req.header('Authorization');

    if(!token){
        return res.status(401).json({
            msg: 'No token, authorization denied'
        });
    }

    try{
        await jwt.verify(token, process.env.jwtUserToken,(err, decoded)=>{
            if(err){
                res.status(401).json({
                    msg: 'Token not valid'
                })
            }
            else{
                req.user = decoded.user;
                next();
            }
        } )
    }catch(err){
        console.log('something went wrong with middleware', err);
        res.status(500).json({
            msg: 'server error'
        })
    }
}