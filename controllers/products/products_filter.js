import Product from "../../models/Products.js";

let filtered = async(req,res,next) => {
    try {
        let queries = {}
        req.query.title ? queries.title = new RegExp(req.query.title.trim(), 'i') : ''
        req.query.category_id ? queries.category_id = req.query.category_id : ''
        console.log(queries)
        let all = await Product.find(queries)
        return res.status(200).json({
            success: true,
            response: all
        })
    } catch (error) {
        console.log(error)
        return req.status(500).json({
            error: 'Ha ocurrido un error'
        })
    }
}

export default filtered
