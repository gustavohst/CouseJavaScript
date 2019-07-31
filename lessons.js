var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function concatenate(){
    var phrase = 'O usuário mora em ' + endereco.cidade + ' / ' 
    + endereco.uf +' , no bairro '+endereco.bairro+', na rua "'
    + endereco.rua +'" com nº ' + endereco.numero +'.'

    console.log(phrase);
}

concatenate();

/*
2º exercício
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function pares(x, y) {  // código aqui } pares(32, 321);
*/

function pares(x, y) {  
    while(x<y){
        if(x%2==0){
            console.log(x);
        }
        x = x+1;
    }
 }

pares(32, 321);

/*
3º exercício
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.
function temHabilidade(skills) {  // código aqui } var skills = ["Javascript", "ReactJS", "React Native"]; temHabilidade(skills); // true ou false
Dica: para verificar se um vetor contém um valor, utilize o método indexOf.
*/