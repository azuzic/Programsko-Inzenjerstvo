let bodovi = prompt("Unesi broj bodova");
let ocjena;
let poruka;

// tvoj kod
if (bodovi > 89) ocjena = 5;
else if (bodovi > 76) ocjena = 4;
else if (bodovi > 63) ocjena = 3;
else if (bodovi > 49) ocjena = 2;
else ocjena = 1;

if (ocjena > 1) {
	poruka = "Čestitam dobili ste ocjenu " + ocjena + "!";
	console.log(poruka);
}