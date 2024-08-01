const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');
const image = document.querySelector('.banner-img');
const imageText = document.querySelector('#banner p');
let indexImageSelected = 0;
const imageCount = slides.length;

for (i = 0; i < imageCount; i++) {
    if (i == indexImageSelected) {
        dots.innerHTML += '<span id="dot_' + i + '" class="dot dot_selected"></span>';
    } else {
        dots.innerHTML += '<span id="dot_' + i + '" class="dot"></span>';
    }

}

// Event listener pour la flèche gauche
arrowLeft.addEventListener('click', function () {
    console.log('Flèche gauche cliquée');
    moveSlideByStep(-1);

});

// Event listener pour la flèche droite
arrowRight.addEventListener('click', function () {
    console.log('Flèche droite cliquée');
    moveSlideByStep(1);
});

// Fonction qui change l'index par un pas -1 ou +1 en vérifiant le débordement des valeurs d'index
// et en changeant la source de l'image et le text du paragraphe associé
function moveSlideByStep(step) {
    console.log('Slide moved by : ' + step);
    // Enlever la class "dot_selected" de l'image courante
    document.getElementById("dot_" + indexImageSelected).classList.remove("dot_selected");
    // changer l'index, en ajoutant un pas de 1 ou -1 selon la flèche cliquée
    indexImageSelected += step;
    // Vérifier le débordement des index entre 0 et la taille max du tableau des images
    if (indexImageSelected > imageCount - 1) {
        indexImageSelected = 0;
    } else if (indexImageSelected < 0) {
        indexImageSelected = imageCount - 1;
    }
    // Changer l'image
    image.src = "./assets/images/slideshow/" + slides[indexImageSelected].image;
    // Changer le texte du paragraphe
    imageText.innerHTML = slides[indexImageSelected].tagLine;
    // Enlever la class "dot_selected" de l'image séléctionnée
    document.getElementById("dot_" + indexImageSelected).classList.add("dot_selected");
}


