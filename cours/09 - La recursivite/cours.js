/* Introduction à la notion de récursivité */

/* Définition générale
La récursivité c’est le fait pour un élément d’être constitué en partie de lui-même ou d’une structure identique à sa structure de base.
*/

// cf image poupée russe

// Exemple de structure de données récursive
// => Arborescence de fichiers
let dossier = [
  { type: "fichier", nom: "sommaire.txt", contenu: "..." },
  { type: "fichier", nom: "chapitre1.txt", contenu: "..." },
  { type: "fichier", nom: "chapitre2.txt", contenu: "..." },
  { type: "dossier", nom: "sources",
    contenu: [
      { type: "fichier", nom: "internet.txt", contenu: "..." },
      { type: "fichier", nom: "livres.txt", contenu: "..." },
      { type: "fichier", nom: "videos.txt", contenu: "..." },
      { type: "dossier", nom: "archives",
        contenu: [
          { type: "fichier", nom: "liste-archives.txt", contenu: "..." },
          { type: "dossier", nom: "2019", contenu: [ { /* Sous-dossier ...*/ } ] },
          { type: "dossier", nom: "2020", contenu: [ { /* Sous-dossier ...*/ } ] },
          { type: "dossier", nom: "2021", contenu: [ { /* Sous-dossier ...*/ } ] },
        ]
      }
    ]
  },
];

// Qu'est-ce qu'une fonction récursive ?
// C'est une fonction qui s'appelle elle-même !

// Exemple : le compte à rebours jusqu'à zéro
function afficher(nombre) {
  if (nombre < 0) {     // Cas de base
    return;             // Cas de base
  }                     // Cas de base
  console.log(nombre);  // Cas de propagation / récursion
  afficher(nombre - 1); // Cas de propagation / récursion
}
afficher(5);            // Appel initial de la fonction

// Et s'il n'y a pas de cas de base ?
// Erreur Maximum call stack size exceeded => Taille maximale de la pile d'appel dépassée !