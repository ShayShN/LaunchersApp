export function typeVerify(user_type) {
    return (req, res, next) => {
        if (req.user.user_type !== user_type) {
            return res.status(401).json({message: "not verify type!"})
        }
        next()
    }
}