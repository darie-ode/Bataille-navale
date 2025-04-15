"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boat = void 0;
// Boat.ts
var Boat = /** @class */ (function () {
    function Boat(x, y) {
        this.x = x;
        this.y = y;
    }
    // Pour le mode simple, génère une position aléatoire dans une grille de 8x8
    Boat.randomBoat = function () {
        var x = Math.floor(Math.random() * 8);
        var y = Math.floor(Math.random() * 8);
        return new Boat(x, y);
    };
    return Boat;
}());
exports.Boat = Boat;
