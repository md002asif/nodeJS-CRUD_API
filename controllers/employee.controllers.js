const employee = require('../modules/employeeDetails');

//Getting employee Details:
const getEmployeeDetails = async (req,res)=>
{
    try {
        const emp = await employee.find();
        res.status(200).json(emp);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Getting employee Details using emp_id
const getEmployeeDetail = async(req,res) =>
{
    try {
        const {emp_id} = req.params;
        const emp = await employee.findOne({emp_id});
        const emp_det = {
            emp_id : emp.emp_id,
            name: emp.name,
            department: emp.department,
            role: emp.role
        };
        res.status(200).json(emp_det);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Inserting employee details:
const insertEmployeeDetails = async (req,res) =>
{
    try {
        const emp = await employee.create(req.body);
        res.status(200).json(emp);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Updating employee details:
const updateEmployeeDetail = async(req,res) =>
{
    try {
        const {emp_id} = req.params;
        const emp = await employee.findOneAndUpdate({emp_id: emp_id},
            req.body,
        {new: true}
    );
        if(!emp)
        {
          return  res.status(404).json({
                message: 'employee ID does not exist'
            });
        }
        const updated_emp = await employee.findOne({emp_id : emp_id});
        res.status(200).json(updated_emp);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Deleting employee details

const deleteEmployeeDetail  = async (req,res) =>
{
    try {
        const {emp_id} = req.params;
        const emp = await employee.findOneAndDelete({emp_id : emp_id});
        if(!emp)
        {
          return res.status(404).json({
                 message:"employee ID does not exist"
            });
        }
        // else{
            res.status(200).json(
                {
                    message:"employee details deleted"
                }
            );
        // }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = 
{
    getEmployeeDetail,
    getEmployeeDetails,
    insertEmployeeDetails,
    updateEmployeeDetail,
    deleteEmployeeDetail
};