import departmentService from "../../services/department.service.js";
import categoryServices from "../../services/category.service.js";
import subcategoryServices from "../../services/subcategory.service.js";

let getAll = async (req, res, next) => {
    try {
        let department = await departmentService.departments_all()
        let category = await categoryServices.get_all_categoryes()
        let subcategory = await subcategoryServices.get_all_subcategoryes()
        return res.status(200).json({
            success: true,
            departments: department.departments,
            categories: category.categoryes,
            subcategories: subcategory.subcategoryes
        })
    } catch (error) {
        console.log(error)
    }
}
export default getAll