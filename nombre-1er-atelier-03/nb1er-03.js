

//////////// étape 1 ////////////
var max = 17;
for(i=2; i<=max; i++) {
    var j = 1;
    var racine = Math.sqrt(i);
    do {
        j++;
        
    } while(j<=racine);
    console.log('i='+ i +' j='+ j +' r='+ racine +' ('+ i +'%'+ j +'= '+ i%j +')');
}

//////////// étape 2 ////////////
var max = 17;
for(i=2; i<=max; i++) {
    var j = 1;
    var racine = Math.floor(Math.sqrt(i));
    do {
        j++;
        
    } while(j<=racine);
    console.log('i='+ i +' j='+ j +' r='+ racine +' ('+ i +'%'+ j +'= '+ i%j +')');
}


//////////// étape 3 ////////////
var max = 17;
for(i=2; i<=max; i++) {
    var j = 1;
    var racine = Math.floor(Math.sqrt(i));
    do {
        j++;
    } while(j<=racine && i%j !=0);
        console.log('i='+ i +' j='+ j +' r='+ racine +' ('+ j+'/'+racine+')');
}


//////////// étape 4 ///////////
var max = 100;
for(i=2; i<=max; i++) {
    var j = 1;
    var racine = Math.floor(Math.sqrt(i));
    do {
        j++;
    } while(j<=racine && i%j !=0);
    if(j>racine){
        console.log(i);
    }
}

//////////// étape 5 ///////////
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