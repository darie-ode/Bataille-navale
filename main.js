"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var Game_1 = require("./Game");
// Exemple très simple d'analyse des arguments
var args = process.argv.slice(2);
var mode = "simple";
var number = 3; // valeur par défaut pour le nombre de bateaux
for (var i = 0; i < args.length; i++) {
    if (args[i] === "--mode") {
        mode = args[i + 1];
    }
    else if (args[i] === "--number") {
        number = parseInt(args[i + 1], 10);
    }
    else if (args[i] === "--data") {
        // Vous pouvez ajouter ici la lecture du fichier JSON pour le mode normal
    }
}
var game = new Game_1.Game(mode, number);
game.start();
