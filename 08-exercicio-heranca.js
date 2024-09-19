//Classe base Pessoa
class Pessoa {
  constructor(nome, idade, altura, peso) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }
  //Métodos
  mostrarDados() {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, tenho ${this.altura} de altura e peso ${this.peso}kg.`)
  }
}

// Class Estudante que herda de Pessoa
class Estudante extends Pessoa {
  constructor(nome, idade, altura, peso, curso) {
    super(nome, idade, altura, peso);
    this.curso = curso;
  }
  //Métodos
  mostrarCurso() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, tenho ${this.altura} de altura, peso ${this.peso}kg e estou cursando ${this.curso} atualmente.`
    );
  }
}

//Classe Funcionario que herda de Pessoa
class Funcionario extends Pessoa {
  constructor(nome, idade, altura, peso, salario) {
    super(nome, idade, altura, peso);
    this.salario = salario;
  }
  //Métodos
  mostrarSalario() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, tenho ${this.altura} de altura e recebo ${this.salario} reais por mês.`
    );
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

//Criando objetos aluno, diretor e professor
const aluno = new Estudante("Marcely", 16, 1.7, 70,"Programação de Jogos Digitais");
aluno.mostrarDados();
aluno.mostrarCurso();
const diretor = new Diretor("Sérgio", 45, 1.65, 65, 3000);
diretor.mostrarSalario();
diretor.mostrarDados();
const professor = new Professor("Marcely", 17, 1.75, 80, 600000);
professor.mostrarSalario();
 professor.mostrarDados();

//Montando no console a saída
console.log(aluno); //Saída: Estudante {nome: "João", idade: 16, altura:1.70, peso:70, curso:"Programação de Jogos Digitais"}
console.log(diretor); //Saída: Diretor {nome:"Sérgio", idade: 45, altura:1.65, peso:65, salario: 3000}
console.log(professor); //Saída Professor {nome:"Marcely", idade: 17, altura: 1.75, peso: 80, salario: 600000}

