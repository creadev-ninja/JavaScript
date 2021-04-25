
//////////// étape 1 ////////////
var max = 100;
var out='';
for(i=2; i<=max; i++) {
    var j = 1;
    var racine = Math.floor(Math.sqrt(i));
    do {
        j++;
    } while(j<=racine && i%j != 0);
    console.log(i +') '+ j +'<='+ racine +' && '+ i +'%'+ j +' != '+(i%j));
}


//////////// étape 2 ///////////
var max = 100;
var out='';
for(i=2; i<=max; i++) {
    var j = 1;
    var racine = Math.floor(Math.sqrt(i));
    do {
        j++;
    } while(j<=racine && i%j != 0);
    if(j > racine) {
    	// i
	    console.log(i +') '+ j +'<='+ racine +' && '+ i +'%'+ j +' != '+(i%j));
	}
}

//////////// étape 3 ///////////
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
        out += i +", ";
    }
}
console.log(out);

//////////// étape 4 ///////////
var max = 100;
var out='';
var ar_prime = [];
for(let i=2; i<max; i++){
    var j=1;
    var racine = Math.floor(Math.sqrt(i));
    do{
        j++;
    }while(j<=racine && i%j != 0)
    if(j>racine){
        out += i+', ';
        ar_prime.push(i);
    }
}

console.log(ar_prime);
console.table(ar_prime);