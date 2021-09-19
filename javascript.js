const choixPossible = ["pierre", "papier", "ciseaux"];

let scoreJoueur1 = 0;
let scoreOrdinateur = 0;
let resultat = "";

// Function shifumi
function shifumi(e) {
    const choixJoueur = choixPossible.indexOf(e.target.innerHTML)
    const choixOrdinateur = Math.floor(Math.random() * choixPossible.length);

if (choixJoueur == choixOrdinateur) {
    resultat = "Egalité !";
}
else if ((choixJoueur == 1 && choixOrdinateur == 0 ) || (choixJoueur == 2 && choixOrdinateur == 1 ) || (choixJoueur == 0 && choixOrdinateur == 2 )) {
    scoreJoueur1++;
    resultat = "Vous avez gagné !"
}
else {
    scoreOrdinateur++;
    resultat = "Vous avez perdu !";
}
score.innerHTML = `Scores :<br>joueur[${scoreJoueur1}] - ordinateur[${scoreOrdinateur}]`;
infos.innerHTML = `Vous avez joué : <strong>${e.target.innerHTML}</strong><br>L'ordinateur a joué : <strong>${choixPossible[choixOrdinateur]}</strong><br><strong>${resultat}</strong>`;
};

// Creation du <main> 
const newMain = document.createElement("main");

// Creation <h1>
const newh1 = document.createElement('h1');
newh1.innerHTML = "Pierre Papier Ciseaux"

// Creation des 3 <div>
const newDivScore = document.createElement("div");
const newDivBtn = document.createElement("div");
newDivBtn.classList.add("div-btn")
const newDivInfos = document.createElement("div");

// Creation <p> pour les scores + Deplacement dans newDivScores
let score = document.createElement("p");
score.classList.add("scores");
score.innerHTML = "Scores :<br>joueur[0] - ordinateur[0]";
newDivScore.appendChild(score);

// Creation des <button> + Creation [addEventListener] + Deplacement dans newDivBtn
for (let i = 0; i < choixPossible.length; i++) {
    const newBtn = document.createElement("button");
    newBtn.innerHTML = `${choixPossible[i]}`;
    newBtn.classList.add("btn");
    newBtn.addEventListener('click', shifumi);
    
    newDivBtn.appendChild(newBtn);
};

// Creation <p> pour infos destinées a l'utilisateur
let infos = document.createElement("p");
infos.classList.add("infos");
infos.innerHTML = `Vous avez joué :<br>L'ordinateur a joué :`;
newDivInfos.appendChild(infos);

// Deplacement des 3 newDiv dans newMain
newMain.appendChild(newDivScore);
newMain.appendChild(newDivBtn);
newMain.appendChild(newDivInfos);

// Deplacement de newMain dans <body>
document.body.insertBefore(newMain, document.querySelector("footer"));

// Deplacement de newH1 dans <header>
document.querySelector("header").appendChild(newh1);