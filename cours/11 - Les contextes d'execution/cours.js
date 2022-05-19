/* Les contextes d'exécution */
// Stack frame = contexte d'exécution

function fonction1(param1) {
  let var1 = 12;
  let somme = param1 + var1;
  console.log("Début fonction 1");
  fonction2(2);
  console.log("Fin fonction 1, somme vaut", somme);
}

function fonction2(param2) {
  let var2 = 43;
  let mult = param2 * var2;
  console.log("Début fonction 2");
  fonction3(3);
  console.log("Fin fonction 2, mult vaut", mult);
}

function fonction3(param3) {
  console.log("Début fonction 3");
  console.log("Fin fonction 3, param3 vaut", param3);
}

// fonction1(1);

// 🚨 Les variables sont locales au contexte d'exécution
function fonction10(nombre) {
  let valeur = 12;
  let somme = nombre + valeur;
  console.log("Début fonction 10");
  fonction20(2);
  console.log("Fin fonction 10, somme vaut", somme);
}

function fonction20(nombre) {
  let valeur = 43;
  let mult = nombre * valeur;
  console.log("Début fonction 20");
  fonction30(3);
  console.log("Fin fonction 20, mult vaut", mult);
}

function fonction30(nombre) {
  console.log("Début fonction 30");
  console.log("Fin fonction 30, nombre vaut", nombre);
}

// fonction10(1);

// Exemple : le compte à rebours jusqu'à zéro
function afficher(nombre) {
  if (nombre < 0) {     // Cas de base
    return;             // Cas de base
  }                     // Cas de base
  console.log(nombre);  // Cas de propagation / récursion
  afficher(nombre - 1); // Cas de propagation / récursion
  console.log(`afficher(${nombre - 1}) terminée`);
}
afficher(5);            // Appel initial de la fonction

// 🚨 Cas particulier : les objets (comme d'habitude !)
// Passage par valeur VS passage par référence
function modifierObjet(valeur, objet) {
  if (objet.nombre <= 0) {
    return;
  }
  objet.nombre = valeur;
  console.log("objet modifié:", objet);
  modifierObjet(valeur - 1, objet);
  console.log(`reference(${valeur - 1}`, objet, "terminée");
}
modifierObjet(3, { nombre: 42 });