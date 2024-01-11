//link to canvas
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//Where are we clicking on the canvas???
let woof = new Audio();
woof.src = "woof.wav";

canvas.addEventListener('click', function (e) {
    let MouseX = e.pageX - this.offsetLeft;
    let MouseY = e.pageY - this.offsetTop;
    console.log("x: " + MouseX);
    console.log("y: " + MouseY);
    if (MouseX >= 75 &&
        MouseY >= 300 &&
        MouseX <= 331 &&
        MouseY <= 556) {
        woof.play();
    }
});

//Where are we clicking on the canvas???
let knock = new Audio();
knock.src = "knocking.wav";

canvas.addEventListener('click', function (e) {
    let MouseX = e.pageX - this.offsetLeft;
    let MouseY = e.pageY - this.offsetTop;
    console.log("x: " + MouseX);
    console.log("y: " + MouseY);
    if (MouseX >= 390 &&
        MouseY >= 350 &&
        MouseX <= 640 &&
        MouseY <= 600) {
        knock.play();
    }
});

//Where are we clicking on the canvas???
let fire = new Audio();
fire.src = "fire.wav";

canvas.addEventListener('click', function (e) {
    let MouseX = e.pageX - this.offsetLeft;
    let MouseY = e.pageY - this.offsetTop;
    console.log("x: " + MouseX);
    console.log("y: " + MouseY);
    if (MouseX >= 500 &&
        MouseY >= 300 &&
        MouseX <= 756 &&
        MouseY <= 556) {
        fire.play();
    }
});

//Grass
ctx.fillStyle = "green";
ctx.fillRect(0, 400, 800, 200);

//house
ctx.fillStyle = "brown";
ctx.fillRect(300, 230, 220, 180);

//triangle
ctx.beginPath();
ctx.moveTo(300, 230);
ctx.lineTo(520, 230);
ctx.lineTo(415, 100);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();


ctx.fillStyle = "yellow";
ctx.fillRect(400, 350, 30, 60);

ctx.fillStyle = "yellow";
ctx.fillRect(310, 270, 45, 45);

ctx.fillStyle = "yellow";
ctx.fillRect(460, 270, 45, 45);

// image
let cloud = new Image();
cloud.src = "cloud-2.jpeg";
cloud.onload = function () {
    ctx.drawImage(cloud, 500, 25);
};

//Dog image
let doggie = new Image();
doggie.src = "dog2.jpeg";
doggie.onload = function () {
    ctx.drawImage(doggie, 75, 300);
    //75 x 300
}

//fire image
let campfire = new Image();
campfire.src = "campfire.png";
campfire.onload = function () {
    ctx.drawImage(campfire,550, 360, 200, 200);
}

//gas image
let gascan = new Image();
gascan.src = "gascan.png";
gascan.onload = function () {
    ctx.drawImage(gascan,400, 400, 200, 200);
}

//hos image
let hos = new Image();
hos.src = "hos.png";
hos.onload = function () {
    ctx.drawImage(hos,45, 45, 120, 120);
}

//hos image
let sun = new Image();
sun.src = "sun.png";
sun.onload = function () {
    ctx.drawImage(sun,0, 0, 220, 220);
}

//room image
let room = new Image();
room.src = "room.png";
room.onload = function () {
    ctx.drawImage(room,460, 270, 45, 45);
}

//room image
let room2 = new Image();
room2.src = "room2.png";
room2.onload = function () {
    ctx.drawImage(room2,310, 270, 45, 45);
}

//room image
let door = new Image();
door.src = "door.png";
door.onload = function () {
    ctx.drawImage(door,390, 350, 50, 66);
}

