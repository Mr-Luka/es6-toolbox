function es5Function(name) {
    return "Hello, " + name + " from the functions of JavaScript past."
}
console.log(es5Function("Luka"));

const es6Function = name => `Hello, from the future ${name}.`;
console.log(es6Function("Luka"))