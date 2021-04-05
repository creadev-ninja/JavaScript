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