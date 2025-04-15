"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
// src/Game.ts
var Player_1 = require("./Player");
var readline = require("readline");
var Game = /** @class */ (function () {
    function Game(mode, number) {
        this.mode = mode;
        this.number = number;
        this.player1 = new Player_1.Player("Joueur 1", number);
        this.player2 = new Player_1.Player("Joueur 2", number);
    }
    // On rend la méthode async pour pouvoir utiliser await avec readline
    Game.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentPlayer, opponent, rl, position, _a, xStr, yStr, x, y, hit;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log("D\u00E9marrage de la partie en mode ".concat(this.mode));
                        currentPlayer = this.player1;
                        opponent = this.player2;
                        rl = readline.createInterface({
                            input: process.stdin,
                            output: process.stdout,
                        });
                        _c.label = 1;
                    case 1:
                        if (!!this.isGameOver()) return [3 /*break*/, 3];
                        console.log("\nC'est le tour de ".concat(currentPlayer.name));
                        // Afficher l'état du plateau de l'adversaire pour information (optionnel)
                        console.log("Plateau adverse :");
                        opponent.board.display();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                rl.question("Entrez une position à attaquer (format: x,y) : ", resolve);
                            })];
                    case 2:
                        position = _c.sent();
                        _a = position.split(","), xStr = _a[0], yStr = _a[1];
                        x = parseInt(xStr.trim(), 10);
                        y = parseInt(yStr.trim(), 10);
                        // Vérifier que la position est valide (par exemple, dans les limites du plateau)
                        if (isNaN(x) || isNaN(y) || x < 0 || y < 0 || x >= currentPlayer.board.grid.length || y >= currentPlayer.board.grid[0].length) {
                            console.log("Position invalide. Veuillez réessayer.");
                            return [3 /*break*/, 1]; // Re-demande la position
                        }
                        hit = currentPlayer.attack(opponent, x, y);
                        if (hit) {
                            console.log("Touché !");
                        }
                        else {
                            console.log("Raté !");
                        }
                        // Vérifier si l'adversaire a perdu tous ses bateaux
                        if (this.isGameOver()) {
                            console.log("".concat(currentPlayer.name, " a gagn\u00E9 la partie !"));
                            return [3 /*break*/, 3];
                        }
                        // Alterner les joueurs
                        _b = [opponent, currentPlayer], currentPlayer = _b[0], opponent = _b[1];
                        return [3 /*break*/, 1];
                    case 3:
                        console.log("La partie est terminée !");
                        rl.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Exemple de fonction de vérification de fin de partie
    Game.prototype.isGameOver = function () {
        // Ici, on vérifie si l'un des joueurs a perdu tous ses bateaux.
        return this.player1.allBoatsSunk() || this.player2.allBoatsSunk();
    };
    return Game;
}());
exports.Game = Game;
