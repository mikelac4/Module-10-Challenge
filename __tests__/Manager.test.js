const { default: test } = require("node:test");
const Manager = require("../lib/Manager");

test("Sets office number", () => {
    const num = 24;
    const man = new Manager("Joe", 6, "email@email.com", num);
    expect(man.officeNumber).toBe(num);
});

test("Gets office number from getOfficeNumber()", () => {
    const num = 24;
    const man = new Manager("Joe", 6, "email@email.com", num);
    expect(man.getOfficeNumber()).toBe(num);

});

test("Gets role", () => {
    const role = "Manager";
    const man = new Manager("Joe", 6, "email@email.com", 24);
    expect(man.getRole()).toBe(role);
});