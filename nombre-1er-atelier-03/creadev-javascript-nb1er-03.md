Fiche Web Design

Ateliers sur les nombres 1er en JavaScript
1.  Atelier #1 : Méthode intuitive
2.  Atelier #2 : Méthode avec la racine carré
3.  Atelier #3 : Méthode avec boucles imbriquées

[![CreaDev](logo-creadev-210207-R-200.png)](http://www.creadev.ninja/)

Technologies en jeux : JavaScript

Vous avez juste besoin d’une navigateur et de sa console web.

# Les nombres 1er en JavaScript (#3)

Toujours la méthode 2 mais cette fois-ci avec **deux boucles imbriquées** (for & do while).

Calcul des nombres premiers jusqu'à 100 avec une boucle do while et à partir de la racine carré de l'entier.

## Méthode 3 (boucles imbriquées)

### Code

	var max = 100;
	var out='';
	for(i=2; i<=max; i++) {
		var j = 1;
		var racine = Math.floor(Math.sqrt(i));

		do {
			j++;
		} while(j<=racine && i%j != 0);

		if(j > racine) {
			// On affiche les nombres premiers
			out += i +"< br>";
		}
	}
	document.getElementById("result").innerHTML = out;

2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 

[Téléchargez le code ci-dessus](https://github.com/creadev-ninja/JavaScript/blob/master/nombre-1er-atelier-03/creadev-javascript-nb1er-03.md)
#

- [MDN : Math.floor() retourne un entier](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/floor)
- [MDN : Math.sqrt() calcule la racine carré](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/sqrt)
- [Mathématiques faciles, les nombres premiers](https://www.mathematiquesfaciles.com/nombres-premiers_2_78336.htm)

