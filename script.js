let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');




ctx.fillStyle = 'yellow';
ctx.lineTo(25,100 );
ctx.lineTo(50, 250);
ctx.lineTo(80,100)
ctx.fill();



ctx.fillStyle = 'red';
ctx.beginPath(25, 50);
ctx.bezierCurveTo(25, 100, 80, 5, 80, 100);
ctx.fill();
