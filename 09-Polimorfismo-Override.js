//Classe base Personagem
class Personagem {
    constructor(nome, vida) {
        this.nome = nome;
        this.vida = vida;
    }

    atacar() {
        console.log(`${this.nome} realiza um ataque básico!`);
    }

    receberDano(dano) {
        this.vida -= dano;
        console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
    }
}

//Class Guerreiro que herda de Personagem
class Guerreiro extends Personagem {
    constructor(nome, vida, arma) {
        super(nome, vida);
        this.arma = arma;
    }
    atacar() {
        console.log(`${this.nome} ataca com a ${this.arma}!`);
    }
}

//Class Mago que herda de Personagem
class Mago extends Personagem {
    constructor(nome, vida, fetico) {
        super(nome, vida);
        this.fetico = fetico;
    }
    atacar() {
        console.log(`${this.nome} lança ${this.feitico}!`);
    }
}

//Classe Arqueiro que herda de Personagem 
    class Arqueiro extends Personagem {
        constructor(nome, vida, tipoFlecha){
            super(nome, vida);
            this.tipoFlecha = tipoFlecha;
    }

    atacar(){
        console.log(`${this.nome} dispara flecha ${this.tipoFlecha}!`);
    }
}

//Criando instâncias de Guerreiro, Mago e Arqueiro
const guerreiro = new Guerreiro("Leonardo", 100, "espada");
guerreiro.atacar(); //Saída: Leonardo ataca com a espada!
guerreiro.receberDano(20); //Saída: Leonardo recebeu 20 de dano. Vida restante: 80

const mago = new Mago("Marlin", 80, "bola de fogo");
mago.atacar(); //Saída: Merlin recebeu 15 de dano. Vida restante: 65

const arqueiro = new Arqueiro("Legolas", 90, "explosiva");
arqueiro.atacar(); //Saída: Legolas dispara flechas explosiva!
arqueiro.receberDano(10); //Saída: Legolas recebeu 10 de dan0. Vida restante: 80
