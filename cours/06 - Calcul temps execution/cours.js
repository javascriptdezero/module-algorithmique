/* Calcul de vitesse d'exécution d'un algorithme */

function calculerSommeDe1aN(N) {        // Nombre d'opérations
  let somme = 0;                        //
  for (let i = 1; i <= N; i++) {        //
    somme = somme + i;                  //
  }
  return somme;                         //
}

function calculerSommeDe1aNOptimal(N) { // Nombre d'opérations
  return N * (N + 1) / 2;               // 4
}

// (Séparateur numérique "_" depuis ES12)
const N = 100_000_000; // Erreur de précision à 1 Md

// Exécution algorithme optimal
let maintenant = Date.now();
let res = calculerSommeDe1aNOptimal(N);
let tempsOptimal = Date.now() - maintenant;
console.log("Optimal :", res, "(" + tempsOptimal, "ms)");

// Exécution algorithme naïf
maintenant = Date.now();
res = calculerSommeDe1aN(N);
let tempsNaif = Date.now() - maintenant;
console.log("   Naif :", res, "(" + tempsNaif, "ms)");

// Prochain exercice : recherche par dichotomie