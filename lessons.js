/* Exercise 1 */

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function concatenate() {
    var phrase = 'O usuário mora em ' + endereco.cidade + ' / ' +
        endereco.uf + ' , no bairro ' + endereco.bairro + ', na rua "' +
        endereco.rua + '" com nº ' + endereco.numero + '.'

    console.log(phrase);
}

concatenate();

/* Exercise 2 */

function evenNumbers(x, y) {
    while (x <= y) {
        if (x % 2 == 0) {
            console.log(x);
        }
        x = x + 1;
    }
}

evenNumbers(32, 321);

/* Exercise 3 */

function haveSkills(skills) {

    for (let index = 0; index < skills.length; index++) {
        if (skills[index] == 'Javascript') {
            return true;
        } else {
            return false;
        }

    }
}
var skills = ["Javascript", "ReactJS", "React Native"];
var resultHabilities = haveSkills(skills);
console.log(resultHabilities);

/* Exercise 4 */

function experience(anos) {

    if (anos <= 1) {
        console.log('iniciante');
    } else if (anos <= 3) {
        console.log('Intermediário');
    } else if (anos <= 6) {
        console.log('Avançado');
    } else if (anos >= 7) {
        console.log('Jedi Master');
    }
}

experience(8);

/* Exercise 5 */

var usuarios = [{
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function details(usuarios) {
    for (usuario of usuarios) {
        var joinHabilities = usuario.habilidades.join(', ');
        var phrase = 'O usuário ' + usuario.nome + ' possui as habilidades: ' 
        + joinHabilities;
        console.log(phrase);
    }
}

details(usuarios);