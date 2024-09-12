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
    console.log(`o caroo esta ligado`);
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