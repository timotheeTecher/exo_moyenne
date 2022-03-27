const moyenneContainer = document.querySelector(".moyenne"); //On récupère la div ayant la classe ".moyenne" et on la stocke dans la variable moyenneContainer
const btnMoyenne = document.querySelector(".btn-moyenne"); //On récupère la div ayant la classe ".btn-moyenne" et on la stocke dans la variable btnMoyenne

//Ceci est une fonction
const calculMoyenne = (notes) => {
  let somme = 0;
  //Boucle permettant de faire la somme de toutes les valeurs du tableau
  for (let i = 0; i < notes.length; i++) {
    somme += notes[i]; 
  }
  let moyenne = somme / notes.length; //On divise la somme par le nombre de notes en récupérant la taille du tableau 
  return moyenne; //On retourne la moyenne
}

//Ceci est un évènement déclenché lorsque l'utilisateur clique sur le bouton 
btnMoyenne.addEventListener("click", () => {
  let notes = []; //Tableau vide

  //On fait une boucle permettant de remplir le tableau aléatoirement 
  for (let i = 0; i < 5; i++) {
    let note = Math.floor(Math.random() * 21); //On génère un nombre aléatoirement entre 0 et 20
    notes[i] = note; //On ajoute la "note" générée aléatoirement dans le tableau "notes"
  }
  
  let moyenne = calculMoyenne(notes); //On calcule la moyenne des notes grâce à la fonction calculMoyenne() et on stocke la moyenne dans la variable moyenne
  let mention = "Mention "; //On initialise la variable mention
  
  if (moyenne >= 16) { //Si la moyenne est supérieure ou égale à 16 alors...
    mention += "Très bien !"; 
  } else if (moyenne >= 14 && moyenne < 16) { //Sinon si la moyenne est comprise entre 14 et 16 alors...
    mention += "Bien !"; //.
  } else if (moyenne >= 12 && moyenne < 14) { //Sinon si la moyenne est comprise entre 12 et 14 alors...
    mention += "Assez bien !";
  } else if (moyenne >= 10 && moyenne < 12) { //Sinon si la moyenne est comprise entre 10 et 12 alors...
    mention += "Admis t'es pas ouf en vrai !";
  } else { //Sinon (là ça veut dire que la moyenne est inférieure à 10)
    mention += "T'es vraiment qu'une merde !";
  }
  
  //On affiche la moyenne et la mention dans le html
  moyenneContainer.innerHTML = `<h3>${moyenne}</h3>
  <h4>${mention}</h4>`;
});

// Math.floor() => Arrondir au nombre inférieur
// Math.ceil() => Arrondir au nombre supérieur
// Math.random() => Générer un nombre aléatoirement entre 0 et 0.9999999999999 