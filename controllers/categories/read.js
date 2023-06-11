import categoryServices from "../../services/category.service.js";

const read = async(req,res,next) => {
  try {
    let queries = {}
    let pagination = {
        limit: 5,
        page: 1
    }
    pagination.page = req.query.page ?? 1
    pagination.limit = req.query.limit ?? 5
    let response = await categoryServices.read(queries, pagination)
    return res.status(response.status_code).json({
      success: response.success,
      message: response.message,
      categories: response.all_categories
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: [{
        path: 'Internal',
        message: 'Internal Server error'
      }]
    })
  }
}

export default read