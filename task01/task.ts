class Automobil {
    marka: string;
    model: string;
    godinaProizvodnje: number;
    brzina: number;
  
    constructor(marka: string, model: string, godinaProizvodnje: number, brzina: number) {
      this.marka = marka;
      this.model = model;
      this.godinaProizvodnje = godinaProizvodnje;
      this.brzina = brzina;
    }
  
    povećajBrzinu(brzina: number) {
      this.brzina += brzina;
    }
  
    smanjiBrzinu(brzina: number) {
      this.brzina -= brzina;
    }
  }
  
  const auto1 = new Automobil("Tesla", "Model S", 2022, 0);
  const auto2 = new Automobil("Toyota", "Camry", 2021, 0);
  const auto3 = new Automobil("Honda", "Civic", 2020, 0);
  
  auto1.povećajBrzinu(50);
  console.log(auto1.brzina); // 50
  
  auto2.povećajBrzinu(40);
  console.log(auto2.brzina); // 40
  
  auto3.smanjiBrzinu(20);
  console.log(auto3.brzina); // -20
  