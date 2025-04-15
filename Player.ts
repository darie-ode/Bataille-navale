// src/Player.ts
import { Board } from "./Board";

export class Player {
    name: string;
    board: Board;
    // Représente la position des bateaux (pour le mode simple)
    boats: { x: number; y: number }[];

    constructor(name: string, numberOfBoats: number) {
        this.name = name;
        this.board = new Board();
        this.boats = [];

        // Placement aléatoire des bateaux
        for (let i = 0; i < numberOfBoats; i++) {
            const pos = this.getRandomEmptyPosition();
            if (pos) {
                this.boats.push(pos);
                this.board.placeBoat(pos.x, pos.y);
            }
        }
    }

    // Exemple de méthode pour générer une position vide aléatoire
    getRandomEmptyPosition(): { x: number; y: number } | null {
        const size = this.board.grid.length;
        let attempts = 0;
        while (attempts < 100) {
            const x = Math.floor(Math.random() * size);
            const y = Math.floor(Math.random() * size);
            if (this.board.grid[x][y] === ".") {
                return { x, y };
            }
            attempts++;
        }
        return null;
    }

    /**
     * Tente d'attaquer l'adversaire à la position (x, y).
     * Si un bateau est présent à cette position sur le plateau de l'adversaire (représenté par "B"),
     * la case est marquée comme touchée (par exemple "X") et retourne true.
     * Sinon, marque un tir raté (par exemple "*") et retourne false.
     */
    attack(opponent: Player, x: number, y: number): boolean {
        if (opponent.board.grid[x][y] === "B") {
            opponent.board.grid[x][y] = "X";  // Marquer comme touché
            console.log(`Un bateau de ${opponent.name} a été touché à la position (${x}, ${y})`);
            return true;
        } else {
            opponent.board.grid[x][y] = "*";  // Marquer comme tir raté
            return false;
        }
    }

    /**
     * Vérifie si tous les bateaux de ce joueur ont été coulés.
     * Cette méthode parcourt le plateau et retourne true s'il n'y a plus
     * aucune case avec un bateau ("B").
     */
    allBoatsSunk(): boolean {
        for (let i = 0; i < this.board.grid.length; i++) {
            for (let j = 0; j < this.board.grid[i].length; j++) {
                if (this.board.grid[i][j] === "B") {
                    return false;
                }
            }
        }
        return true;
    }
}
