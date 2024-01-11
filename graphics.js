//alert("JS Linked");

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillRect(100,100,50,50);
//fiilRect(x, y, width, height)
ctx.fillRect(20,50,77,80);

ctx.fillStyle = "blue";
ctx.fillRect(200, 20, 100, 200);

ctx.strokeStyle = "purple";
ctx.strokeRect(320, 20, 100, 50);

ctx.strokeStyle = "red";
ctx.strokeRect(100,200,100, 100);
ctx.fillStyle = "yellow";
ctx.fillRect(100,200,99,99);

//triangle
ctx.beginPath();
ctx.moveTo(400, 100);
ctx.lineTo(500,100);
ctx.lineTo(450, 20);
ctx.closePath();
ctx.fillStyle = "cyan";
ctx.fill();

//Circle
ctx.beginPath();
ctx.arc(470, 300, 80, 0 ,2*Math.PI,false);
ctx.closePath();
ctx.fillstyle = "purple"
ctx.fill();

//Circle
ctx.beginPath();
ctx.ellipse(470, 300, 50,60, 0 ,2*Math.PI,false);
ctx.closePath();
ctx.fillStyle = "purple"
ctx.fill();
ctx.strokeStyle="green";
ctx.lineWidth = 10;
ctx.stroke();

//pentagon
ctx.beginPath();
ctx.moveTo(50, 500);
ctx.lineTo(150, 500);
ctx.lineTo(200, 400);
ctx.lineTo(100, 300);
ctx.lineTo(0, 400);

ctx.closePath();
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

// image
let catPic = new Image();
catPic.src = "cat.png";
catPic.onload = function(){
    ctx.drawImage(catPic, 500, 50);
};

ctx.clearRect(120, 120, 20, 40);

//triangle
ctx.beginPath();
ctx.moveTo(600, 500);
ctx.lineTo(700, 500);
ctx.lineTo(650, 400);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();




