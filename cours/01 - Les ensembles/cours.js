/* Les structures de données linéaires : les ensembles */

// Création d'un ensemble vide
let ensembleVide = new Set();
console.log(ensembleVide);

// Création d'un ensemble à partir d'un tableau
let ensemble = new Set([5,2,4]);
console.log(ensemble);

// Ajout d'un élément (42) dans l'ensemble
console.log("Avant ajout :", ensemble);
ensemble.add(42);
console.log("Après ajout :", ensemble);

// Suppression de l'élément 42 de l'ensemble
console.log("Avant suppression :", ensemble);
ensemble.delete(42);
console.log("Après suppression :", ensemble);

// Connaître la taille de l'ensemble
console.log("Taille de l'ensemble :", ensemble.size); // .size pas .length !

// Valeurs primitives (chaînes, nombres, booléens) OK
// console.log("Ajout de valeurs primitives dupliquées");
// ensemble.add("ok");
// ensemble.add("ok");
// ensemble.add(42);
// ensemble.add(42);
// ensemble.add(true);
// ensemble.add(true);
// ensemble.add(false);
// console.log(ensemble);

// ATTENTION ça ne marche pas pour les objets/tableaux
// console.log("Attention aux objets :");
// let obj = { prenom: "jérémy" };
// ensemble.add(obj);
// ensemble.add(obj);
// console.log(ensemble);

// Utilité : retirer les doublons d'un tableau facilement
// console.log("Retirer les doublons d'un tableau :");
// let tableau = [1,2,2,3,4,4,5,2,2,'a','b','a'];
// let ensembleSansDoublons = new Set(tableau);
// console.log(ensembleSansDoublons);
// let tableauSansDoublons = Array.from(ensembleSansDoublons);
// console.log(tableauSansDoublons);

// Utilité : construire un ensemble sans doublons
// console.log("Construire un ensemble sans doublons :");
// let ensembleFinal = new Set();
// ensembleFinal.add(1);
// ensembleFinal.add(2);
// ensembleFinal.add(1);
// console.log(ensembleFinal);

// Quelles sont les lettres uniques qui composent ce mot ?
// console.log("Lettres uniques d'un mot :");
// let mot = "radar";
// let lettresUniques = new Set();
// for (let i = 0; i < mot.length; i++) {
//   let lettre = mot[i];
//   lettresUniques.add(lettre);
// }
// console.log(lettresUniques);

// Lisez la doc du MDN sur le Set pour en savoir plus :
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Set