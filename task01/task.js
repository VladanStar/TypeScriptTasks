"use strict";
class Automobil {
    constructor(marka, model, godinaProizvodnje, brzina) {
        this.marka = marka;
        this.model = model;
        this.godinaProizvodnje = godinaProizvodnje;
        this.brzina = brzina;
    }
    povećajBrzinu(brzina) {
        this.brzina += brzina;
    }
    smanjiBrzinu(brzina) {
        this.brzina -= brzina;
    }
}
const auto1 = new Automobil("Tesla", "Model S", 2022, 100);
const auto2 = new Automobil("Toyota", "Camry", 2021, 70);
const auto3 = new Automobil("Honda", "Civic", 2020, 50);
auto1.povećajBrzinu(50);
console.log(auto1.brzina); // 50
auto2.povećajBrzinu(40);
console.log(auto2.brzina); // 40
auto3.smanjiBrzinu(20);
console.log(auto3.brzina); // -20
const automobili = [
    new Automobil("Toyota", "Camry", 2015, 120),
    new Automobil("Honda", "Civic", 2020, 150),
    new Automobil("Tesla", "Model S", 2018, 200)
];
for (const auto of automobili) {
    console.log("Marka: " + auto.marka);
    console.log("Model: " + auto.model);
    console.log("Godina proizvodnje: " + auto.godinaProizvodnje);
    console.log("Brzina: " + auto.brzina + " km/h");
    console.log("");
}
