const express = require('express');
const { getEmployeeDetails, getEmployeeDetail, insertEmployeeDetails, updateEmployeeDetail, deleteEmployeeDetail } = require('../controllers/employee.controllers');
const router = express.Router();

router.get('/',getEmployeeDetails);
router.get('/emp_id/:emp_id',getEmployeeDetail);
router.post('/',insertEmployeeDetails);
router.put('/emp_id/:emp_id',updateEmployeeDetail);
router.delete('/emp_id/:emp_id',deleteEmployeeDetail);

module.exports = router;