function Employee(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.getName = function () {
    return this.name;
  };
  this.getId = function () {
    return this.id;
  };
  this.getEmail = function () {
    return this.email;
  };
  this.getRole = function () {
    return "Employee";
  };
}

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.getRole = function () {
      return "Manager";
    };
    this.officeNumber = officeNumber;
    this.getOfficeNumber = function () {
      return this.officeNumber;
    };
  }
}
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.getRole = function () {
      return "Engineer";
    };
    this.getGitHub = function () {
      return this.github;
    };
  }
}
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.getRole = function () {
      return "Intern";
    };
    this.school = school;
    this.getSchool = function () {
      return this.school;
    };
  }
}

module.exports = {
  Employee,
  Manager,
  Intern,
  Engineer,
};
