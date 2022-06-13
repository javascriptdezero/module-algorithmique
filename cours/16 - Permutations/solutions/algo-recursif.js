function permutations(tableau) {
  // Cas de base
  if (tableau.length === 1) {
    return [tableau[0]];
  }
  // Cas de récursion
  let solutions = [];
  for (let i = 0; i < tableau.length; i++) {
    // 1(23)
    // tableau = ["1","2","3"] et i = 0
    let autresElements = [...tableau];
    autresElements.splice(i, 1);
    // autresElements = ["2", "3"]
    let listePermutations = permutations(autresElements);
    // listePermutations = (23) = ["23", "32"]
    for (let p = 0; p < listePermutations.length; p++) {
      solutions.push(tableau[i] + listePermutations[p]);
    }
  }
  return solutions;
}

// Appel de la fonction
console.log(permutations(["1", "2", "3"]));