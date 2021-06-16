const classes = require("../lib/classes.js");

const Manager = classes.Manager
describe("Manager", () => {
  describe("name", () => {
    it("should return name", () => {
      const result = new Manager("Tod", "12", "tod@gmail.com").getName();
      expect(result).toEqual("Tod");
    });
  });
  describe("id", () => {
    it("should return id", () => {
      const result = new Manager("Tod", "12", "tod@gmail.com").getId();
      expect(result).toEqual("12");
    });
  });
  describe("email", () => {
    it("should return email", () => {
      const result = new Manager("Tod", "12", "tod@gmail.com").getEmail();
      expect(result).toEqual("tod@gmail.com");
    });
  });
  describe("role", () => {
    it("should return role", () => {
      const result = new Manager("Tod", "12", "tod@gmail.com").getRole();
      expect(result).toEqual("Manager");
    });
  });
  describe("office_number", () => {
    it("should return role", () => {
      const result = new Manager("Tod", "12", "tod@gmail.com", "512").getOfficeNumber();
      expect(result).toEqual("512");
    });
  });
});
