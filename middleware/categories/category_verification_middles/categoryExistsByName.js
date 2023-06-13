import categoryServices from "../../../services/category.service.js"



const categoryExistsByName = async (req, res, next) => {
    try {
        let response = categoryServices.categoryExists({ name: req.body.name })

        if (response) {
            return res.status(400).json({
                success: false,
                message: [{
                    path: 'categoryExists',
                    message: 'The category alredy exists'
                }]
            })
        }
        next()
    } catch (error) {
        return res.status(500).json({
            path: 'Error',
            message: 'Error internal server'
        })
    }

}

export default categoryExistsByName