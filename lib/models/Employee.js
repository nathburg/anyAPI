const pool = require('../utils/pool');
module.exports = class Employee {
  constructor(row) {
    this.id = row.id;
    this.empName = row.empName;
    this.designation = row.designation;
    this.department = row.department;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from employee_data');
    return rows.map((employeeRow) => new Employee(employeeRow));
  }};
