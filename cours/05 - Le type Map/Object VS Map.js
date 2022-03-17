/* Quelles différences : Object VS Map ? */

// Histoire (avant / après ES6)
// Le type Map et les méthodes Object.keys(), Object.values() et Object.entries()
// ont été créés dans la version ES6

// Mêmes clés et valeurs...
let donnees = [
  ['s','v-s'], ['a','v-a'], ['c','v-c'], // "sac"
  ['bebe','v-bebe'], ['adulte','v-adulte'], // "bebe" => "adulte"
  ['11','v-11'], ['1','v-1'], ['2','v-2'], ['12','v-12'] // 11 1 2 12
];
let objet = {};
let map = new Map();
// Dans le même ordre d'insertion...
for (let [cle, valeur] of donnees) {
  objet[cle] = valeur;
  map.set(cle, valeur);
}

// Ordre des clés : non spécifié avant ES6
console.log("\n-- Ordre des clés");
// ❌ Ordre complexe (nombres croissants puis strings & symboles dans l'ordre d'insertion)
console.log(Object.entries(objet));
// ✅ Ordre d'insertion
console.log(Array.from(map.entries()));

// Lecture de la taille du dictionnaire
console.log("\n-- Taille du dictionnaire");
console.log("Object:", Object.keys(objet).length);
console.log("Map:", map.size);

// Itération sur les clés / valeurs
// ❌ Il faut récupérer les clés / valeurs avant
console.log("\n-- Itération sur les couples");
for (let [cle, valeur] of Object.entries(objet)) {
  console.log("Object:", cle, valeur);
}
// ✅ Map est itérable : on itère dessus directement
for (let [cle, valeur] of map) {
  console.log("Map:", cle, valeur);
}

// Clés accidentelles (chaîne de prototype)
console.log("\n-- Clés accidentelles");
let chaine = "Phrase constructor toString valueOf fin";
let compteurObjet = {};
let compteurMap = new Map();
for (let mot of chaine.split(' ')) {
  if (compteurObjet[mot] !== undefined) compteurObjet[mot]++;
  else compteurObjet[mot] = 1;
  if (compteurMap.has(mot)) compteurMap.set(mot, compteurMap.get(mot) + 1);
  else compteurMap.set(mot, 1);
}
// ❌ Object contient des propriétés héritées (conflits)
console.log(compteurObjet);
// ✅ Map ne contient que ce qu'on lui ajoute
console.log(compteurMap);

// Type des clés
console.log("\n-- Type des clés");
// ❌ Object est limité aux chaînes
let jeremy = { prenom: "Jérémy", statut: "admin" };
let tom = { prenom: "Tom", statut: "dev" };
let identifiantsObjet = {};
identifiantsObjet[jeremy] = 42;
identifiantsObjet[tom] = 1337;
console.log(identifiantsObjet);
// ✅ Map peut avoir des clés de n'importe quel type (objets, tableaux, sets etc.)
let identifiantsMap = new Map();
identifiantsMap.set(jeremy, 42);
identifiantsMap.set(tom, 1337);
console.log(identifiantsMap);

// 🚨 NOTE IMPORTANTE : objet en clé === Référence !
console.log("\n-- Attention aux références !");
let personne = { prenom: "Jérémy", statut: "admin" };
console.log("jeremy: ", jeremy);
console.log("personne: ", personne);
console.log(identifiantsMap.get(jeremy));
console.log(identifiantsMap.get(personne));

// ✅ Map est optimisé pour les ajouts/suppressions fréquentes et les gros volumes

// Ce qu'il faut retenir est SIMPLE : préférez l'utilisation du type Map au lieu d'Object quand vous devez utiliser un dictionnaire !