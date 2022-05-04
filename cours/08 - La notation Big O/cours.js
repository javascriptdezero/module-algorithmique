/* La notation Big O */

// La notation grand O
// O(n)

// Comment calculer une complexité algorithmique ?
/* Sur du pseudo-code :
fonction maFonction(tableauNombres)
  somme = 0                                   // 1
  pour i de 0 a tableauNombres.longueur - 1   // N itérations
    somme = somme + tableauNombres[i]         // 2
  retourner somme                             // 1
*/

// TOTAL : 2 * N + 2 = 2N + 2

// Sur du JavaScript :
function maFonction(tableauNombres) {
  let somme = 0;                                        // 1
  for (let i = 0; i < tableauNombres.length; i++) {     // 1 + (N+1) + (N+1)
    somme = somme + i;                                  // 2
  }  
  return somme                                          // 1
}

// TOTAL : 1 + 1 + 1 + N+1 + N+1 + 2N = 4 * N + 5
// Mais... On se moque des détails !
// => On supprime les constantes dans les multiplications et les
// additions, on ne garde que les termes dominants
// => TOTAL : O(N) => O(n)

// Quels sont les termes dominants ?
// 1. Ceux qui sont liés à N (quand il y en a)
// 2. Ceux qui valent la plus grande valeur pour un N fixe après
// avoir supprimé les constantes
// Exemple : 3 * N^3 + 2 * N^2 + 8 * N + 6
// => N^3 + N^2 + N
// => N^3
// => O(N^3) => O(n^3)

// 🚨 Vous n'avez pas à retenir tout ça !
/* Quelles sont les complexités les plus courantes ? */
// Ici en JavaScript mais normalement en pseudo-code

// Par ordre du plus performant au moins performant

// 1. Complexité constante O(1)
function sommeDesEntiersDe1AN(N) {
  return N * (N + 1) / 2; // 3 opérations
}
// => 3
// => O(3) => O(1)

// 2. Complexité logarithmique O(log(n)), O(ln(n))
// cf Algorithme de recherche dichotomique
function trouverNombreDichotomie(nombreMax) {
  //... cf cours.js dossier 07 - Recherche dichotomique
}
// => O(log2(n))

// 3. Complexité linéaire O(n)
function trouverPlusPetitNombre(tableau) {
  let min = Number.POSITIVE_INFINITY;         // 1
  for (let i = 0; i < tableau.length; i++) {  // 1 + (N+1) + (N+1)
    if (tableau[i] < min) {                   // 1
      min = tableau[i];                       // 1
    }
  }
  return min;                                 // 1
}
// 🚨 On ne rentre pas dans les détails du if
// => O(1 + 1 + 2 * (N+1) + N * 2 + 1) = O(3 + 2N + 2 + 2N) = O(4N + 5)
// => O(N) => O(n)

// 4. Complexité log-linéaire O(n * log(n)), O(n * ln(n))
// cf Algorithme de recherche dichotomique effectué n fois sur plusieurs tableaux
function trouverNombreDichotomiePlusieursFois(tableauDeNombresMax) {
  for (let i = 0; i < tableauDeNombresMax.length; i++) {  // 1 + (N+1) + (N+1)
    return trouverNombreDichotomie(nombreMax);            // log2(N)
  }
}
// => O(1 + 2 * (N+1) + N * log2(N))
// => O(2N + 3 + N * log2(N))
// => O(N + N * log2(N)) => O(N * log(N)) => O(n * log(n))

// 5. Complexité quadratique : O(n ** 2) (aussi noté O(n^2))
// Une boucle dans une boucle (boucle imbriquée)
// sudoku = [
//  [4,3,1,6,7,9,5,2,8],
//  ...
//  [2,9,6,7,8,5,4,1,3],
//]
function parcoursGrille2D(sudoku) {
  for (let ligne = 0; ligne < sudoku.length; ligne++) {                 // 1 + 2 * (N+1)
    for (let colonne = 0; colonne < sudoku[ligne].length; colonne++) {  // 1 + 2 * (N+1)
      console.log(sudoku[ligne][colonne]);                              // 1
    }
  }
}
// => O((1 + 2 * (N+1)) + N * (1 + 2 * (N+1) + N * 1))
// => O((2N + 3) + N * (2N + 3) + N)
// => O(2N + 3 + 2N^2 + 3N + N)
// => O(2N^2 + 6N + 3)
// => O(N^2 + N)
// => O(N^2) => O(n^2)

// 6. Complexité cubique : O(n ** 3) (aussi noté O(n^3))
// Une boucle dans une boucle dans une boucle...
function parcoursCube3D(cube) {
  for (let ligne = 0; ligne < cube.length; ligne++) {                                        // 1 + 2 * (N+1)
    for (let colonne = 0; colonne < cube[ligne].length; colonne++) {                         // 1 + 2 * (N+1)
      for (let profondeur = 0; profondeur < cube[ligne][colonne].length; profondeur++) {     // 1 + 2 * (N+1)
        console.log(cube[ligne][colonne][profondeur]);                                       // 1
      }
    }
  }
}
// => O((1 + 2 * (N+1)) + N * (1 + 2 * (N+1) + N * (1 + 2 * (N+1) + N * 1))
// => O(n^3)
// FORMULE GENERALE pour les boucles imbriquées : n ** (nombre de boucles) ou n^(nombre de boucles)

// Et pour des algorithmes plus complexes ?
function algorithmeLongEtComplexe(tableauDeNombres) {
  // ... 12 opérations
  for (let i = 0; i < tableauDeNombresMax.length; i++) {  // 1 + 2 * (N+1)
    // ...
  }
  // ... 8 opérations
  for (let ligne = 0; ligne < sudoku.length; ligne++) {                 // 1 + 2 * (N+1)
    for (let colonne = 0; colonne < sudoku[ligne].length; colonne++) {  // 1 + 2 * (N+1)
      //...
    }
  }
  // ... 25 opérations
}

// TOTAL ?
// => On fait la somme des complexités et on prend la plus élevée
// => O(n) + O(n^2)
// => O(n^2)