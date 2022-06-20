/* Retourner le Nième terme de la suite de Fibonacci */

// Explication visuelle sur Excalidraw :
// https://excalidraw.com/#json=50eOA03mDu7cPoR81ADK7,LDjgORQCk236Y3Yk8FpTrA

/* Sans mémoïsation... */
function fibonacci(n) {
  // Les 2 premiers termes de la suite sont 1
  if (n === 1 || n === 2) {
    return 1;
  }
  // Le terme suivant est la somme des 2 termes précédents
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Retourne les 100 premiers termes de la suite de Fibonacci
for (let n = 1; n <= 100; n++) {
  console.log(`${n} : ${fibonacci(n)}`);
}

