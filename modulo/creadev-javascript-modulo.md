Fiche Web Design

Le modulo en JavaScript
1.  Un modulo est le reste de la division euclidienne
2.  Un modulo est positif ou nul
3.  Un modulo est plus petit que la valeur absolue du diviseur

[![CreaDev](logo-creadev-210207-R-200.png)](http://www.creadev.ninja/)

Technologies en jeux : JavaScript

Vous avez juste besoin d’une navigateur et de sa console web.

# Le modulo en JavaScript

Le modulo (remainder en anglais) est un opérateur arithmétique au même titre que l’addition (+), la 
soustraction (-), la multiplication (*) ou encore la division (/). 

Définition de la documentation MDN : l’opérateur « reste » (nommée « modulo ») renvoi le reste de la division du premier opérande par le second. Le résultat obtenu a toujours le signe du numérateur (la quantité divisée). 

-   MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

-   MDN : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_arithm%C3%A9tiques#Remainder

En clair, un modulo (%) est composé de deux opérandes : 

-   un dividende ou le nombre à diviser.
-   un diviseur ou le nombre par lequel on doit diviser le dividende

        dividende modulo diviseur
        dividende % diviseur 

## 1. Un modulo est le reste de la division euclidienne
Comment comprendre le chiffre que renvoi le modulo ?

    console.log( 42 % 10 ); // 2

Dans l'exemple ci-dessus on a 42 % 10 renvoi 2 soit 42 - 4 * 10 = 2

Le modulo cherche le multiple de 10 dans 42, le nombre le plus proche étant 4 x 10 soit 40, 42 -40 il reste 2. 
Modulo renvoi donc 2 comme reste de la division du multiple du diviseur. 

On peut aussi tester si un entier est divisible par un autre entier.

    x% 4 == 0 // vrai si x est divisible par 4
    x% 2 == 0 // vrai si x est un nombre pair
    x% 2! = 0 // vrai si x est un nombre impair

Et avec le modulo 2 on peut déterminer si un nombre est pair ou impair.

On notera que le modulo 10 renvoi les unités d'un entier (le dernier chiffre à droite du nombre).

    456 % 10 //6
    873 % 10 //3

## 2. Un modulo est positif ou nul

    console.log( 42 % 10); // 2
    console.log( 42 % -10); // 2
    console.log(-42 % 10); // -2
    console.log(-42 % -10); // -2
    console.log(-40 % 10); // -0
    console.log( 40 % 10); // 0 

En réalité en JavaScript le résultat du modulo prends le signe du dividende, donc si celui-ci est négatif, le 
résultat sera négatif

## 3. Un modulo est plus petit que la valeur absolue du diviseur

    17%10 // 7   soit    17 - 1*10 = 7   soit   17-10 = 7
    23%10 // 3   soit    23 - 2*10 = 3   soit   23-20 = 3
    7%10  // 7   soit     7 - 0*10 = 7   soit   7-0 = 7
    20%10 // 0   soit    20 - 2*10 = 0   soit   20-20 = 0
    17%3  // 2   soit     17 - 3*5 = 2   soit   17-15 = 2
    23%3  // 2   soit     23 - 3*7 = 2   soit   23-21 = 2
    7%3   // 1   soit      7 - 2*3 = 1   soit   7-6 = 1

En fait en JavaScript par forcément, si le **dividende** est plus petit que le **diviseur** le modulo renvoi la valeur du **dividende**. Dans les autres cas il renvoi le reste de la division la plus proche du dividende en fonction du multiple du diviseur et par conséquent est toujours inférieur à la valeur absolue du diviseur. 

    // la division de 13 par 2 ne retourne pas un entier (13/2=6.5)
    13 % 2 // 1
    // la division de 12 par 2 retourne un entier (12/2=6)
    12 % 2 // 0
    
    // le diviseur étant 2 il ne peut retourner que 0 et 1, 
    // les seuls chiffres inférieur à 2.
    // le résultat du modulo renvoyant 0 confirme que 
    // le dividende est divisible par le diviseur.
    // le résultat du modulo renvoyant 1 confirme que 
    // le dividende n'est pas divisible par le diviseur.


D'une façon générale, il faut retenir que :
-   si le dividende est divisible par le diviseur, le modulo renverra toujours 0 (zéro). 
-   étrangement le résultat du modulo prend toujours le signe du dividende (+ -). 
-   On peut déterminer si un nombre est pair (even) ou impair (odd) avec %2. 