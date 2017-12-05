//Buscamos el elemento source que es crear una lista, por medio de su ID 
var source = document.getElementById('addList');

//Creamos un evento, con nuestro source, el evento click y la función que 
//se detalla la función adentro del mismo source
source.addEventListener('click',function(){
//Obtenemos por medio del id los elementos boxlist, container y list.
 document.getElementById('boxList').className = 'addOff';
 document.getElementById('container').className= 'listOn';
 document.getElementById('list').focus();

})

//Buscamos el botón dentro del documento para guardarlo en una variable.
var source2 = document.getElementById('button');

//Creamos el evento con la fuente que previamente obtuvimos, el evento que 
//Escuchamos es click, y ahí mismo declaramos la función que vamos a escuchar.
source2.addEventListener('click',function(){

	//Declaramos la variable newSection, que equivale a la creación de una nueva sección
	var newSection = document.createElement('section');
	//Se le coloca a la nueva sección la clase inline listOn
	newSection.className='inline listOn'

	//Declaramos la variaable newTitle, que crea un elemento span
	var newTitle = document.createElement('span');
	//Declaramos la variable titleDiv que crea un elemento div.
	var titleDiv = document.createElement('div');
	//La variable div se añadé al newTitle
	titleDiv.appendChild(newTitle);
	//Se le coloca la clase título al elemento div.
	titleDiv.className='title';


	//Creamos la variable que se encarga de crear nuevas tarjetas
	var newlink = document.createElement('a');
	//A la nueva tarjeta, le añadimos la propiedad de link.
	newlink.setAttribute('href','#');
	//Añadimos al html la tarjeta recién creada.
	newlink.innerHTML='Añadir una Tarjeta';

	//Se crea la variable divTarjetas que crea un elemento div
	var divTarjetas = document.createElement('div');
	//Se le añade la clase de contenedor
	divTarjetas.className='contenedor';

	//Se crea la variable divLink que crea un elemento div.
	var divLink = document.createElement('div');
	//Se añade el elemento newLink al divLink
	divLink.appendChild(newlink);
	//Se le asigna la clase de link.
	divLink.className='link';

	//Se crea el elemento newTextA
	var newTextA = document.createTextNode(document.getElementById('list').value);
	//Le quitamos el valor a list, después de obtenerlo por ID
	document.getElementById('list').value="";
	//añadimos el newTextA al newTitle
  	newTitle.appendChild(newTextA);

	//Creamos la variable textarea que crea un elemento del mismo tipo
	var textArea = document.createElement('textArea');
	//Le añadimos la clase textAreaOff para que no se muestre
  	textArea.className='textAreaOff';

	//Creamos el el elemento div, que será el área del div
	var divArea = document.createElement('div');
	//Añadimos al div el texArea previamente creado	
	divArea.appendChild(textArea);

	//Creamos la variable newButton, que creará el elemento button
	var newButton = document.createElement('button');
	//El texto al interior será guardar
	newButton.innerHTML='Guardar';
	//La clase que le corresponde es buttonOff (Desactivado)
  	newButton.className='buttonOff';

	//Creamos el div que contendrá al botón
	var divButton = document.createElement('div');
	//Dentro del div se añadirá el nuevo botón.
	divButton.appendChild(newButton);

	//Creamos una funcoión anidada para cuando se de click
	newlink.addEventListener('click',function(){
	//Asignamos al nuevo link la clase
	newlink.className = 'newLinkTarjetaOff';
	//Asignamos al textarea la clase
  	textArea.className = 'areaText';
 	 //asignamos al botón la clase
 	 newButton.className = 'bttn';
	textArea.focus();
	})



//Para el nuevo botón se crea un evento con el click que va a 
//ejectuar la función anidada.
newButton.addEventListener('click',function(){
	//La variavle text será igual a la creación del elemento p.
	var text= document.createElement('p');
	//creamos la variable que contendrá el texto que será colocado en el textarea
	var nameListText = textArea.value;
	//Creamos el newListText que será igual al título de la nueva lista.
	var newListText = document.createTextNode(nameListText);
	//Le añadimos la nueva lista al texto.
	text.appendChild(newListText);
	//Añadimos el texto al div que contiene las tarjetas
	divTarjetas.appendChild(text);
	//Le damos un valor cualquiera
	textArea.value = "";
	//Le añadimos la función de focus
	textArea.focus();
	})

	//Creamos el elemento div
	var boxbttn = document.createElement('div');
	//Le añadimos el área del div
	boxbttn.appendChild(divArea);
	//Le añadimos el botón
	boxbttn.appendChild(divButton);
	//Le añadimos la clase principal
	boxbttn.className = 'principal';


	//A la nueva sección, la que se creará en nueva lista
	//Le añadimos el título del div
	newSection.appendChild(titleDiv);
	//El link del div
	newSection.appendChild(divLink);
	//El div de las tarjetas
	newSection.appendChild(divTarjetas);
	//Y el div previamente creado
	newSection.appendChild(boxbttn);

	//Dentro de la variable creamos el elemento de form
	formBox = document.getElementById("formBox");
	//Insertamos en la pricipal la nueva sección junto con el formbox
  	principal.insertBefore(newSection,formBox);
	})
