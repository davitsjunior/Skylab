class TodoList{

    constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push('Novo Todo');
        console.log(this.todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function(){
    MinhaLista.addTodo();
}


const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index){
    return item + index;
});

console.log(newArr)

const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
    return item == 4;
});

console.log(find);

//arrow functions

const arr2 = [1, 3, 4, 5, 8, 9];

const newArr1 = arr.map(item => item + 2);

console.log(newArr1);

//valores padrão

const  soma = (a=3,b=6) => a + b;

console.log(soma(1));
console.log(soma());

//desestruturação

const usuario = {
    nome: 'Davi',
    idade: 35,
    endereco:{
        cidade: 'Borrazópolis',
        estado: 'Paraná',
    },
};

const {nome, idade, endereco:{cidade}} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({nome, idade}){
    console.log(nome, idade);
}

mostraNome(usuario);

//Operadores Rest/Spread
