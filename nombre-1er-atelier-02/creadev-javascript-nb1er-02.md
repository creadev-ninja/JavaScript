Fiche Web Design

Ateliers sur les nombres 1er en JavaScript
1.  Atelier #1 : Méthode intuitive
2.  Atelier #2 : Méthode avec la racine carré

[![CreaDev](../modulo/logo-creadev-210207-R-200.png)](http://www.creadev.ninja/)

Technologies en jeux : JavaScript

Vous avez juste besoin d’une navigateur et de sa console web.

[![Atelier sur les nombres premiers #2 avec JavaScript](https://img.youtube.com/vi/gRUeMHIB8Ug/0.jpg)](https://www.youtube.com/watch?v=gRUeMHIB8Ug)

# Les nombres 1er en JavaScript (#2)

Calcul des nombres premiers jusqu'à 100 avec une boucle à partir de la racine carré de l'entier.

## Méthode 2 (racine carré)

Une autre méthode consiste à calculer la racine carré d'un nombre n, puis on divise le nombre n par tous les nombres entiers compris entre 1 et la racine carrée. Si le quotient est un nombre entier alors le quotient et le diviseur sont tous deux des diviseurs de n.

### Code

La racine carré de 16 est 4, on divise donc 16 par 1, 2, 3, 4.

	16 / 1 = 16
	16 / 2 = 8
	16 / 3 = 5.333 (n'est pas un entier)
	16 / 4 = 4

	Les diviseurs de 16 sont donc : 1, 2, 4, 8, 16.
	16 n'est donc pas un nombre premier puisqu'il a plus de deux diviseurs.
.
 
 	racine carré de 17 = 4.12310..., on retient 4.

	17 / 1 = 17
	17 / 2 = 8.5
	17 / 3 = 5.666
	17 / 4 = 4.25
	Le diviseur est 1 (et lui même), 17 est un nombre premier.	



### Code

L'avantage de tester à partir de la racine carré c'est l'économie de calcul. Dans la première méthode le test est systématique sur tous les nombres , avec la racine carré il y a six fois moins de calcul (1184 calculs contre 197 avec la racine carré).

	// calculer la racine carré (square root) : Math.sqrt()
	function isPrime(n) {
		if (n<2) return false;
		for(let i = 2; i <= Math.sqrt(n); i++){
			if(n%i === 0){return false;}
		}
		return n>1;
	}

	for(let i=0; i<102; i++){
		if(isPrime(i)){console.log(i);}
	}

[Téléchargez le code ci-dessus](nb1er-02.js) 