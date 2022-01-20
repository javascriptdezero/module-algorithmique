/* Les structures de données linéaires : les tableaux */

// Création d'un tableau
let tableau = [5,2,4,1,3];
console.log(tableau);

// Lecture d'un élément grâce à son indice
console.log("Élément à l'indice 2 :", tableau[2]);

// Affectation d'une valeur à un élément grâce à son indice
tableau[2] = 12;

// Ajout d'un élément (42) dans le tableau à la position 2
console.log("Avant ajout :", tableau);
tableau.splice(2, 0, 42);
console.log("Après ajout :", tableau);

// Suppression d'un élément du tableau grâce à son indice
console.log("Avant suppression :", tableau);
tableau.splice(2, 1);
console.log("Après suppression :", tableau);

// Connaître la longueur du tableau
console.log("Taille du tableau :", tableau.length);

// 👍 Pensez à utiliser la CheatSheet en PDF du module débutant !