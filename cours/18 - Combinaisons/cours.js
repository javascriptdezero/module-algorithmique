/* Les combinaisons */

/* Générer les combinaisons "à la main" */

// Combinaisons de 2 éléments dans l'ensemble E = [1,2,3]

1 + combinaisons(1, [2,3])
  12
  13
2 + combinaisons(1, [3])
  23
  
// Combinaisons de k = 3 éléments dans l'ensemble E = [1,2,3,4]

1 + combinaisons(2, [2,3,4])
  12 + combinaisons(1, [3,4])
    123
    124
  13 + combinaisons(1, [4])
    134
2 + combinaisons(2, [3,4])
  23 + combinaisons(1, [4])
    234

// Formule du dénombrement
// n! / k!(n - k)!

// Juste avant, revenons sur les formules précédentes :
// Arrangements : n! / (n - k)!
// Permutations : n!

// La formule sur les permutations est un cas particulier
// de la formule sur les arrangements

// Combinaisons : ce sont les arrangements sans les permutations !

// Combinaisons : Arrangements / Permutations
//         soit : n! / k!(n - k)!
