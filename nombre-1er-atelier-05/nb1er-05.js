	function isPrime(nb) {
		// le nettoyage des nombres avant les tests modulo
	    if (nb === 1 || nb === 0) return false;
	    if (nb < 4) return true;                    // 2 & 3
	    if (nb % 2 === 0) return false;             // chiffre pair
	    if (nb < 9) return true;                    // 5 & 7
	    if (nb % 3 === 0) return false;             // multiple de 3
	    // on place le modulo à 5 & 7
	    let sr = Math.sqrt(nb) + 1;                 // square root
	    for (let i = 5; i <= sr; i += 6) {
	        if (nb % i === 0){return false;}        // multiple de 5
	        if (nb % (i + 2) === 0){return false;}  // multiple de 7
	        console.log(nb +' % '+ i +' = '+ nb%i);
	        console.log(nb +' % '+ (i+2) +' = '+ nb%i);
	    }
	    return true;
	}
	for(let j=0; j<102; j++){
		if(isPrime(j)){console.log(j);}
	}