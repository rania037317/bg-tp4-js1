"use strict"; // Mode strict (slide 52)

// Données Students : tableau d'objets (slides 40 et 41)
// Champs : id, nom, prenom, note, 5e valeur de l'énoncé (non utilisée pour la décision)
const Students = [
    { id: 1000, nom: 'JOHN',   prenom: 'DOE',     note: 14, autre: 5 },
    { id: 2000, nom: 'BOB',    prenom: 'CARLTON', note: 7,  autre: 1 },
    { id: 3000, nom: 'RAYANE', prenom: 'SMITH',   note: 13, autre: 3 }
];

// Fonction B: un seul paramètre float, retourne un booléen (slide 46)
function B(note) {
    // Opérateur relationnel >= (slide 42) : admis si la note est >= 10
    return note >= 10;
}

// Fonction A: appelée au clic, parcourt les étudiants et appelle B (slide 46)
function A() {
    // Boucle for..of (slide 45)
    for (const etudiant of Students) {
        // Condition avec notation ternaire (slide 43)
        const decision = B(etudiant.note) ? "ADMIS" : "AJOURNÉ";
        console.log(etudiant.id + ": " + decision); // Un résultat par ligne (slide 34)
    }
}
