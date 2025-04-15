"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
// src/Player.ts
var Board_1 = require("./Board");
var Player = /** @class */ (function () {
    function Player(name, numberOfBoats) {
        this.name = name;
        this.board = new Board_1.Board();
        this.boats = [];
        // Placement aléatoire des bateaux
        for (var i = 0; i < numberOfBoats; i++) {
            var pos = this.getRandomEmptyPosition();
            if (pos) {
                this.boats.push(pos);
                this.board.placeBoat(pos.x, pos.y);
            }
        }
    }
    // Exemple de méthode pour générer une position vide aléatoire
    Player.prototype.getRandomEmptyPosition = function () {
        var size = this.board.grid.length;
        var attempts = 0;
        while (attempts < 100) {
            var x = Math.floor(Math.random() * size);
            var y = Math.floor(Math.random() * size);
            if (this.board.grid[x][y] === ".") {
                return { x: x, y: y };
            }
            attempts++;
        }
        return null;
    };
    /**
     * Tente d'attaquer l'adversaire à la position (x, y).
     * Si un bateau est présent à cette position sur le plateau de l'adversaire (représenté par "B"),
     * la case est marquée comme touchée (par exemple "X") et retourne true.
     * Sinon, marque un tir raté (par exemple "*") et retourne false.
     */
    Player.prototype.attack = function (opponent, x, y) {
        if (opponent.board.grid[x][y] === "B") {
            opponent.board.grid[x][y] = "X"; // Marquer comme touché
            console.log("Un bateau de ".concat(opponent.name, " a \u00E9t\u00E9 touch\u00E9 \u00E0 la position (").concat(x, ", ").concat(y, ")"));
            return true;
        }
        else {
            opponent.board.grid[x][y] = "*"; // Marquer comme tir raté
            return false;
        }
    };
    /**
     * Vérifie si tous les bateaux de ce joueur ont été coulés.
     * Cette méthode parcourt le plateau et retourne true s'il n'y a plus
     * aucune case avec un bateau ("B").
     */
    Player.prototype.allBoatsSunk = function () {
        for (var i = 0; i < this.board.grid.length; i++) {
            for (var j = 0; j < this.board.grid[i].length; j++) {
                if (this.board.grid[i][j] === "B") {
                    return false;
                }
            }
        }
        return true;
    };
    return Player;
}());
exports.Player = Player;
