const verify_role_admin = async(req,res,next) => {
    if(req.user.role === 2) {
        return next()
    }
    return res.status(400).json({
        success: false,
        message: [{
            path: 'verify role admin',
            message: "You're not Authorized"
        }]
    })
}

export default verify_role_admin