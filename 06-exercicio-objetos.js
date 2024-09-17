class Car {
  // Construtor da classe Car
  constructor(make, model, year, color, mileage) {
    this.make = make; // Marca do carro
    this.model = model; // Modelo do carro
    this.year = year; // Ano de fabricação
    this.color = color; // Cor do carro
    this.mileage = mileage; // Quilometragem do carro
  }
  //Métodos
  ligar() {
    console.log(`o carro esta ligado`);
  }
  //Métodos
  correr() {
    console.log(`o carro começou a correr 100km/h`);
  }
  //Métodos
  desligar() {
    console.log(`Desligar sempre quando o carro parar`);
  }
}
//Objeto/Instância "carro1" criada apartir da classe Car
const carro1 = new Car('Toyota',"civic", 2024, 100);
carro1.ligar(); //Chamada de método ligar() da classe Car
carro1.correr(); //Chamada de método correr() da classe Car
carro1.desligar(); //Chamada de método desligar() da classe Car