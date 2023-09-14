import VeiculoInterface from '../interfaces/vehicle.interface';

class Moto implements VeiculoInterface {
  public modelo: string;
  public anoDeFabricacao: string;
  public marca: string;
  public rodas: number;
  public passageiros: number;

  constructor(modelo: string, anoDeFabricacao: string, marca: string, passageiros: number) {
    this.modelo = modelo;
    this.anoDeFabricacao = anoDeFabricacao;
    this.marca = marca;
    this.rodas = 2;
    this.passageiros = this.validarQuantPassageiros(passageiros);
  }

  private validarQuantPassageiros(quantPassageiros: number) {
    if (quantPassageiros < 1 || quantPassageiros > 2) {
      throw new Error('Quantidade de passageiros inválida.');
    }

    return quantPassageiros;
  }
}

export default Moto;
