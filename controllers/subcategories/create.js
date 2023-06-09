import SubCategory from "../../models/SubCategory.js"



const create = async (req, res, next) => {
  try {
    const newSubcategory = await SubCategory(req.body)
    await newSubcategory.save()
    return res.status(201).json({
      success: true,
      message: 'SubCategory Created!'
    })
  } catch (error) {
    return res.status(500).json({
      message:[{
        paht:'server',
        message:'Error internal the server'
      }]
    })
  }
}
export default create
