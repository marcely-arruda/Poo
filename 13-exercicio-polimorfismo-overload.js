class Produto {
  constructor(nome, categoria, preco, quantidade, fornecedor, descricao, peso, dimensao, dataValidade, codigoBarras) {
    this.nome = nome;
    this.vida = categoria;
    this.preco = preco;
    this.quantidade = quantidade;
    this.fornecedor = fornecedor;
    this.descricao = descricao;
    this.peso = peso;
    this.dimensao = dimensao;
    this.dataValidade = dataValidade;
    this.codigoBarras = codigoBarras;
  }
  //Exibir informação
  desconto(...args) {
    if(args.length === 1) {
        console.log(`O produto ${this.nome} recebe 10% de R$ ${this.desconto}`);
    } else if (args.length === 2) {
        const valorDesconto = args[0];
        console.log(`O produto ${this.nome} recebe ${valorDesconto}% de R$ ${this.desconto(valorDesconto)}`);
    } else if (args.length === 3) {
        const [valor, desconto] = args;
        if(desconto === 20)
            console.log ('vai receber ${desconto}%');
                } else {
                    console.log('se não ${valor} normal');
                }else {
                    console.log('Você não pode receber um desconto maior que 20%');

                }
            } 
        receberDesconto(desconto) {
            this.preco -= preco;

        }
