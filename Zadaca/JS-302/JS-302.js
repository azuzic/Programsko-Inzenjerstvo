function istiZnakovi(a) {
	let max = 0;
	let br = 1;
	let z = '';
	for (let i = 0; i<a.length; i++) {
		if (z != a[i]) {
			z = a[i]; 
			br=1;
		}
		else br++;
		if (br > max) max = br;
	}
	return max;
}
//.substr(1);
// napisati funkciju `isti_znakovi`
console.log(istiZnakovi("baaaccd")) // → 3
console.log(istiZnakovi("ba2dll")) // → 2