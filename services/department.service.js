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

    },
    update: async function (department_id, body) {
        try {
            let departmentUpdate = await Department.findByIdAndUpdate(department_id, body, { new: true })
            return {
                succes: true,
                status_code: 200,
                departmentUpdate
            }
        } catch (error) {
            return {
                success: false,
                status_code: 500,
                message: [{
                    path: 'update',
                    message: 'There was an error while update the departments'
                }]
            }
        }
    },
    departments_all: async function () {
        try {
            let departments = await Department.find()
            if (departments) {
                return {
                    success: true,
                    status_code: 200,
                    departments
                }
            } else {
                return {
                    success: false,
                    status_code: 404,
                    message: [{
                        path: 'departmentsall',
                        message: 'No department has been created yet'
                    }]
                }
            }
        } catch (error) {
            return {
                success: false,
                status_code: 500,
                message: [{
                    path: 'departmentsall',
                    message: 'There was an error while read-all the departments'
                }]
            }
        }


    }
}
export default departmentService