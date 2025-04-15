// src/Board.ts
export class Board {
    grid: string[][];

    constructor(size: number = 8) {
        this.grid = [];
        for (let i = 0; i < size; i++) {
            // Utilisation de "." pour représenter une case vide
            const row = new Array(size).fill(".");
            this.grid.push(row);
        }
    }

    // Afficher la matrice dans la console
    display(): void {
        console.log(this.grid.map(row => row.join(" ")).join("\n"));
    }

    // Méthode de placement d'un bateau sur la matrice
    placeBoat(x: number, y: number): void {
        if (this.grid[x][y] === ".") {
            this.grid[x][y] = "B";  // "B" indique la présence d'un bateau
        }
    }
}
