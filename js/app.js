/*
    Script for index.html

    See the README.md file for instructions
    https://github.com/drstearns/canvas-lab/blob/master/README.md
*/

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var mouseIsDown = false;
    var colorInp = document.querySelector('#line-color-inp');


    colorInp.addEventListener('change', function() {
        ctx.strokeStyle = colorInp.value;
        console.log(colorInp.value)
    });
    var rectangle = document.getElementById('draw')
    rectangle.addEventListener('click', function() {
        ctx.fillRect(20,20,500,250)
    });
    canvas.addEventListener('mousedown', function(evt) {
        mouseIsDown = true;
        ctx.beginPath();
        ctx.moveTo(evt.clientX - canvas.offsetLeft, evt.clientY - canvas.offsetTop);
    });

    canvas.addEventListener('mousemove', function(evt) {
        ctx.strokeStyle = getRandomColor();
        if (mouseIsDown) {
            ctx.lineTo(evt.clientX - canvas.offsetLeft, evt.clientY - canvas.offsetTop);
            ctx.stroke();
        }
    });
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    canvas.addEventListener('mouseup', function(evt) {
        ctx.lineTo(evt.clientX - canvas.offsetLeft, evt.clientY - canvas.offsetTop);
        ctx.stroke();
        mouseIsDown = false;
    });

    var clearButton = document.getElementById('clear')
    clearButton.addEventListener('click', function() {
        ctx.clearRect(0,0,canvas.width,canvas.height)
    });

});