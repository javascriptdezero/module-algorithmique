function combinaisons(k, tableau) {
  if (k === 1) {
    return [...tableau];
  }
  let solutions = [];
  for (let i = 0; i <= tableau.length - k; i++) {
    // tableau = [1,2,3,4]
    let sousEnsemble = tableau.slice(i + 1);
    // sousEnsemble = [2,3,4]
    let listeCombinaisons = combinaisons(k - 1, sousEnsemble);
    // listeCombinaisons = ["23","24","34"]
    for (let combinaison of listeCombinaisons) {
      solutions.push(tableau[i] + combinaison);
    }
  }
  return solutions;
}

console.log(combinaisons(3, ["1","2","3","4","5"]));
