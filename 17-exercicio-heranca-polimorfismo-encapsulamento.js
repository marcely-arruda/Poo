//Classe base Pessoa
class Pessoa {
  //Encapsulando os atributos com #, tornando-os privados
  #nome;
  #idade;
  #sexo;
  #altura;
  #peso;
  #nacionalidade;
  #profissao;
  #estado;
  #telefone;
  #cidade;
  //Método Construtor
  constructor(nome, idade, sexo, altura, peso, nacionalidade, profissao, estado, telefone, cidade) {
    this.#nome = nome;
    this.#idade = idade;
    this.#sexo = sexo;
    this.#altura = altura;
    this.#peso = peso;
    this.#nacionalidade = nacionalidade;
    this.#profissao = profissao;
    this.#estado = estado;
    this.#telefone = telefone;
    this.#cidade = cidade;
  }
  //Métodos Getters e Setters
  //Métodos Getter e Setter para o atributo nome
  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }
  //Métodos Getter e Setter para o atributo idade
  get idade() {
    return this.#idade;
  }
  set idade(idade) {
    this.#idade = idade;
  }
  //Métodos Getter e Setter para o atributo sexo
  get sexo() {
    return this.#sexo;
  }
  set sexo(sexo) {
    this.#sexo = sexo;
  }
  //Métodos Getter e Setter para o atributo altura
  get altura() {
    return this.#altura;
  }
  set altura(altura) {
    this.#altura = altura;
  }
  //Métodos Getter e Setter para o atributo peso
  get peso() {
    return this.#peso;
  }
  set peso(peso) {
    this.#peso = peso;
  }
 
  //Métodos Getter e Setter para o atributo nacionalidade
  get nacionalidade() {
    return this.#nacionalidade;
  }
  set nacionalidade(nacionalidade) {
    this.#nacionalidade = nacionalidade;
    }
    
//Métodos Getter e Setter para o atributo profissao
  get profissao() {
    return this.#profissao;
  }
  set profissao(profissao) {
    this.#profissao = profissao;
    }

 //Métodos Getter e Setter para o atributo estado
  get estado() {
    return this.#estado;
  }
  set estado(estado) {
    this.#estado = estado;
    }

//Métodos Getter e Setter para o atributo telefone
  get telefone() {
    return this.#telefone;
  }
  set telefone(telefone) {
    this.#telefone = telefone;
    }

//Métodos Getter e Setter para o atributo cidade
  get cidade() {
    return this.cidade;
  }
  set cidade(cidade) {
    this.#cidade = cidade;
    }
}
  //Simulação de sobrecarga
  fazerAcao(...args) {
    if (args.length === 0) {
      console.log(`${this.nome} realizou uma ação normal!`);
    } else if (args.length === 1) {
      console.log(`${this.nome} fez ${args[0]}!`);
    } else if (args.length === 2) {
      console.log(`${this.nome} fez ${args[1]} e se divertiu com ${args[0]}!`);
    } else {
      console.log("Número inválido de argumentos.");
    }
  }
  defesa() {
    console.log(
      `${this.nome} se defendeu com ${this.#nivel * 2} pontos de defesa!`
    );
  }

  receberDano(dano) {
    this.vida -= dano;
    console.log(
      `${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`
    );
  }
}

//Classe derivada - Assasino
class Assassino extends Personagem {
  constructor(nome, nivel, vida, mana, furtividade) {
    super(nome, "Assasino", nivel, vida, mana);
    this.furtividade = furtividade; //Atributo específico
  }

  //Sobreescrevendo o método atacar
  atacar() {
    console.log(
      `${this.nome} ataca silenciosamente com dano adicional pela furtividade!`
    );
  }

  //Método específico
  usarFurtividade() {
    console.log(
      `${this.nome} usa sua furtividade de nível ${this.furtividade} para se esconder!`
    );
  }
}
//Classe derivada - Paladino
class Paladino extends Personagem {
  constructor(nome, nivel, vida, mana, fe) {
    super(nome, "Paladino", nivel, vida, mana);
    this.fe = fe; //Atributo específico
  }
  //Sobreescrevendo o método defesa
  defesa() {
    console.log(
      `${this.nome} se defendeu com o escudo sagrado, absorvendo mais dano com base na fé (${this.fe})!`
    );
  }

  //Método específico
  curar() {
    console.log(`{this.nome} usa sua fé para curar si mesmo ou aliados!`);
  }
}

//Classe derivada - Mecanico
class Mecanico extends Personagem {
  constructor(nome, nivel, vida, mana, engenharia) {
    super(nome, "Mecanico", nivel, vida, mana);
    this.engenharia = engenharia; //Atributo específico
  }

  //Sobreescrevendo o método receberDano
  receberDano(dano) {
    const danoReduzido = dano - this.engenharia;
    super.receberDano(danoReduzido);
    console.log(
      `$(this.nome) usou sua engenharia para reduzir o dano em $(this.engenharia).`
    );
  }

  //Método específico
  construirTorre() {
    console.log(`${this.nome} construi uma torre defensiva!`);
  }
}

//Criando instância da classe derivada Assasino
const assassino = new Assassino("Luna Sombria", 10, 100, 50, 8);
//Chamando os métodos
assassino.atacar(); //Método sobscrito
assassino.usarFurtividade(); //Método específico

//Criando instância da classe derivada Paladino
const paladino = new Paladino("Sir Lancelot", 12, 120, 70, 15);
//Chamando os métodos
paladino.defesa(); //Método subscrito
paladino.curar(); //Método específico

//Criando instância da classe derivada Mecanico
const mecanico = new Mecanico("Roberto das Engrenagens", 8, 90, 40, 5);
//Chamando os métodos
mecanico.receberDano(30); //Método sobrescrito
mecanico.construirTorrent(); //Método específico

console.log("----------------------------------------------------------------");
console.log("Modificando os objetos usando setters:");
console.log("----------------------------------------------------------------");

//Modificando o objeto assasino usando setters
assassino.nome = "Raven";
console.log(`Nome modificado: ${assassino.nome}`);
assassino.atacar();

//Modificando o objeto paladino usando setters
paladino.vida = 150;
console.log(`Vida modificada: ${paladino.vida}`);
paladino.defesa();

//Modificando o objeto mecanico usando setters
mecanico.mana = 60;
console.log(`Mana modificada: ${mecanico.mana}`);
mecanico.receberDano(50);
