function convertion1()
{
	var deg=+document.getElementById("d").value;
	var min=+document.getElementById("m").value;
	var sec=+document.getElementById("s").value;
	var or=document.getElementById("o").value;
	
	if (or=="N")
	{
		var t=deg+min/60+sec/3600;
	}
	if (or=="S")
	{
		var t=-1*(deg+min/60+sec/3600);
	}
	document.convertisseur.decimal.value=t;
}

function convertion2()
{
	var dec=+document.getElementById("deci").value;
	
	if (dec<0)
	{
		dec=-dec;
		var or="S";
	}
	else
	{
		var or="N";
	}
	var deg=Math.trunc(dec);
	var min=Math.trunc((dec-deg)*60);
	var sec=Math.trunc(((dec-deg)*60-min)*60);
		
	document.convertisseur.orientation.value=or;
	document.convertisseur.degres.value=deg;
	document.convertisseur.minutes.value=min;
	document.convertisseur.secondes.value=sec;
}

