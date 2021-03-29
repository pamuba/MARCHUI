var canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//rectangles
// c.fillStyle = 'rgba(255,0,0,0.5)'
// c.fillRect(100,100,100,100);
// c.fillStyle = 'rgba(0,0,255,0.5)'
// c.fillRect(400,100,100,100);
// c.fillStyle = 'rgba(0,255,0,0.5)'
// c.fillRect(300,300,100,100);

//lines
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300,100)
// c.lineTo(400, 300)
// c.strokeStyle = "rgba(255,0,0,1)"
// c.stroke();

//arc
// c.beginPath();
// c.arc(300,300,30,0, Math.PI*2, false)
// c.strokeStyle = "blue"
// c.stroke();


for(let i=0;i<100;i++){
    var x = Math.random() * window.innerHeight;
    var y = Math.random() * window.innerWidth;
    c.beginPath();
    c.arc(x,y,30,0, Math.PI*2, false)
    c.strokeStyle = "blue"
    c.fillStyle = "gold"
    c.fill()
    c.stroke();
}