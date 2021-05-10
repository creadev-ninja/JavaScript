Fiche Web Design

Ateliers sur les nombres 1er en JavaScript
1.  Atelier #1 : Méthode intuitive
2.  Atelier #2 : Méthode avec la racine carré
3.  Atelier #3 : Méthode avec boucles imbriquées
4.  Atelier #4 : Méthode #3 avec une sortie en tableau (array)

[![CreaDev](../modulo/logo-creadev-210207-R-200.png)](http://www.creadev.ninja/)

Technologies en jeux : JavaScript

Vous avez juste besoin d’une navigateur et de sa console web.

[![Atelier sur les nombres premiers #4](https://img.youtube.com/vi/QPwL4S5oKgA/0.jpg)](https://www.youtube.com/watch?v=QPwL4S5oKgA)

# Les nombres 1er en JavaScript (#4)

La même imbrication de boucle for & do while mais avec une sortie dans un tableaux.


## Méthode 4 (intuitive)


### Code

	var max = 100;
	var out='';
	var ar_prime = [];

	for(i=2; i<=max; i++) {
		var j = 1;
		var racine = Math.floor(Math.sqrt(i));

		do {
			j++;
		} while(j<=racine && i%j != 0);

		if(j > racine) {
			out += i +", ";    // On place les nombres premiers dans une variables pour l'affichage
			ar_prime.push(i);  // On place les nombres premiers dans un tableau
		}
	}
	// affichage
	document.getElementById("result").innerHTML = out;
	console.table(ar_prime);
	
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 

Télécharger le code ci-dessus : 
- [nb1er-04.js](https://github.com/creadev-ninja/JavaScript/blob/master/nombre-1er-atelier-04/nb1er-04.js) 
- [nb1er-04-page.html](https://github.com/creadev-ninja/JavaScript/blob/master/nombre-1er-atelier-04/nb1er-04-page.html)

#

- [MDN : Math.floor() retourne un entier](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/floor)
- [MDN : Math.sqrt() calcule la racine carré](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/sqrt)
- [Mathématiques faciles, les nombres premiers](https://www.mathematiquesfaciles.com/nombres-premiers_2_78336.htm)
- [MDN : Méthode Array.push()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push)
- [W3School : Méthode HTML DOM getElementById()](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)
