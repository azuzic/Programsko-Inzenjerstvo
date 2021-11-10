let zagrade = function(s) {
	let S = ""
	for (let i=0; i<s.length; i++) {
		if (s[i]=='[' ||
		    s[i]=='{' ||
		    s[i]=='(') 
			S = S + s[i];
		if (s[i]==']' ||
		    s[i]=='}' ||
		    s[i]==')') 
			if ((S[S.length-1]== '[' && s[i]==']') ||
			    (S[S.length-1]== '{' && s[i]=='}') ||
			    (S[S.length-1]== '(' && s[i]==')')
				)
				S = S.substr(0, S.length-1);
			else 
				return false
	}
	if (S == "") return true;
	else return false;
};
console.log(zagrade("[()]()()")); // → true
console.log(zagrade("{[((()))]}")); // → true
console.log(zagrade("({)}")); // → false