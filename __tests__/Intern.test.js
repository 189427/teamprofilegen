const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Jane Doe", 1, "janedoe@gmail.com", "University");

  expect(intern.getName()).toBe("Jane Doe");
  expect(intern.getId()).toBe(1);
  expect(intern.getEmail()).toBe("janedoe@gmail.com");
  //expect(intern.getSchool()).toBe("University");
});
