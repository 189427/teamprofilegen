const Manager = require("../lib/Manager");

test("creates an manager object", () => {
  const manager = new Manager("Jane Doe", 1, "janedoe@gmail.com");

  expect(manager.getName()).toBe("Jane Doe");
  expect(manager.getId()).toBe(1);
  expect(manager.getEmail()).toBe("janedoe@gmail.com");
  //expect(manager.getOffice()).toBe("1");
});
