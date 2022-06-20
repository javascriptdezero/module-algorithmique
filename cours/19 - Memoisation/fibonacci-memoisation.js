/* Retourner le Nième terme de la suite de Fibonacci */

// Explication visuelle sur Excalidraw :
// https://excalidraw.com/#json=50eOA03mDu7cPoR81ADK7,LDjgORQCk236Y3Yk8FpTrA

/* Sans mémoïsation... */
let resultats = new Map();
function fibonacci(n) {
  // Si on a déjà calculé le résultat précédemment, on le renvoie
  if (resultats.has(n)) {
    return resultats.get(n);
  }
  // Les 2 premiers termes de la suite sont 1
  let resultat;
  if (n === 1 || n === 2) {
    resultat = 1;
  } else {
    // Le terme suivant est la somme des 2 termes précédents
    resultat = fibonacci(n - 1) + fibonacci(n - 2);
  }
  // Stocker le résultat dans le dictionnaire
  resultats.set(n, resultat);
  return resultat;
}

// Retourne les 100 premiers termes de la suite de Fibonacci
for (let n = 1; n <= 100; n++) {
  console.log(`${n} : ${fibonacci(n)}`);
}

