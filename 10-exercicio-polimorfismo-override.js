//Classe base Pessoa
class Pessoa {
    constructor(nome, vida, altura, idade, peso) {
        this.nome = nome;
        this.vida = vida;
        this.altura = altura;
        this.idade = idade;
        this.peso = peso;
    }

    falar() {
        console.log(`Olá meu nome é ${this.nome}!`);
    }

    comer() {
        console.log(`Eu ${this.nome} gosto de comer lasanha, é a minha comida preferida!`);
    }
}

//Class FilhaDaBarbie que herda de Pessoa
class FilhaDaBarbie extends Pessoa {
  constructor(nome, vida, altura, idade, peso, urso, doce) {
    super(nome, vida, altura, idade, peso);
    this.urso = urso;
    this.doce = doce;
  }
  falar() {
    console.log(
      `Eu sou a ${this.nome} e o meu brinquedo preferido é o ${this.urso}!`
    );
  }
  comer() {
    console.log(
      `Eu ${this.nome} gosto muito de comer ${this.doce}!`
    );
  }
}

//Class IrmaDaBarbie que herda de Pessoa
class IrmaDaBarbie extends Pessoa {
  constructor(nome, vida, altura, idade, peso, lugarPreferido, urso, churrasco) {
    super(nome, vida, altura, idade, peso);
    this.lugarPreferido = lugarPreferido;
    this.urso = urso;
    this.churrasco = churrasco;
  }
  falar() {
    console.log(
      `Eu sou a ${this.nome} e o meu lugar preferido é o  ${this.lugarPreferido}!`
    );
  }
  comer() {
    console.log(
      `Eu ${this.nome} frequento muito o restaurante aqui próximo de casa, e a minha comida preferida é ${this.churrasco}!`
    );
  }
}

//Classe MaeDaBarbie que herda de Pessoa 
    class MaeDaBarbie extends Pessoa {
      constructor(nome, idade, CorPreferida, urso, doce) {
        super(nome, idade);
        this.CorPreferida = CorPreferida;
        this.urso = urso;
        this.doce = doce;
      }

      falar() {
        console.log(
          `Oii eu sou a ${this.nome} e minha cor preferida é a  ${this.CorPreferida}!`
        );
      }
      comer() {
        console.log(
          `Eu ${this.nome} amo muito ${this.doce}!`
        );
      }
    }

//Criando instâncias de FilhaDaBarbie, IrmaDaBarbie e MaeDaBarbie
const filhaDaBarbie = new FilhaDaBarbie("Lorena", 10, 1.70, 8, 15, "fluy", "pirulito");
filhaDaBarbie.falar(); //Saída: Eu sou a Lorena e o meu brinquedo preferido é o fluy!
filhaDaBarbie.comer(); //Saída: Eu Lorena gosto muito de comer pirulito!

const irmaDaBarbie = new IrmaDaBarbie("Skipper", 18, 1.75, 21, 30, "shopping", "fluy", "fraudinha");
irmaDaBarbie.falar(); //Saída: Eu sou a Skipper e o meu lugar preferido é o shopping!
irmaDaBarbie.comer(); //Saída: Eu Skipper frequento o restaurante aqui próximo de casa, e a minha comida preferida é churrasco!

const maeDaBarbie = new MaeDaBarbie("Marianna", 30, "rosa", "fluy", "pirulito");
maeDaBarbie.falar(); //Saída: Oii eu sou a Marianna e minha cor preferida é a rosa!
maeDaBarbie.comer(); //Saída: Eu Marianna amo muito pirulito!
