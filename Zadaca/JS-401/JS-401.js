function provjeri(lista, pojam) {
	for (let i=0; i<lista.length; i++)
		if ((lista[i].ime     == pojam || 
		     lista[i].prezime == pojam) && 
			 lista[i].upisan)
			return true;
	return false;
}

let lista = [
{
 ime: "Taylah",
 prezime: "Lucero",
 upisan: true
},
{
 ime: "Dana",
 prezime: "Dickerson",
 upisan: false
},
{
 ime: "Shelley",
 prezime: "Armitage",
 upisan: true
},
{
 ime: "Olivier",
 prezime: "Stevenson",
 upisan: true
},
{
 ime: "Macie",
 prezime: "Holloway",
 upisan: false
},
{
 ime: "Geoffrey",
 prezime: "Wormald",
 upisan: true
},
{
 ime: "Benny",
 prezime: "Edge",
 upisan: true
},
{
 ime: "Leigh",
 prezime: "Needham",
 upisan: true
},
{
 ime: "Regina",
 prezime: "Santos",
 upisan: false
},
{
 ime: "Johan",
 prezime: "Langley",
 upisan: true
}]

console.log(provjeri(lista, "Taylah"));
console.log(provjeri(lista, "Holloway"));
console.log(provjeri(lista, "Needham"));