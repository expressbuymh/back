import productServices from "../../services/product.service.js"
// import Product from "../../models/Product.js"

const  productsQuery = async(req, res) =>{
    try {
        let pagination = {
            limit: 10,
            page:1
        }
       
        if(req.query.page){
            pagination.page = req.query.page
        }

        let response = await productServices.pagination_products(pagination)
        
            return res.status(response.status_code).json({
                success: response.succes,
                message: response.message,
                productsPagination: response.productsPagination
            })
    } catch (error) {
        console.log(error);
    }
}

export default  productsQuery