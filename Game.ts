// src/Game.ts
import { Player } from "./Player";
import * as readline from "readline";

export class Game {
    private mode: string;
    private number: number;
    public player1: Player;
    public player2: Player;

    constructor(mode: string, number: number) {
        this.mode = mode;
        this.number = number;
        this.player1 = new Player("Joueur 1", number);
        this.player2 = new Player("Joueur 2", number);
    }

    // On rend la méthode async pour pouvoir utiliser await avec readline
    async start() {
        console.log(`Démarrage de la partie en mode ${this.mode}`);
        let currentPlayer: Player = this.player1;
        let opponent: Player = this.player2;

        // Création d'une interface readline pour obtenir l'entrée utilisateur
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        // Boucle de jeu principale
        while (!this.isGameOver()) {
            console.log(`\nC'est le tour de ${currentPlayer.name}`);

            // Afficher l'état du plateau de l'adversaire pour information (optionnel)
            console.log("Plateau adverse :");
            opponent.board.display();

            // Demander la position à attaquer
            const position = await new Promise<string>((resolve) => {
                rl.question("Entrez une position à attaquer (format: x,y) : ", resolve);
            });

            // Traitement de la position saisie
            const [xStr, yStr] = position.split(",");
            const x = parseInt(xStr.trim(), 10);
            const y = parseInt(yStr.trim(), 10);

            // Vérifier que la position est valide (par exemple, dans les limites du plateau)
            if (isNaN(x) || isNaN(y) || x < 0 || y < 0 || x >= currentPlayer.board.grid.length || y >= currentPlayer.board.grid[0].length) {
                console.log("Position invalide. Veuillez réessayer.");
                continue; // Re-demande la position
            }

            // Traiter l'attaque : on appelle une méthode "attack" sur le joueur courant ou sur l'adversaire
            // Ici, on suppose que la méthode attack() renvoie true si un bateau est touché, false sinon.
            const hit = currentPlayer.attack(opponent, x, y);
            if (hit) {
                console.log("Touché !");
            } else {
                console.log("Raté !");
            }

            // Vérifier si l'adversaire a perdu tous ses bateaux
            if (this.isGameOver()) {
                console.log(`${currentPlayer.name} a gagné la partie !`);
                break;
            }

            // Alterner les joueurs
            [currentPlayer, opponent] = [opponent, currentPlayer];
        }

        console.log("La partie est terminée !");
        rl.close();
    }

    // Exemple de fonction de vérification de fin de partie
    isGameOver(): boolean {
        // Ici, on vérifie si l'un des joueurs a perdu tous ses bateaux.
        return this.player1.allBoatsSunk() || this.player2.allBoatsSunk();
    }
}
