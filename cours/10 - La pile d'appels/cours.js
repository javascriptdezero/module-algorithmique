/* La pile d'appels */

function fonction1() {
  console.log("Début fonction 1");
  fonction2();
  console.log("Fin fonction 1");
}

function fonction2() {
  console.log("Début fonction 2");
  fonction3();
  console.log("Fin fonction 2");
}

function fonction3() {
  console.log("Début fonction 3");
  fonction4();
  console.log("Fin fonction 3");
}

function fonction4() {
  console.log("Début fonction 4");
  console.log("Fin fonction 4");
}

fonction1();

function recursive() {
  console.log("Début de la fonction récursive");
  recursive();
  console.log("Fin de la fonction récursive");
}
recursive();