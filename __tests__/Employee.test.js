const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Jane Doe", 1, "janedoe@gmail.com");

  expect(employee.getName()).toBe("Jane Doe");
  expect(employee.getId()).toBe(1);
  expect(employee.getEmail()).toBe("janedoe@gmail.com");
});
