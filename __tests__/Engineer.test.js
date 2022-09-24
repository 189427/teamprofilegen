const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer(
    "Jane Doe",
    1,
    "janedoe@gmail.com",
    "http://www.github.com/test"
  );

  expect(engineer.getName()).toBe("Jane Doe");
  expect(engineer.getId()).toBe(1);
  expect(engineer.getEmail()).toBe("janedoe@gmail.com");
  expect(engineer.getGithub()).toBe("http://www.github.com/test");
});
