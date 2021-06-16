const classes = require("../lib/classes.js");

const Engineer = classes.Engineer
describe("Engineer", () => {
  describe("name", () => {
    it("should return name", () => {
      const result = new Engineer("Tod", "12", "tod@gmail.com").getName();
      expect(result).toEqual("Tod");
    });
  });
  describe("id", () => {
    it("should return id", () => {
      const result = new Engineer("Tod", "12", "tod@gmail.com").getId();
      expect(result).toEqual("12");
    });
  });
  describe("email", () => {
    it("should return email", () => {
      const result = new Engineer("Tod", "12", "tod@gmail.com").getEmail();
      expect(result).toEqual("tod@gmail.com");
    });
  });
  describe("role", () => {
    it("should return role", () => {
      const result = new Engineer("Tod", "12", "tod@gmail.com").getRole();
      expect(result).toEqual("Engineer");
    });
  });
  describe("github", () => {
    it("should return github", () => {
      const result = new Engineer("Tod", "12", "tod@gmail.com", "TodGit").getGitHub();
      expect(result).toEqual("TodGit");
    });
  });
});