import Department from "../../models/Department.js";

let create = async (req, res, next) => {
    try {
        let new_department = await Department(req.body)
        // console.log(new_department);
        await new_department.save()
        return res.status(201).json({
            succes: true,
            message: 'Deparment Created!'
        })
    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}
export default create