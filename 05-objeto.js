class Pessoa {
    constructor(nome, idade, altura, peso) {// Atributos
        //Inicialização dos atributos
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        }
        // Método
        falar() {
            console.log(`Olá, meu nome é ${this.nome}!`);
        }
}
//Objeto/Instância "pessoa1" criada apartir da classe Pessoa
const pessoa1 = new Pessoa('Marcely', 17, 1.71, 0);
pessoa1.falar(); //Chamada de método falar() da classe Pessoa