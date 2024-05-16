function es5Function(name) {
    return "Hello, " + name + " from the functions of JavaScript past."
}
console.log(es5Function("Luka"));

const es6Function = name => `Hello, from the future ${name}.`;
console.log(es6Function("Luka"))

const noParameters = () => "I accept no arguments!";
console.log(noParameters())

const manyParameters = (param1, param2, param3) => 
`I have ${param1}, ${param2}, and ${param3} living in my home!`;
console.log(manyParameters("Monsteras", "Photos", "Alocasia plants"));

const manyParameters2 = (param1, param2, param3) =>{
    let statement = `I have ${param1}`;
    statement += `, ${param2}`;
    statement += `, and ${param3}`;
    statement += ` living in my home!`;
    return statement;
};
console.log(manyParameters2("Monsteras", "Photos", "Alocasia plants"));

const digimon = (dig1, dig2, dig3, dig4) => {
    const digi = {
        digi1: {
            name: "Agumon",
            friend: "Taichi"
        },
        digi2: {
            name: "Gabumon",
            friend: "Koshiro"
        },
        digi3: {
            name: "Piyomon",
            friend: "Sora"
        },
        digi4: {
            name: "Palmon",
            friend: "Mimi"
        }
    }

    return digi.forEach(digim => {
        `I love ${digim.name} and ${digim.friend}!`;
    });

}
console.log(digimon)