const pool = require('../utils/pool');
module.exports = class Employee {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.designation = row.designation;
    this.department = row.department;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from employee_data');
    return rows.map((employeeRow) => new Employee(employeeRow));
  }
  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * from employee_data WHERE id = $1',
      [id]
    );
    return new Employee(rows[0]);
  }
};
