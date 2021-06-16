const classes = require("../lib/classes.js");

const Intern = classes.Intern
describe("Intern", () => {
  describe("name", () => {
    it("should return name", () => {
      const result = new Intern("Tod", "12", "tod@gmail.com").getName();
      expect(result).toEqual("Tod");
    });
  });
  describe("id", () => {
    it("should return id", () => {
      const result = new Intern("Tod", "12", "tod@gmail.com").getId();
      expect(result).toEqual("12");
    });
  });
  describe("email", () => {
    it("should return email", () => {
      const result = new Intern("Tod", "12", "tod@gmail.com").getEmail();
      expect(result).toEqual("tod@gmail.com");
    });
  });
  describe("role", () => {
    it("should return role", () => {
      const result = new Intern("Tod", "12", "tod@gmail.com").getRole();
      expect(result).toEqual("Intern");
    });
  });
  describe("school", () => {
    it("should return school", () => {
      const result = new Intern("Tod", "12", "tod@gmail.com", "UofT").getSchool();
      expect(result).toEqual("UofT");
    });
  });
});

