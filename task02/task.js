"use strict";
class Osoba {
    constructor(ime, prezime, godine) {
        this.ime = ime;
        this.prezime = prezime;
        this.godine = godine;
    }
    izračunajStarost() {
        const trenutnaGodina = new Date().getFullYear();
        return trenutnaGodina - this.godine;
    }
}
const osoba1 = new Osoba("John", "Doe", 1990);
const osoba2 = new Osoba("Jane", "Doe", 1995);
const osoba3 = new Osoba("Jim", "Smith", 1985);
console.log(osoba1.ime + " " + osoba1.prezime + " ima " + osoba1.izračunajStarost() + " godina.");
console.log(osoba2.ime + " " + osoba2.prezime + " ima " + osoba2.izračunajStarost() + " godina.");
console.log(osoba3.ime + " " + osoba3.prezime + " ima " + osoba3.izračunajStarost() + " godina.");
const osobe = [
    new Osoba("John", "Doe", 1990),
    new Osoba("Jane", "Doe", 1995),
    new Osoba("Jim", "Smith", 1985)
];
const filtriraneOsobe = osobe.filter(osoba => osoba.izračunajStarost() >= 30);
console.log("Filtrirane osobe: ");
for (const osoba of filtriraneOsobe) {
    console.log("Ime: " + osoba.ime);
    console.log("Prezime: " + osoba.prezime);
    console.log("Godine: " + osoba.godine);
    console.log("Starost: " + osoba.izračunajStarost() + " godina");
    console.log("");
}
