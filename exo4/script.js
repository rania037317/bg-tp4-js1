"use strict"; // Mode strict (slide 52)
// Catalogue de 5 produits : tableau d'objets (slides 40 et 41)
const catalogue = [
    { nom: 'Laptop',  prix: 44000, quantite: 5 },
    { nom: 'Souris',  prix: 2500,  quantite: 40 },
    { nom: 'Clavier', prix: 6000,  quantite: 20 },
    { nom: 'Ecran',   prix: 30000, quantite: 8 },
    { nom: 'Casque',  prix: 4000, quantite: 15 }
];

function f1(){
     // Objet avec propriétés (slide 40)
    const produit = { nom: 'Webcam', prix: 80, quantite: 12 };

      // Opérateur arithmétique * (slide 42) + accès aux propriétés (slide 40)
    const valeur = produit.prix * produit.quantite;

    // Affichage avec console.log (slide 34)
    console.log("Valeur du stock de " + produit.nom + " : " + valeur);
}
function f2() {
    // reduce : somme des prix (slide 39), division par la taille du tableau
    const prixMoyen = catalogue.reduce((acc, p) => acc + p.prix, 0) / catalogue.length;
    console.log("Prix moyen : " + prixMoyen);

    // filter : sélectionne certains éléments (slide 39)
    const chers = catalogue.filter(p => p.prix > prixMoyen);

    // Boucle for..of (slide 45)
    for (const produit of chers) {
        console.log(produit.nom + " : " + produit.prix);
    }
}

function f3(){
     // reduce : acc = accumulateur initialisé à 0, p = produit courant (slide 39)
    const totalArticles = catalogue.reduce((acc, p) => acc + p.quantite, 0);
    const valeurGlobale = catalogue.reduce((acc, p) => acc + p.prix * p.quantite, 0);

    console.log("Nombre total d'articles : " + totalArticles);
    console.log("Valeur globale du stock : " + valeurGlobale);
}

// Fonction avec paramètre et retour (slide 46)
function valeurStock(produit) {
    return produit.prix * produit.quantite;
}
function f4(){
       for (const produit of catalogue) {
        console.log(produit.nom + " : " + valeurStock(produit));
    }
}
function appliquer(tableau, callback) {
    for (const element of tableau) { // Boucle for..of (slide 45)
        callback(element);           // Appel du callback pour chaque produit
    }
}

function f5() {
    // Callback 1 : afficher les noms (fonction fléchée, slide 47)
    appliquer(catalogue, produit => console.log(produit.nom));

    // Callback 2 : afficher les prix (fonction fléchée, slide 47)
    appliquer(catalogue, produit => console.log(produit.prix));
}

