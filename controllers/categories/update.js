import Categories from '../../models/Categories.js';

let update = async (req, res, next) => {
    try {
        let categoryUpdate = await Categories.findByIdAndUpdate(
            req.params.id, req.body, { new: true })
        if (categoryUpdate) {
            return res.status(200).json({
                succes: true,
                categoryUpdate
            })
        } else {
            return res.status(404).json({
                succes: false,
                message: [{
                    path: "exists",
                    message: "The Category doesn't exists"
                }]
            })
        }
    } catch (error) {
        return res.status(500).json({
            succes: false,
            message: [{
                path: "internal",
                message: "Internal server error"
            }]
        })
    }
}
export default update