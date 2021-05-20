//crie uma função que exiba uma mensagem no console
//crie uma função que receba o seu nome como (parâmetro) e exiba no console
//crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console
//crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console
//crie uma função que retorne o triplo do número recebido no parâmetro da função

//01-crie uma função que exiba uma mensagem no console:
function nameSister(nome){
    console.log(`O nome da minha irmã é ${nome}`);
}
nameSister("Luane");


//02-crie uma função que receba o seu nome como (parâmetro) e exiba no console:
function mostrarNome(nombre){
    console.log(`Meu nome é ${nombre}`);
}
mostrarNome("Luiz");


//03-crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console:
function minhaApresentação(informação){
    console.log(informação);
}
minhaApresentação("Meu nome é Luiz Menezes");
minhaApresentação("Tenho 20 anos");
minhaApresentação("Meu estilo musical favorito é Rap e Samba");


//04-crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console:
function moreaboutMe(information){
    console.log(information);
}
moreaboutMe("Meu filme favorito é Coringa");
moreaboutMe("Minha musica favorita é Como Nossos Pais - Elis Regina");


//05-crie uma função que retorne o triplo do número recebido no parâmetro da função:
function triple(number){
    return number*3;
}
triple(7);
console.log(triple(7));