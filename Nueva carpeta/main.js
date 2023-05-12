window.onload = () => { /*lo que hace window.onload hace esperar a que el sitio web
se encuentre completamente cargado*/


console.log('Hola, intro a dom')
const parrafo = document.getElementById('text') /*se puede obtener un elemento*/

/*parrafo.innerText = 'Texto Actualizado'*/ /*y luego se puede cambiar el texto */

parrafo.innerHTML = '<li>Elemento 1 </li> <li> Elemento 2</li>' /*Agregar elementos
html a otro elemento html*/
}