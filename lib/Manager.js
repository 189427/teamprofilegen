const Employee = require("./Employee");

class Manager {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    // this.office = office;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
