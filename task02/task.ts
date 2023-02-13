class Osoba {
    ime: string;
    prezime: string;
    godine: number;
  
    constructor(ime: string, prezime: string, godine: number) {
      this.ime = ime;
      this.prezime = prezime;
      this.godine = godine;
    }
  
    izračunajStarost(): number {
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
  