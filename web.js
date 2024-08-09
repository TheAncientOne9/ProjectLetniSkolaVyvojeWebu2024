document.getElementById('btn').addEventListener('click', function(){
const newText = document.createElement('p');
newText.innerText = 'Hello World!';
document.body.appendChild(newText);
});