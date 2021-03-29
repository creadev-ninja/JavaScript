Fiche Web Design

Ateliers sur les nombres 1er en JavaScript
1.  Atelier #1 : Méthode intuitive

[![CreaDev](../modulo/logo-creadev-210207-R-200.png)](http://www.creadev.ninja/)

Technologies en jeux : JavaScript

Vous avez juste besoin d’une navigateur et de sa console web.

# Les nombres 1er en JavaScript (#1)

Calcul des nombres premiers jusqu'à 100 avec une boucle.

## Définition

Un nombre naturel est premier lorsqu'il n'est divisible que par 1 et lui-même.

Exemple :
7 est premier car il n'a que deux diviseurs entiers naturels: 1 et lui-même (donc 7)
8 n'est pas premier car il a plus de deux diviseurs entiers naturels; 8 a quatre diviseurs: 1 _ 2 _ 4 et 8

à noter : 1 n'est pas premier: il n'a qu'un seul diviseur entier naturel et 1 n'a pas deux diviseurs.

## Méthode 1 (intuitive)

On cherche des diviseurs (entier) d'un nombre: en trouver trois suffit pour prouver qu'un nombre n'est pas premier.

    On considère l'entier 10. La liste de ses diviseurs : 1, 2, 5, 10.
    10 n'est pas premier, il a 4 diviseurs (il en faut 2 pour un nombre premier).

### Code

	function nbPremier(nb) {
		for(var i=2; i< nb; i++){
			if(nb%i === 0){return false;}
		}
		return nb>1;
	}

	for(let i=0; i<102; i++){
		if(nbPremier(i)){console.log(i);}
	}	

[Téléchargez le code ci-dessus](nb1er-01.js) 

Une méthode intuitive qui demande quand même 1184 calculs.