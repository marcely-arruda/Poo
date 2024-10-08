// Classe base Pessoa
class Pessoa {
  // Encapsulando os atributos com #, tornando-os privados
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

  // Método Construtor
  constructor(
    nome,
    idade,
    sexo,
    altura,
    peso,
    nacionalidade,
    profissao,
    estado,
    telefone,
    cidade
  ) {
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

  // Métodos Getters e Setters
  get nome() {
    return this.#nome;
  }

  set nome(nome) {
    this.#nome = nome;
  }

  get idade() {
    return this.#idade;
  }

  set idade(idade) {
    this.#idade = idade;
  }

  get sexo() {
    return this.#sexo;
  }

  set sexo(sexo) {
    this.#sexo = sexo;
  }

  get altura() {
    return this.#altura;
  }

  set altura(altura) {
    this.#altura = altura;
  }

  get peso() {
    return this.#peso;
  }

  set peso(peso) {
    this.#peso = peso;
  }

  get nacionalidade() {
    return this.#nacionalidade;
  }

  set nacionalidade(nacionalidade) {
    this.#nacionalidade = nacionalidade;
  }

  get profissao() {
    return this.#profissao;
  }

  set profissao(profissao) {
    this.#profissao = profissao;
  }

  get estado() {
    return this.#estado;
  }

  set estado(estado) {
    this.#estado = estado;
  }

  get telefone() {
    return this.#telefone;
  }

  set telefone(telefone) {
    this.#telefone = telefone;
  }

  get cidade() {
    return this.#cidade;
  }

  set cidade(cidade) {
    this.#cidade = cidade;
  }

  // Simulação de sobrecarga
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

  contato() {
    console.log(`Meu telefone é ${this.telefone}!`);
  }

  nacionalidade() {
    console.log(
      `Minha nacionalidade é ${this.nacionalidade} e eu tenho muito orgulho disso!`
    );
  }
}

// Classe derivada - FazerAniversario
class FazerAniversario extends Pessoa {
  #dataDeAniversario;
  #bolo;

  constructor(
    nome,
    idade,
    sexo,
    altura,
    peso,
    nacionalidade,
    profissao,
    estado,
    telefone,
    cidade,
    dataDeAniversario,
    bolo
  ) {
    super(
      nome,
      idade,
      sexo,
      altura,
      peso,
      nacionalidade,
      profissao,
      estado,
      telefone,
      cidade
    );
    this.#dataDeAniversario = dataDeAniversario; // Atributo específico
    this.#bolo = bolo; // Atributo específico
  }

  // Métodos Getter e Setter para dataDeAniversario
  get dataDeAniversario() {
    return this.#dataDeAniversario;
  }

  set dataDeAniversario(dataDeAniversario) {
    this.#dataDeAniversario = dataDeAniversario;
  }

  // Métodos Getter e Setter para bolo
  get bolo() {
    return this.#bolo;
  }

  set bolo(bolo) {
    this.#bolo = bolo;
  }

  // Sobreescrevendo o método fazerAcao
  fazerAcao() {
    console.log(`${this.nome} está correndo rápido!`);
  }

  // Método específico
  diaDoAniversario() {
    console.log(
      `${this.nome}, a sua data de aniversário é ${this.dataDeAniversario}.`
    );
  }
}

// Classe derivada - Apresentar
class Apresentar extends Pessoa {
  #documentoIdentidade;
  #perdeuPeso;

  constructor(
    nome,
    idade,
    sexo,
    altura,
    peso,
    nacionalidade,
    profissao,
    estado,
    telefone,
    cidade,
    documentoIdentidade,
    perdeuPeso
  ) {
    super(
      nome,
      idade,
      sexo,
      altura,
      peso,
      nacionalidade,
      profissao,
      estado,
      telefone,
      cidade
    );
    this.#documentoIdentidade = documentoIdentidade; // Atributo específico
    this.#perdeuPeso = perdeuPeso; // Atributo específico
  }

  // Métodos Getter e Setter para documentoIdentidade
  get documentoIdentidade() {
    return this.#documentoIdentidade;
  }

  set documentoIdentidade(documentoIdentidade) {
    this.#documentoIdentidade = documentoIdentidade;
  }

  // Métodos Getter e Setter para perdeuPeso
  get perdeuPeso() {
    return this.#perdeuPeso;
  }

  set perdeuPeso(perdeu) {
    this.#perdeuPeso = perdeu;
  }

  // Sobreescrevendo o método fazerAcao
  fazerAcao() {
    console.log(
      `${this.nome} parou de correr e perdeu ${this.#perdeuPeso} kg!`
    );
  }

  // Método específico
  kgespecifico() {
    console.log(`${this.nome} perdeu especificamente ${this.#perdeuPeso} kg!`);
  }
}

// Classe derivada - Artista
class Artista extends Pessoa {
  #estilo;
  #inspiracao;

  constructor(
    nome,
    idade,
    sexo,
    altura,
    peso,
    nacionalidade,
    profissao,
    estado,
    telefone,
    cidade,
    estilo,
    inspiracao
  ) {
    super(
      nome,
      idade,
      sexo,
      altura,
      peso,
      nacionalidade,
      profissao,
      estado,
      telefone,
      cidade
    );
    this.#estilo = estilo; // Atributo específico
    this.#inspiracao = inspiracao; // Atributo específico
  }

  // Métodos Getter e Setter para estilo
  get estilo() {
    return this.#estilo;
  }

  set estilo(estilo) {
    this.#estilo = estilo;
  }

  // Métodos Getter e Setter para inspiracao
  get inspiracao() {
    return this.#inspiracao;
  }

  set inspiracao(inspiracao) {
    this.#inspiracao = inspiracao;
  }

  // Sobreescrevendo o método fazerAcao
  fazerAcao() {
    console.log(
      `${this.nome} ama pintar, e o seu estilo de pintura é ${this.#estilo}.`
    );
  }

  // Método específico
  exibirObra() {
    console.log(
      `Minha inspiração é ${this.inspiracao}, e eu exibo minhas obras no museu próximo de casa!`
    );
  }
}

// Classe derivada - Professor
class Professor extends Pessoa {
  #materia;
  #turma;

  constructor(
    nome,
    idade,
    sexo,
    altura,
    peso,
    nacionalidade,
    profissao,
    estado,
    telefone,
    cidade,
    materia,
    turma
  ) {
    super(
      nome,
      idade,
      sexo,
      altura,
      peso,
      nacionalidade,
      profissao,
      estado,
      telefone,
      cidade
    );
    this.#materia = materia; // Atributo específico
    this.#turma = turma; // Atributo específico
  }

  // Métodos Getter e Setter para materia
  get materia() {
    return this.#materia;
  }

  set materia(materia) {
    this.#materia = materia;
  }

  // Métodos Getter e Setter para turma
  get turma() {
    return this.#turma;
  }

  set turma(turma) {
    this.#turma = turma;
  }

  // Sobreescrevendo o método fazerAcao
  fazerAcao() {
    console.log(
      `Planejei rapidamente a matéria de ${this.#materia} para os meus alunos!`
    );
  }

  // Método específico
  ensinar() {
    console.log(
      `A minha turma ${this.turma} aprendeu rapidamente a matéria que ensinei a eles.`
    );
  }
}

// Criando instância da classe derivada FazerAniversario
const aniversariante = new FazerAniversario(
  "Marcely",
  17,
  "feminino",
  1.8,
  80,
  "brasileira",
  "cozinheira",
  "MT",
  6599738576,
  "Cuiabá",
  "10/10",
  "chocolate"
);
// Chamando os métodos do aniversariante
aniversariante.fazerAcao(); // Método sobrescrito
aniversariante.diaDoAniversario(); // Método específico

// Criando instância da classe derivada Apresentar
const apresentante = new Apresentar(
  "Marcely",
  17,
  "feminino",
  1.8,
  81,
  "brasileira",
  "ajudante",
  "MT",
  65,
  "Cuiabá",
  "ssp",
  15
);
// Chamando os métodos do apresentante
apresentante.fazerAcao(); // Método sobrescrito
apresentante.kgespecifico(); // Método específico

// Criando instância da classe derivada Artista
const pintor = new Artista(
  "Marcely",
  17,
  "feminino",
  1.85,
  70,
  "brasileira",
  "empresária",
  "MT",
  6578356583,
  "Cuiabá",
  "iluminador",
  "Meu pai"
);
// Chamando os métodos do pintor
pintor.fazerAcao(); // Método sobrescrito
pintor.exibirObra(); // Método específico

// Criando instância da classe derivada Professor
const historiador = new Professor(
  "Marcely",
  19,
  "feminino",
  1.65,
  91,
  "brasileira",
  "orientadora",
  "MT",
  65788375,
  "Cuiabá",
  "História",
  "oitavo ano"
);
// Chamando os métodos do professor
historiador.fazerAcao(); // Método sobrescrito
historiador.ensinar(); // Método específico

console.log("----------------------------------------------------------------");
console.log("Modificando os objetos usando setters:");
console.log("----------------------------------------------------------------");

//Modificando o objeto assasino usando setters
aniversariante.nome = "Marcely Arruda";
console.log(`Nome modificado: ${aniversariante.nome}`);
aniversariante.fazerAcao();
aniversariante.diaDoAniversario();

//Modificando o objeto paladino usando setters
apresentante.idade = "Fortaleza"
console.log(`Cidade modificada: ${apresentante.cidade}`);
apresentante.fazerAcao()
;

//Modificando o objeto mecanico usando setters
pintor.mana = 60;
console.log(`Mana modificada: ${mecanico.mana}`);
mecanico.receberDano(50);

//Modificando o objeto mecanico usando setters
historiador.mana = 60;
console.log(`Mana modificada: ${mecanico.mana}`);
mecanico.receberDano(50);
