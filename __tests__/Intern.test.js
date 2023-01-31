const { default: test } = require("node:test");
const Intern = require("../lib/Intern");

test("Sets school", () => {
    const school = "UNC";
    const int = new Intern("Joe", 6, "email@email.com", school);
    expect(int.school).toBe(school);
});

test("Gets school from getSchool()", () => {
    const school = "UNC";
    const int = new Intern("Joe", 6, "email@email.com", school);
    expect(int.getSchool()).toBe(school);

});

test("Gets role", () => {
    const role = "Intern";
    const int = new Intern("Joe", 6, "email@email.com", "UNC");
    expect(int.getRole()).toBe(role);

});