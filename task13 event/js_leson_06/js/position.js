var sx = document.getElementById('sx');
var sy = document.getElementById('sy');
var px = document.getElementById('px');
var py = document.getElementById('py');
var cx = document.getElementById('cx');
var cy = document.getElementById('cy');

function showPosition(event){
    sx.value = eventX;
    sy.value = eventY;
    px.value = pageX;
    py.value = pageY;
    cx.value = clientX;
    cy.value = clientY;
}
var el = document.getElementById('body');
el.addEventListener('mousemove', showPosition, false);