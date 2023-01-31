const Engineer = require("../lib/Engineer")

test("Sets GitHub", () => {
    const git = "Joe123";
    const eng = new Engineer("Joe", 6, "email@email.com", git);
    expect(eng.github).toBe(git);
});

test("Gets GitHub from getGithub()", () => {
    const git = "Joe123";
    const eng = new Engineer("Joe", 6, "email@email.com", git);
    expect(eng.getGithub()).toBe(git);

});

test("Gets role", () => {
    const role = "Engineer";
    const eng = new Engineer("Joe", 6, "email@email.com", "Joe123");
    expect(eng.getRole()).toBe(role);
});