// Boat.ts
export class Boat {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    // Pour le mode simple, génère une position aléatoire dans une grille de 8x8
    static randomBoat(): Boat {
        const x = Math.floor(Math.random() * 8);
        const y = Math.floor(Math.random() * 8);
        return new Boat(x, y);
    }
}
