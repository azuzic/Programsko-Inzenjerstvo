let studenti = [
 {
 ime: "Marko",
 prezime: "Marković",
 grad: "Pula"
 },
 {
 ime: "Iva",
 prezime: "Ivić",
 grad: "Našice"
 },
 {
 ime: "Lucija",
 prezime: "Lucić",
 grad: "Zagreb"
 },
 {
 ime: "Nikola",
 prezime: "Nikolić",
 grad: "Rijeka"
 }
];
function napredna_pretraga(lista, pojam) {
	let cs = [];
	while(pojam.length != 0) {
		let c = "";
		do {
			c += pojam[0];
			pojam = pojam.substr(1);
			if (pojam.length == 0)
				break;
		} while (pojam[0] != " ");
		pojam = pojam.substr(1);
		cs.push(c);
	}
	console.log(cs);
	for (let i=0; i<lista.length; i++) {
		f = true;
		for (let j=0; j<cs.length; j++) {
			if ((lista[i].ime.toLowerCase().indexOf(cs[j].toLowerCase()) !== -1 || 
				 lista[i].prezime.toLowerCase().indexOf(cs[j].toLowerCase()) !== -1) || 
				 lista[i].grad.toLowerCase().indexOf(cs[j].toLowerCase()) !== -1) {
				continue;
			}
			else {
				f = false;
				break;
			}
		}
		if (f) {
			console.log(i);
			return i;
		}
	}
	return -1;
}
console.assert(napredna_pretraga(studenti, "ma ić") == 0) // → prvi student
console.assert(napredna_pretraga(studenti, "ko lić ri") == 3) // → zadnji student
console.assert(napredna_pretraga(studenti, "ić za") == 2) // → treći student
console.assert(napredna_pretraga(studenti, "ić ko la ri") == 3) // → zadnji student