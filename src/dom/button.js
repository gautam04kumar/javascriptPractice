// Create a button dynamically using JavaScript and append it to the body of the HTML document.
      

let button = document.createElement('button');
button.innerHTML = 'Click me!';

document.body.appendChild(button);

// Change the background color of a div element when a button is clicked.
// Toggle the visibility of an element (e.g., a paragraph) when a button is clicked.
const div=document.querySelector('#div-container')
const p=document.querySelector('#text')
button.addEventListener('click',(e)=>{
    let changeBackground =div.style.backgroundColor="red"
    let addText=p.innerText="this is pragraph"
    let toggle=p.style.display==="none"?p.style.display = 'block':p.style.display = 'none'
    return [changeBackground,addText,toggle]
    
})


