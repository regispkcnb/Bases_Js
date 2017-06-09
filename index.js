// conditions
var ageRegis = 22;
var ageSeb = 22;

if (ageRegis>ageSeb) 
{
	alert('R est plus jeune que seb');

}

else if  (ageRegis==ageSeb){
	alert('Ils ont le meme Age')
}

else {
	alert('S est plus vieux que R')
}


//boucle while

var i = 0;

while (i<3 )
{
	alert(i);
	i=i+1;
}

// boucle for 

for(i= 0; i<3; i++)
{
	alert('i');
}

// entree utilisateur avec sauvegarde dans une variable 
varage= prompt('quel age as tu ?');

alert(varage);


//plus ou moins qui fonctionne

varnombre= prompt('entrez un nombre');

var nombre= 29;

if(varnombre==29){
						alert('Felicitation vous avez reussi');
}

else if  (varnombre>29){
	alert('le nombre est plus petit');
}

else if  (varnombre<29){
	alert('le nombre est plus grand');
}

// plus ou moins avec boucle

 var i = 29;

 while (nombre!=i)
 {

    var nombre= prompt('entrez un nombre');

    if(nombre==i)
    {
        alert('Felicitation vous avez reussi');
    }

    else if  (nombre>i){
        alert('le nombre est plus petit');
    }

    else if  (nombre<i){
        alert('le nombre est plus grand');
    }

    

 }


// calcules 

var relult = 144 * 12;
alert(relult);

// version texte

var prenom = 'regis', nom =  'conombo', result;
result = prenom + nom;
 alert(result)


 // valeurs predefinis et valeur entrees par l'utilisateur 

 var start ='bonjour', name, end = '!', result;
name = prompt('quel est votre nom ?');

result = start+name+end;

alert(result);

//addition de nombres 

var first, second, result;

first = prompt('entrez le premier chiffre');
second = prompt('entrez un second nombre');
equal = 'le resultat est' 
result = first + second;

alert(equal+result);


// tableau 

var fruit = ['pomme', 'kiwi', 'tomate'];
alert(fruit);


// tableau bis

var age ['seb'] = 27;
alert(age ['seb']);




