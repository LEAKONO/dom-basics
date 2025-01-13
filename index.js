// Get all h1 elements
const headers = document.getElementsByTagName('h1');


if (headers.length > 0) {
    const header = headers[0]; 
    header.style.color = 'blue'; 
}
const todo=document.getElementById('todo');
const newer=document.createElement('p')
newer.textContent='This is my paragraph when am working on Dom manupulation events and communicating with the server'
todo.appendChild(newer)

