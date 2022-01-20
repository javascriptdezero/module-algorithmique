/* Les structures de données linéaires : les piles */

// Tableau + push() + pop() + .length
// Création d'une pile
let pile = [5,2,4,1,7];
console.log(pile);

// On dépile le sommet 7
console.log("On dépile le 7 :");
console.log("Avant :", pile);
pile.pop();
console.log("Après :", pile);

// On empile le 3 sur le sommet
console.log("On empile le 3 :");
console.log("Avant :", pile);
pile.push(3);
console.log("Après :", pile);

// Lecture de la valeur du sommet
console.log("Le sommet vaut :", pile[pile.length - 1]);

// Savoir si la pile est vide ou pas
console.log("Pile vide ?", pile.length === 0);

// 👍 Pensez à utiliser la CheatSheet en PDF du module débutant !