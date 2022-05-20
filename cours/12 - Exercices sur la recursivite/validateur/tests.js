/*
 * N'hésitez pas à jeter un oeil 👁 sur ce code et à me prévenir
 * si vous rencontrez un bogue !
 *
 * Vous pouvez me joindre par email sur jeremy@javascriptdezero.com
 *
 * Merci 👍
 */

const tests = {};

function ajouterTest(idExercice, nomFonction, {
  entrees = null,
  descriptionEntrees = null,
  sortie = null,
}) {
  if (!tests[nomFonction]) {
    tests[nomFonction] = [];
  }
  tests[nomFonction].push({
    idExercice,
    entrees,
    descriptionEntrees,
    sortie,
  });
}

// Ajout des tests des exos

// Exercice 0
let exerciceId = 0;
let descriptionEntrees = ["N"];
ajouterTest(exerciceId, "sommeJusquaN", {
  entrees: [1],
  descriptionEntrees,
  sortie: 1,
});
ajouterTest(exerciceId, "sommeJusquaN", {
  entrees: [3],
  descriptionEntrees,
  sortie: 6,
});
ajouterTest(exerciceId, "sommeJusquaN", {
  entrees: [10],
  descriptionEntrees,
  sortie: 55,
});
ajouterTest(exerciceId, "sommeJusquaN", {
  entrees: [42],
  descriptionEntrees,
  sortie: 903,
});
ajouterTest(exerciceId, "sommeJusquaN", {
  entrees: [100],
  descriptionEntrees,
  sortie: 5050,
});

// Exercice 1
exerciceId++;
descriptionEntrees = ["nombre", "p"];
ajouterTest(exerciceId, "puissance", {
  entrees: [5, 0],
  descriptionEntrees,
  sortie: 1,
});
ajouterTest(exerciceId, "puissance", {
  entrees: [5, 1],
  descriptionEntrees,
  sortie: 5,
});
ajouterTest(exerciceId, "puissance", {
  entrees: [5, 2],
  descriptionEntrees,
  sortie: 25,
});
ajouterTest(exerciceId, "puissance", {
  entrees: [5, 4],
  descriptionEntrees,
  sortie: 625,
});
ajouterTest(exerciceId, "puissance", {
  entrees: [42, 2],
  descriptionEntrees,
  sortie: 1764,
});
ajouterTest(exerciceId, "puissance", {
  entrees: [2, 10],
  descriptionEntrees,
  sortie: 1024,
});

// Exercice 2
exerciceId++;
descriptionEntrees = ["nombre"];
ajouterTest(exerciceId, "factorielle", {
  entrees: [1],
  descriptionEntrees,
  sortie: 1,
});
ajouterTest(exerciceId, "factorielle", {
  entrees: [5],
  descriptionEntrees,
  sortie: 120,
});
ajouterTest(exerciceId, "factorielle", {
  entrees: [7],
  descriptionEntrees,
  sortie: 5040,
});
ajouterTest(exerciceId, "factorielle", {
  entrees: [8],
  descriptionEntrees,
  sortie: 40320,
});
ajouterTest(exerciceId, "factorielle", {
  entrees: [10],
  descriptionEntrees,
  sortie: 3628800,
});

// Exercice 3
exerciceId++;
descriptionEntrees = ["N"];
ajouterTest(exerciceId, "fibonacci", {
  entrees: [0],
  descriptionEntrees,
  sortie: 0,
});
ajouterTest(exerciceId, "fibonacci", {
  entrees: [1],
  descriptionEntrees,
  sortie: 1,
});
ajouterTest(exerciceId, "fibonacci", {
  entrees: [2],
  descriptionEntrees,
  sortie: 1,
});
ajouterTest(exerciceId, "fibonacci", {
  entrees: [3],
  descriptionEntrees,
  sortie: 2,
});
ajouterTest(exerciceId, "fibonacci", {
  entrees: [4],
  descriptionEntrees,
  sortie: 3,
});
ajouterTest(exerciceId, "fibonacci", {
  entrees: [5],
  descriptionEntrees,
  sortie: 5,
});
ajouterTest(exerciceId, "fibonacci", {
  entrees: [6],
  descriptionEntrees,
  sortie: 8,
});
ajouterTest(exerciceId, "fibonacci", {
  entrees: [13],
  descriptionEntrees,
  sortie: 233,
});

// Exercice 4
exerciceId++;
descriptionEntrees = ["chaine"];
ajouterTest(exerciceId, "retourner", {
  entrees: ["JavaScript"],
  descriptionEntrees,
  sortie: "tpircSavaJ",
});
ajouterTest(exerciceId, "retourner", {
  entrees: ["Bonjour"],
  descriptionEntrees,
  sortie: "ruojnoB",
});

// Exercice 5
exerciceId++;
descriptionEntrees = ["liste", "nombreATrouver", "posDebut", "posFin"];
let liste = [0,1,3,6,8,12,45,59,89,100];
for (let pos = 0; pos < liste.length; pos++) {
  let nombreATrouver = liste[pos];
  ajouterTest(exerciceId, "dichotomie", {
    entrees: [liste, nombreATrouver, 0, liste.length - 1],
    descriptionEntrees,
    sortie: liste.indexOf(nombreATrouver),
  });
}

lancerTousLesTests();

// Code qui vient tester tous les exercices remplis par l'étudiant
function lancerTousLesTests() {
  Object.keys(tests).forEach((nomFonction) => {
    // Si la fonction a été déclarée par l'étudiant, on teste son code
    if (typeof window[nomFonction] !== "undefined") {
      let continuerTests = true;
      tests[nomFonction].forEach((test, numeroTest, listeTests) => {
        if (continuerTests) {
          // Sauvegarde des entrées originales qui peuvent être modifiées par l'étudiant à l'intérieur
          // de la fonction. Ça permet d'afficher les entrées d'origine dans le message d'erreur.
          const entreesOriginales = test.entrees.map(dupliquerValeur);
          
          // Exécute la fonction de l'étudiant
          let valeurRetour;
          try {
            valeurRetour = (entreesOriginales === null) ? window[nomFonction]() : window[nomFonction](...entreesOriginales);
          } catch (error) {
            // On affiche le message complet à l'étudiant
            console.error(error.stack);
            valeurRecue = error;
            const valeurAttendue = construireMessageErreur(test, numeroTest, listeTests.length);
            enonces.definirEchec(enonces.liste[test.idExercice], { valeurRecue, valeurAttendue });
            continuerTests = false;
            return;
          }

          let valeursIdentiques = comparerSimplement(valeurRetour, test.sortie);

          if (valeursIdentiques) {
            let bonneReponse = formaterObjet(test.sortie);
            enonces.definirSucces(enonces.liste[test.idExercice], bonneReponse);
          } else {
            const valeurRecue = formaterObjet(valeurRetour);
            const valeurAttendue = construireMessageErreur(test, numeroTest, listeTests.length);
            enonces.definirEchec(enonces.liste[test.idExercice], { valeurRecue, valeurAttendue });

            continuerTests = false;
          }
        }
      });
    }
  });
}

/* Duplique superficiellement (shallow copy) un objet ou tableau */
function dupliquerValeur(valeur) {
  if (Array.isArray(valeur)) {
    // On renvoie un nouveau tableau identique
    return [...valeur];
  } else if (typeof valeur === "object") {
    // On renvoie un nouvel objet identique
    return {...valeur};
  } else {
    // On renvoie la valeur primitive
    return valeur;
  }
}

function formaterObjet(valeur) {
  if (typeof valeur === "object") {
    return JSON.stringify(valeur);
  }
  if (typeof valeur === "string") {
    return `"${valeur}"`;
  }
  return valeur;
}

function comparerSimplement(valeur1, valeur2) {
  if (typeof valeur1 !== typeof valeur2) return false;
  // Gère le cas où on attend NaN en sortie
  if (Number.isNaN(valeur2)) return Number.isNaN(valeur1);

  if (Array.isArray(valeur1) && Array.isArray(valeur2)) {
    // Au préalable on vérifie qu'ils ont le même nombre d'éléments
    if (valeur1.length !== valeur2.length) return false;
    // Comparaison, élément par élément
    for (let i = 0, l = valeur1.length; i < l; i++) {
      if (valeur1[i] !== valeur2[i]) return false;
    }
    return true;
  } else {
    return valeur1 === valeur2;
  }
}

function construireMessageErreur(test, numeroTest, nombreDeTests) {
  let messageErreur = formaterObjet(test.sortie);
  messageErreur += '\n';

  if (test.descriptionEntrees !== null) {
    if (test.descriptionEntrees.length > 1) {
      messageErreur += '\n→ pour les arguments ';
      let listeDescriptionValeur = [];
      test.descriptionEntrees.forEach((description, index) => {
        listeDescriptionValeur.push(formateArgumentEtValeurHtml(description, test.entrees[index]));
      });
      messageErreur += listeDescriptionValeur.join(" et ");
    } else {
      messageErreur += `\n→ pour l'argument ${formateArgumentEtValeurHtml(test.descriptionEntrees[0], test.entrees[0])}`;
    }
    let pourcentageReussi = 100 * numeroTest / nombreDeTests;
    if (!Number.isInteger(pourcentageReussi)) {
      pourcentageReussi = pourcentageReussi.toFixed(2);
    }
    messageErreur += `\n\n<p class="indication-tests-reussis">Tests réussis : <strong>${pourcentageReussi}%</strong></p>`;
  }
  return messageErreur;
}

function formateArgumentEtValeurHtml(nomArgument, valeur) {
  return `<strong>${nomArgument}</strong> = <code>${formaterObjet(valeur)}</code>`;
}