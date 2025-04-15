// main.ts
import { Game } from "./Game";

// Exemple très simple d'analyse des arguments
const args = process.argv.slice(2);
let mode = "simple";
let nbrDeBateaux: number = 3; // valeur par défaut pour le nombre de bateaux

for (let i = 0; i < args.length; i++) {
    if (args[i] === "--mode") {
        mode = args[i + 1];
    } else if (args[i] === "--number") {
        nbrDeBateaux = parseInt(args[i + 1], 10);
    } else if (args[i] === "--data") {
        // Vous pouvez ajouter ici la lecture du fichier JSON pour le mode normal
    }
}

const game = new Game(mode, nbrDeBateaux);
game.start();
