
function verification(k) /* Fonction qui compte le nombre de bonnes réponses */
{
	var somme=0;
	var tableauReponse=[["l'echelle d'une carte est le rapport entre la taille sur la carte et la taille réelle.",
						"1cm repésente 25 000 cm soit 250 m dans la réalité.",
						"20km = 2 000 000 cm, donc l'échelle est de 4/2 000 000=1/500 000."],
						["le 15 représente la latitude et le 30 la longitude.",
						"l'équateur partage la Terre en deux hémisphères, l'hémisphère Nord et l'hémisphère Sud.",
						"le méridien de Greenwich est une ligne imaginaire qui sépare la moitié Ouest de la moitié Est de la Terre. Il passe par la ville de Greenwich en Angleterre."],
						["le système GPS nous localise grâce à 4 satellites",
						"le GPS est le système de géolocalisation américain",
						"le concurrent européen du GPS est le système Galileo.  "],
						["la localisation de mon téléphone est une donnée personnelle",
						"la localisation de mon téléphone peut être utilisée par d'autres applications que les applications de cartographie",
						"Si mon smartphone est hors connexion, le GPS peut fonctionner normalement"]
						]
	for(var j=1 ; j<4; j++){
		var q = document.forms['quizz'].elements['q'+j];
		var r = document.forms['quizz'].elements['rep'+j];
		var flag1=false;
		var flag2=false;
		if (q[0].checked || q[1].checked || q[2].checked){
			flag2=true;
		}
		for( var i=0 ; i<3; i++){
			if (q[i].checked && q[i].value=="1"){
				flag1=true;
				somme=somme+1;
			}
		}
		if (flag2){
			if (flag1==false){
				r.value="Mauvaise réponse : "+tableauReponse[k][j-1];
			}
			else {
				r.value="Bonne réponse : "+tableauReponse[k][j-1];
			}
		}
		else{
			r.value="Pas de réponse : "+tableauReponse[k][j-1];
		}
		for(var i=0; i<3; i++){
			q[i].disabled=true;
		}
	}
	document.quizz.reponse.value="vous avez " + somme + " bonne(s) réponse(s) sur 3 questions.";
	document.getElementById('explications').style.visibility="visible";
	
}