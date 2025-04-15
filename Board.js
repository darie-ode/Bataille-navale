"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
// src/Board.ts
var Board = /** @class */ (function () {
    function Board(size) {
        if (size === void 0) { size = 8; }
        this.grid = [];
        for (var i = 0; i < size; i++) {
            // Utilisation de "." pour représenter une case vide
            var row = new Array(size).fill(".");
            this.grid.push(row);
        }
    }
    // Afficher la matrice dans la console
    Board.prototype.display = function () {
        console.log(this.grid.map(function (row) { return row.join(" "); }).join("\n"));
    };
    // Méthode de placement d'un bateau sur la matrice
    Board.prototype.placeBoat = function (x, y) {
        if (this.grid[x][y] === ".") {
            this.grid[x][y] = "B"; // "B" indique la présence d'un bateau
        }
    };
    return Board;
}());
exports.Board = Board;
