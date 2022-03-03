/* Les structures de données non linéaires : le type Map */

// Création d'un dictionnaire vide
console.log("-- Création d'un dictionnaire vide");
let identite = new Map();
console.log(identite);

// Ajout d'une nouvelle association avec set()
console.log("\n-- Ajout d'une nouvelle association");
console.log('✅ avec .set()');
identite.set("prenom", "Jérémy");
identite.set("age", 36);
identite.set("developpeur", true);
// 🚨 ERREUR FREQUENTE
console.log('❌ identite.nombre = 42 ou identite["nombre"] = 42');
identite.nombre = 42;
console.log(identite);

// Lecture d'une valeur par sa clé avec get()
console.log("\n-- Lecture d'une valeur par sa clé");
console.log('✅ avec .get() =>', identite.get("prenom"));
// 🚨 ERREUR FREQUENTE
console.log('❌ identite.prenom ou identite["prenom"] =>', identite.prenom);

// Modification d'une valeur par sa clé avec set()
console.log("\n-- Modification d'une valeur");
console.log("Age avant :", identite.get("age"));
console.log('✅ avec .set("age", 42)');
identite.set("age", 42);
console.log('✅ Age après : identite.get("age") =>', identite.get("age"));
// 🚨 ERREUR FREQUENTE
console.log('❌ Age après : identite.age ou identite["age"] =>', identite.age);

// Suppression d'une association avec delete()
console.log("\n-- Suppression de la clé age");
// 🚨 ERREUR FREQUENTE
console.log("❌ delete identite.age");
delete identite.age;
console.log(identite);
console.log('✅ avec .delete()');
identite.delete("age");
console.log(identite);

// Parcourir les associations avec for...of
console.log("\n-- Parcourir les associations");
console.log("✅ avec for...of");
for (let paire of identite) {
  console.log(paire);
}
// 🚨 ERREUR FREQUENTE
console.log("❌ avec for...in");
for (let propriete in identite) {
  console.log(propriete);
}

// Récupérer toutes les clés dans un tableau
console.log("\n-- Récupérer les clés dans un tableau");
console.log("✅ avec .keys()");
console.log("Itérateur sur les clés :", identite.keys());
console.log("Transformation en tableau de clés :", Array.from(identite.keys()));
console.log("❌ avec Object.keys()");
console.log("Tableau des propriétés :", Object.keys(identite));


// Récupérer toutes les valeurs dans un tableau
console.log("\n-- Récupérer les valeurs dans un tableau");
console.log("✅ avec .values()");
console.log("Itérateur sur les valeurs des clés :", identite.values());
console.log("Transformation en tableau des valeurs des clés :", Array.from(identite.values()));
console.log("❌ avec Object.values()");
console.log("Tableau des valeurs des propriétés :", Object.values(identite));

// Récupérer tous les couples clé -> valeur
console.log("\n-- Récupérer les couples clé -> valeur");
console.log("✅ avec .entries()");
console.log("Itérateur sur les couples clé -> valeur :", identite.entries());
let tableauCouples = Array.from(identite.entries());
console.log("Transformation en tableau des couples clé -> valeur :", tableauCouples);
console.log("Contenu de ce tableau :");
for (let couple of tableauCouples) {
  console.log(couple);
}
console.log("❌ avec Object.entries()");
let entries = Object.entries(identite);
console.log("Tableau des couples propriété -> valeur :", entries);
console.log("Contenu de ce tableau :");
for (let couple of entries) {
  console.log(couple);
}

/* Ce qu'il faut retenir */
// Utilisez TOUJOURS les méthodes de l'objet Map !
// ✅ .get() .set() .delete() .has() .keys() .values() .entries()
// ❌ Object.keys(), Object.values(), Object.entries(), delete

// Point important : .keys(), .values() et .entries() renvoient un itérateur
// Pour le transformer en tableau : Array.from(itérateur)

// On peut aussi utiliser directement les itérateurs avec des boucles for...of
console.log("\n-- Itérer sur les itérateurs avec for...of");
console.log("Liste des clés : for...of identite.keys()");
for (let cle of identite.keys()) {
  console.log(cle);
}

console.log("\nListe des valeurs : for...of identite.values()");
for (let valeur of identite.values()) {
  console.log(valeur);
}

console.log("\nListe des couples : for...of identite.entries()");
for (let couples of identite.entries()) {
  console.log(couples);
}

// Lisez la doc du MDN sur Map pour en savoir plus :
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Map

/* Quelles différences : Object VS Map ? */
// Ce sera l'objet de la prochaine leçon 😁