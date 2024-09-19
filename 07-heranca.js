//Classe base Pessoa
class Pessoa {
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
}

// Class Estudante que herda de Pessoa
class Estudante extends Pessoa {
    constructor(nome, idade, altura, peso, curso) {
        super(nome, idade, altura, peso );
        this.curso = curso;
    }
}

//Classe Funcionario que herda de Pessoa
class Funcionario extends Pessoa {
    constructor(nome, idade, altura, peso, salario) {
        super(nome, idade, altura, peso);
        this.salario = salario;
    }
}

//Class Diretor que herda de Funcionario 
class Diretor extends Funcionario {
    constructor(nome, idade, altura, peso, salario) {
        super(nome, idade, altura, peso, salario);
    }
}

//Class Professor que herda de Funcionario
class Professor extends Funcionario {
    constructor(nome, idade, altura, peso, salario) {
        super(nome, idade, altura, peso, salario);
    }
}