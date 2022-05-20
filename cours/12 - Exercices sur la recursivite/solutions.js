/* Solutions des exercices sur la récursivité */

// Exercice 0 : somme des nombres de 1 à N
function sommeJusquaN(N) {
  if (N === 1) { // Cas de base
    return 1;
  } else { // Cas de propagation
    return N + sommeJusquaN(N - 1);
  }
}

// Exercice 1 : nombre à la puissance p
function puissance(nombre, p) {
  if (p === 0) { // Cas de base
    return 1;
  } else { // Cas de propagation
    return nombre * puissance(nombre, p - 1);
  }
}

// Exercice 2 : factorielle
function factorielle(nombre) {
  if (nombre === 1) { // Cas de base
    return 1;
  } else { // Cas de propagation
    // L'astuce consiste à utiliser le fait que N! = N * (N - 1)!
    // Par exemple 5! = 5 * 4 * 3 * 2 * 1 = 5 * 4! (car 4! = 4 * 3 * 2 * 1)
    return nombre * factorielle(nombre - 1);
  }
}

// Exercice 3 : fibonacci
function fibonacci(N) {
  // Cas de base
  if (N === 0) {
    return 0;
  }
  if (N === 1) {
    return 1;
  }
  // Cas de propagation
  // On retourne la somme des 2 nombres précédents
  return fibonacci(N - 2) + fibonacci(N - 1);
}

// Exercice 4 : retourner
function retourner(chaine) {
  // Si ma chaine n'est plus qu'une seule lettre, il n'y a rien à faire car
  // on ne peut pas retourner une seule lettre
  if (chaine.length === 1) { // Cas de base
    return chaine;
  } else { // Cas de propagation
    // Sinon on concatène la dernière lettre avec le reste du mot retourné sans
    // cette dernière lettre.
    // Exemple avec "bonjour" => "r" + retourner("bonjou"), notez qu'il manque le "r" final !
    return chaine[chaine.length - 1] + retourner(chaine.slice(0, -1));
    // On aurait pu aussi faire :
    // return chaine.slice(-1) + retourner(chaine.slice(0, -1));
  }
}

// Exercice 5 : dichotomie
function dichotomie(liste, nombreATrouver, posDebut, posFin) {
  // Si la position de début égale à celle de la fin c'est qu'il ne reste
  // plus qu'un seul item, celui qu'on cherche ! Donc on retourne cette position là.
  if (posDebut === posFin) return posDebut; // Cas de base
  else {
    // On coupe la liste en deux
    let milieu = Math.floor(posDebut + (posFin - posDebut) / 2);
    // Si l'élément est celui qu'on cherche, on retourne sa position
    if (liste[milieu] === nombreATrouver) {
      return milieu;
    } else {
      // Sinon on réduit la position de début ou de fin comme il faut pour chercher à
      // nouveau dans une plus petite partie de la liste
      if (liste[milieu] > nombreATrouver) {
        return dichotomie(liste, nombreATrouver, posDebut, milieu - 1);
      } else {
        return dichotomie(liste, nombreATrouver, milieu + 1, posFin);
      }
    }
  }
}