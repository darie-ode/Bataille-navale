# Bataille-navale 
 Jeu de Bataille Navale à 2 Joueurs
Ce projet est un jeu interactif pour deux joueurs inspiré de la bataille navale. Chaque joueur dispose d'une matrice de jeu de 8 cases de longueur par 8 cases de largeur dans laquelle il place stratégiquement ses bateaux.

Comment ça marche ?

Placement des bateaux :
Au début de la partie, chaque joueur positionne ses bateaux sur sa propre matrice. La stratégie est essentielle car vous devez à la fois protéger vos bateaux et tenter de deviner l'emplacement de ceux de votre adversaire.

Déroulement du jeu :
Les joueurs jouent chacun leur tour. À chaque tour, le joueur choisit une position dans la matrice de son adversaire qu'il souhaite attaquer.

Attaques et marquage :
Si un bateau se trouve sur la case attaquée, cette position est marquée par un "X". Cela indique que le bateau a été touché à cet endroit.

Condition de victoire :
Le premier joueur à réussir à détruire tous les bateaux adverses remporte la partie. La destruction complète d'un bateau se manifeste lorsque toutes les cases occupées par celui-ci ont été attaquées et marquées.

Lancement du programme 

Tous les bateaux ont une taille de 1 par 1 (longueur et largeur) et sont positionnés aléatoirement.

Le programme doit se lancer de cette façon:


 tsc main.ts
 
 node main.js --mode simple --number 3