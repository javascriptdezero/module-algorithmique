/*
J'ai développé ce petit jeu TRÈS rapidement, PLEIN de choses peuvent être améliorées et il
y a PLEIN de bogues etc. L'objectif était d'avoir un petit support rapidement pour le cours.
Merci de ne pas m'envoyer d'emails pour me dire qu'il y a des bogues ou autre, je le sais !
Je n'ai pas de temps à perdre à améliorer ce petit jeu mais vous pouvez le faire de votre côté 
ce sera un très bon exercice pour réviser votre JavaScript 👍.
*/

let boutonDemarrer = document.querySelector('#demarrer');
let nombreMax = document.querySelector('#nombreMax');
let formulaire = document.querySelector('form');
let listeEssais = document.querySelector('#essais');
let jeu = document.querySelector('#jeu');
let nombreChoisi = document.querySelector('#nombreChoisi');
let messagePret = document.querySelector('#messagePret');
let nombreTentatives = document.querySelector('#nombreTentatives');
let tricher = document.querySelector('#tricher');
let fin = false;

// Nombre aléatoire généré par l'ordinateur
let nombreATrouver;
// Variables utilisées pour le mode triche
let rangMin = 1;
let rangMax = 10;

boutonDemarrer.addEventListener('click', lancerJeu);
tricher.addEventListener('click', appliquerTriche);
formulaire.addEventListener('submit', function(evenement) {
  // On ne veut pas recharger la page quand on soumet un nombre
  evenement.preventDefault();
  // On vérifie le nombre entré par le joueur
  verifierChoix(+nombreChoisi.value);
});

/* Lorsqu'on clique sur le bouton démarrer / relancer une partie */
function lancerJeu(evenement) {
  // Efface la liste précédente des essais
  listeEssais.innerHTML = '';
  // Remise à zéro des indicateurs rangs min et max
  rangMin = 1;
  rangMax = +nombreMax.value;
  // Génère un nombre aléatoire entre 1 et le max indiqué inclus
  // La formule générale est Math.floor(Math.random() * (max - min + 1)) + min mais comme
  // min vaut toujours 1, la partie "- min + 1" vaut toujours 0 donc cela revient à
  // écrire Math.floor(Math.random() * max) + min
  nombreATrouver = Math.floor(Math.random() * +nombreMax.value) + 1;
  // On met à jour le message d'indication que tout est prêt
  const temps = maintenant();
  messagePret.textContent = `Un nombre entre 1 et ${nombreMax.value} (inclus) a été choisi par l'ordinateur à ${temps.heures}:${temps.minutes}:${temps.secondes}.`;
  // On efface le nombre de tentatives du jeu précédent
  nombreTentatives.textContent = "";
  // On affiche la section interactive du jeu si besoin
  jeu.style.display = "block";
  // On indique qu'on peut relancer une partie
  boutonDemarrer.textContent = "Relancer une partie";
  // On focus sur le nombre à entrer
  appliquerTriche();
  nombreChoisi.focus();
  // On active le jeu
  fin = false;
}

function verifierChoix(valeur) {
  if (!valeur || fin) return;
  const li = document.createElement('li');
  if (nombreATrouver < valeur) {
    rangMax = valeur;
    li.innerHTML = `Non ! Il est <strong>inférieur</strong> à ${valeur}`;
  } else if (nombreATrouver > valeur) {
    rangMin = valeur;
    li.innerHTML = `Non ! Il est <strong>supérieur</strong> à ${valeur}`;
  } else {
    li.innerHTML = "Bravo vous avez trouvé 👍";
    fin = true;
  }

  // Mode triche
  if (nombreATrouver !== valeur && tricher.checked) {
    const meilleurChoix = calculerMeilleurChoix();
    nombreChoisi.value = meilleurChoix;
    li.innerHTML += `, ce qui veut dire qu'il est compris entre ${rangMin} et ${rangMax}, le meilleur prochain choix est ${meilleurChoix}`;
  }

  listeEssais.appendChild(li);
  // On met à jour le nombre de tentatives effectuées
  const tentatives = listeEssais.children.length;
  nombreTentatives.textContent = `Vous avez effectué ${tentatives} tentative${tentatives > 1 ? 's': ''}` + '.';
  // On efface le nombre choisi et on focus dessus pour faciliter l'entrée
  // du prochain nombre par le joueur
  if (!tricher.checked) {
    nombreChoisi.value = "";
  }
  nombreChoisi.focus();
}

/* Formatage de l'heure actuelle */
function maintenant() {
  let toutDeSuite = new Date();
  let resultat = {};
  resultat.heures = String(toutDeSuite.getHours()).padStart(2,0);
  resultat.minutes = String(toutDeSuite.getMinutes()).padStart(2,0);
  resultat.secondes = String(toutDeSuite.getSeconds()).padStart(2,0);
  return resultat;
}

/* Mode triche */
function appliquerTriche() {
  if (tricher.checked) {
    const meilleurChoix = calculerMeilleurChoix();
    nombreChoisi.value = meilleurChoix;
  } else {
    nombreChoisi.value = "";
  }
}

// Calcul du "milieu" d'un intervalle de rangMin à rangMax
function calculerMeilleurChoix() {
  return Math.ceil((rangMax + rangMin) / 2);
}