/* Temps d'exécution recherche par dichotomie */

let nombreMax = 1000000;
let nombreATrouver = Math.floor(Math.random() * nombreMax) + 1;
console.log("Nombre :", nombreATrouver);

let tentativesLineaire = trouverNombreLineaire(nombreMax);
console.log("Algorithme linéaire", tentativesLineaire, "tentatives");
let tentativesPseudoAleatoire = trouverNombrePseudoAleatoire(nombreMax);
console.log("Algo pseudo-aléatoire", tentativesPseudoAleatoire, "tentatives");
let tentativeDichotomie = trouverNombreDichotomie(nombreMax);
console.log("Algorithme dichotomie", tentativeDichotomie, "tentatives");

function verifier(nombre) {
  if (nombre === nombreATrouver) {
    return "ok";
  } else if (nombre < nombreATrouver) {
    return "superieur";
  } else {
    return "inferieur";
  }
}

function trouverNombreLineaire(nombreMax) {
  let tentatives = 1;
  for (let choix = 1; choix <= nombreMax; choix++) {
    if (verifier(choix) === "ok") {
      return tentatives;
    } else {
      tentatives++;
    }
  }
}

function trouverNombrePseudoAleatoire(nombreMax) {
  let reponse = "";
  let tentatives = 0;
  let intervalleMin = 1;
  let intervalleMax = nombreMax;
  do {
    // On choisit un nombre aléatoire dans le nouvel intervalle
    let choix = Math.floor(Math.random() * (intervalleMax - intervalleMin + 1)) + intervalleMin;
    reponse = verifier(choix);
    // Exemple : [1 2 3 4 5 6]
    if (reponse === "inferieur") {
      intervalleMax = choix - 1;
    } else if (reponse === "superieur") {
      intervalleMin = choix + 1;
    }
    tentatives++;
  } while (reponse !== "ok");
  return tentatives;
}

function trouverNombreDichotomie(nombreMax) {
  let reponse = "";
  let tentatives = 0;
  let intervalleMin = 1;
  let intervalleMax = nombreMax;
  do {
    // On prend le milieu de l'intervalle pour le couper en 2
    // Exemple : [1 2 3 4 5 6] et [3 4 5 6 7]
    let choix = Math.ceil((intervalleMin + intervalleMax) / 2);
    reponse = verifier(choix);
    if (reponse === "inferieur") {
      intervalleMax = choix - 1;
    } else if (reponse === "superieur") {
      intervalleMin = choix + 1;
    }
    tentatives++;
  } while (reponse !== "ok");
  return tentatives;
}

/* Division successives par 2 des intervalles

1 2 3 4 5 6 7
1 2 3
1 => Réponse pire cas en 3 tentatives

1 2 3 4 5 6 7 9 8 10 11 12 13
1 2 3 4 5 6
1 2 3
1 => Réponse pire cas en 4 tentatives

1 2 3 4 5 6 7 9 8 10 11 12 13 14 15 16 17 18
1 2 3 4 5 6 7 9
1 2 3 4
1 2
1 => Réponse pire cas en 5 tentatives

1 * 2 * 2 * 2 * 2 ...

2 ** X (2^X) >= nombreMax
log2(2**X) >= log2(nombreMax)
X >= log2(nombreMax)

*/