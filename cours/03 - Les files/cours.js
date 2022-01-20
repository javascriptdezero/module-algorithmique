/* Les structures de données linéaires : les files */

// Tableau + unshift() + pop() (avant à la fin, arrière au début)
// OU
// Tableau + shift() + push() (avant au début, arrière à la fin)

// Création d'une file unshift() + pop() (avant à la fin, arrière au début)
// Imaginez un magasin sur la droite de la file
let file = [2,4,1,3];
console.log(file);

// La personne (3) à l'avant (fin) se fait servir
console.log("On sert 3 qui sort de la file :");
console.log("Avant :", file);
file.pop();
console.log("Après :", file);

// Une nouvelle personne (7) entre dans la file
console.log("Une personne 7 entre dans la file :");
console.log("Avant :", file);
file.unshift(7);
console.log("Après :", file);

// Lecture de la valeur du début de la file
console.log("Le début de la file vaut :", file[file.length - 1]);

// Savoir si la file est vide ou pas
console.log("File vide ?", file.length === 0);

/************************************************/
/* Faisons-le dans l'autre sens maintenant ! 🙃 */
/************************************************/

console.log("DANS L'AUTRE SENS 🙃");

// Création d'une file shift() + push() (avant au début, arrière à la fin)
// Imaginez un magasin sur la gauche de la file
file = [2,4,1,3];
console.log(file);

// La personne (2) à l'avant (début) se fait servir
console.log("On sert 2 qui sort de la file :");
console.log("Avant :", file);
file.shift();
console.log("Après :", file);

// Une nouvelle personne (7) entre dans la file
console.log("Une personne 7 entre dans la file :");
console.log("Avant :", file);
file.push(7);
console.log("Après :", file);

// Lecture de la valeur du début de la file
console.log("Le début de la file vaut :", file[0]);

// 👍 Pensez à utiliser la CheatSheet en PDF du module débutant !