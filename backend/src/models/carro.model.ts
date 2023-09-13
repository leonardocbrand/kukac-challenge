import VeiculoInterface from "../interfaces/vehicle.interface";

class Carro implements VeiculoInterface {
  public modelo: string
  public anoDeFabricacao: string;
  public quantidadeDePortas: number;
  public marca: string;

  constructor(
    modelo: string,
    anoDeFabricacao: string,  
    quantidadeDePortas: number,
    marca: string,
){
  this.modelo = modelo
  this.anoDeFabricacao = anoDeFabricacao
  this.quantidadeDePortas = this.validarQuantPortas(quantidadeDePortas)
  this.marca = marca
}
private validarQuantPortas(quantPortas: number) {
  if (quantPortas < 2 || quantPortas > 4) {
    throw new Error('Quantidade de portas inválida.')
  }

  return quantPortas;
}
}

export default Carro;
