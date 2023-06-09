
import SubCategory from "../../models/SubCategory.js"




const destroy = async (req, res, next) => {
  try {

    const destroySubCategories = await SubCategory.findByIdAndDelete(req.params.id)

    if(destroySubCategories){
      return res.status(200).json({
        success: true,
        message: 'SubCategory Destroyed!',
        destroySubCategories
      })
    }else{
      return res.status(400).json({
        success:false,
        message:[{
          path:'subcategories',
          message:'The subcategories was not found with the provider data'
        }]
      })
    }
    
  } catch (error) {
    return res.status(500).json({
      message:[{
        paht:'server',
        message:'Error internal the server'
      }]
    })
  }
}
export default destroy
