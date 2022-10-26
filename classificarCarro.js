class Veiculo {
   marca;
   cor;
   gastoPorKm;

   constructor(marca, cor, gastoPorKm) {
      this.marca = marca;
      this.cor = cor;
      this.gastoPorKm = gastoPorKm;

   }
   valorGastoViagem(kmPercorrido, valorCombustivel) {
      return kmPercorrido * this.gastoPorKm * valorCombustivel;
   }

}
const uno = new Veiculo("Fiat", "Prata", 1 / 12);
const onix = new Veiculo("Chevolet", " Branco", 1 / 14);


console.log(uno.valorGastoViagem(101, 5.70));
console.log(onix.valorGastoViagem(101, 5.70));