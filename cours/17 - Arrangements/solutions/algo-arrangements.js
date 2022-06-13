function arrangements(k, tableau) {
  if (k === 1) {
    // Copie
    return [...tableau];
  }
  let solutions = [];
  // Cas de récursion
  for (let i = 0; i < tableau.length; i++) {
    // tableau = [1,2,3,4]
    let sousEnsemble = [...tableau];
    sousEnsemble.splice(i, 1);
    // sousEnsemble = [2,3,4] lorsque i = 0
    let listeArrangements = arrangements(k - 1, sousEnsemble);
    for (let arrangement of listeArrangements) {
      solutions.push(tableau[i] + arrangement);
    }
  }
  return solutions;
}

console.log(arrangements(3, ["1","2","3","4"]));