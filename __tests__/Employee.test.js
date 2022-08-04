const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Test", 2, "janedoe@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
  expect(employee.getId()).toEqual(expect.any(Number));
  expect(employee.getEmail()).toContainEqual(expect.stringContaining("@"));
  expect(employee.getEmail()).toContainEqual(expect.stringContaining("."));
});
