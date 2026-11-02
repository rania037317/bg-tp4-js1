"use strict"; // Mode strict (slide 52)

// f1: tableau de chaînes de caractères (slide 39)
function fn1() {
    const etudiants = ['Etudiant1', 'Etudiant2', 'Etudiant3']; // Tableau (slide 39)

    // Boucle for..of pour parcourir le tableau (slide 45)
    for (const etudiant of etudiants) {
        console.log(etudiant); // Affichage un par un (slide 34)
    }
}

// f2: un objet (slide 40)
function fn2() {
    const etudiant = {
        nom: 'Kada',
        prenom: 'Rania',
        age: 19
    }; // Objet avec propriétés (slide 40)

    console.log(etudiant); // Affiche l'objet complet (slide 40)
}

// f3: tableau d'objets (slide 41)
function fn3() {
    const etudiants = [
        { nom: 'nom1', prenom: 'prenom1', age: 20 },
        { nom: 'nom2', prenom: 'prenom2', age: 21 },
        { nom: 'nom3', prenom: 'prenom3', age: 22 }
    ]; // Tableau d'objets (slide 41)

    // Boucle for..of (slide 45) + accès aux propriétés avec le point (slide 40)
    for (const etudiant of etudiants) {
        console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age);
    }
}
