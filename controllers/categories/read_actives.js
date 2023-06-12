import categoryServices from "../../services/category.service.js";

const read_actives = async(req,res,next) => {
    try {
        let queries = {
            active: true
        }
        let pagination = {
            limit: 5,
            page: 1
        }

        queries.name = new RegExp(req.query.name.trim(), 'i') ?? ''
        if(req.query.department_id){
            queries.department_id = req.query.department_id.split(',')
        }

        pagination.page = req.query.page ?? 1
        pagination.limit = req.query.limit ?? 5
        
        let response = await categoryServices.read_actives(queries)
        return res.status(response.status_code).json({
            success: response.success,
            message: response.message,
            totalPages: Math.ceil(response.totalCount/pagination.limit),
            categories: response.all_actives
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: [{
                path: 'Internal',
                maessage: 'Internal Server error'
            }]
        })
    }
}

export default read_actives