import Department from "../../models/Department.js";

let update = async (req, res, next) => {
    try {
        let department_update = await Department.findByIdAndUpdate(
            {_id: req.params.id}, 
            req.body, 
            { new: true })
        if (department_update) {
            return res.status(200).json({
                succes: true,
                department_update,
                message: "Department updated!!"
            })
        } else {
            return res.status(404).json({
                succes: false,
                message: [{
                    path: "exists",
                    message: "Department doesn't exists"
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