

//////////// étape 1 ////////////
// 0 et 1 ne sont pas permier
var nb = 18;
for(var i=2; i< nb; i++){
	if(nb%i === 0){
        console.log(i +') '+ nb + ' false');
    }else{
        console.log(i +') '+ nb);
    }
}


//////////// étape 2 ////////////
// 0 et 1 ne sont pas premier
var nb = 18;
for(var i=2; i< nb; i++){
	if(nb%i === 0){
        console.log(nb +' % '+ i +' = '+ (nb%i) + ' false');
    }else{
        console.log(nb +' % '+ i +' = '+ (nb%i));
    }
}


//////////// étape 3 ////////////
function nbPremier(nb) {
	for(var i=2; i< nb; i++){
		if(nb%i === 0){return false;}
	}
	return nb;
}


//////////// étape 4 ////////////
// Lister les nombre premier jusqu'à 100
function nbPremier(nb) {
	for(var i=2; i< nb; i++){
		if(nb%i === 0){return false;}
	}
	return nb>1;
}
for(let i=0; i<102; i++){
	if(nbPremier(i)){console.log(i);}
}	