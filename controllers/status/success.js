

let success = async (req, res, next) => {
    try {
        let succes = req.body
        console.log(succes)
        res.status(200).send('OK')
    } catch (error) {
        console.log(error)
    }
}
export default success