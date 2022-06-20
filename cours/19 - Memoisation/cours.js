/* Technique d'optimisation : la mémoïsation */

// 🚨 Mémoïsation pas mémorisation !

// Qu'est-ce que c'est ?
// C'est une technique d'optimisation de la vitesse d'exécution d'une fonction. Elle consiste à mémoriser le résultat d'une fonction pour le renvoyer directement lors d'un prochain appel identique de cette fonction, ceci pour éviter de recalculer à nouveau ce résultat.

// Exemple avec du pseudo-code (fichier algo.pseudo)

// Compromis : complexité spatiale (en espace) VS complexité temporelle

// 🚨 Ne fonctionne qu'avec les fonctions pures !
// mêmes entrées => fonction pure => toujours les mêmes sorties
// fonction(a,b,c) => résultat toujours identique

// Exemples :
// - Calculer le Nième terme de la suite de Fibonacci
// - Puzzle classique CodinGame nécessitant la mémoisation : 1D Spreadsheet
//      => https://www.codingame.com/ide/puzzle/1d-spreadsheet