/* Les structures de données non linéaires : les dictionnaires */

// Création d'un dictionnaire vide (un simple objet !)
let identite = {};
console.log(identite);

// Ajout d'une nouvelle association
identite.prenom = "Jérémy";
identite["age"] = 36;
identite.developpeur = true;
console.log(identite);

// Lecture d'une valeur par sa clé
console.log(identite.prenom);
console.log(identite["developpeur"]);

// Modification d'une valeur par sa clé
console.log("Age avant :", identite.age);
identite.age = 42;
console.log("Age après :", identite.age);

// Suppression d'une association
delete identite.age;
console.log(identite);

// Type de la clé, chaîne ou nombre
identite[42] = "quarante-deux";
console.log(identite);

// Parcourir les clés avec for...in
for (let cle in identite) {
  console.log("for...in", cle, "=>", identite[cle]);
}

// Récupérer toutes les clés dans un tableau
console.log("tableau des clés :", Object.keys(identite));
// Récupérer toutes les valeurs dans un tableau
console.log("tableau des valeurs :", Object.values(identite));

// Récupérer tous les couples clé -> valeur
let couples = Object.entries(identite);
console.log(couples);

// Regardons le détail avec une boucle for classique
for (let i = 0; i < couples.length; i++) {
  let couple = couples[i];
  console.log("couple numéro", i, couple);
}

// Même chose avec une boucle for...of
for (let couple of couples) {
  console.log("for...of couple :", couple);
}

// Même chose avec l'array destructuring
// let [cle, valeur] = ["ma clé", "ma valeur"];
for (let [cle, valeur] of couples) {
  console.log(cle, "=>", valeur);
}