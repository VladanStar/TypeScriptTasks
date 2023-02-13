const brojevi = [10, 5, 30, 20];

console.log("Originalni niz: " + brojevi);

// Sortiranje niza
brojevi.sort((a, b) => a - b);
console.log("Sortirani niz: " + brojevi);

// Obrnuti ispis elemenata niza
brojevi.reverse();
console.log("Obrnuti niz: " + brojevi);
