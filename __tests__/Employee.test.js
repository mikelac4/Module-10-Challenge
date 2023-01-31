const Employee = require("../lib/Employee")

test("Creates new employee", () => {
    const newEmp = new Employee();
    expect(typeof(newEmp)).toBe("object");
});

test("Sets the name", () => {
    const name = "Joe";
    const newEmp = new Employee(name);
    expect(newEmp.name).toBe(name);
});

test("Sets id", () => {
    const id = 6;
    const newEmp = new Employee("Joe", id);
    expect(newEmp.id).toBe(id);
});

test("Sets an email", () => {
    const email = "email@email.com";
    const newEmp = new Employee("Joe", 6, email);
    expect(newEmp.email).toBe(email);
});

test("Gets name from getName()", () => {
    const name = "Joe";
    const newEmp = new Employee(name);
    expect(newEmp.getName()).toBe(name);
});

test("Gets id from getId()", () => {
    const id = 6;
    const newEmp = new Employee("Joe", id);
    expect(newEmp.getId()).toBe(id); 
});

test("Gets email from getEmail()", () => {
    const email = "email@email.com";
    const newEmp = new Employee("Joe", 6, email);
    expect(newEmp.getEmail()).toBe(email);
});

test("Gets role", () => {
    const role = "Employee";
    const newEmp = new Employee("Joe", 6, "email@email.com");
    expect(newEmp.getRole()).toBe(role);
});