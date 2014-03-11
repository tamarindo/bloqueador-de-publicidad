

function borrador(){
var i=0; 	
var publicidad = document.getElementsByClassName('ego_column');
if(publicidad.length != 0)
		{publicidad[0].remove();}
}
/*window.addEventListener('DOMContentLoaded', borrador);*/
 var myvar = setInterval('borrador()', 60);


