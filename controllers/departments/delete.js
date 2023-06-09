import Department from "../../models/Department.js";

let destroy = async (req, res, next) => {
    try {
        
        let destroy_department = await Department.findByIdAndDelete({_id: req.params.id})
        return res.status(200).json({
            succes: true,
            destroy_department,
            message: "Department delete"
        })
    } catch (error) {
        next(error)
    }
}
export default destroy