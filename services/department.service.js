import Department from '../models/Department.js'

const departmentService = {
    create: async function (body) {
        try {
            let department = await Department.create(body)
            return {
                success: true,
                status_code: 201,
                department
            }
        } catch (error) {
            return {
                success: false,
                status_code: 500,
                message: [{
                    path: 'create',
                    message: 'There was an error while creating the department'
                }]
            }
        }

    }
}
export default departmentService