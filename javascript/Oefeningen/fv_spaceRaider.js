'use strict';

var canvas, ctx, middleX, middleY, frameInterval;
var images = [];
var lasers = [];
var stationX, stationY, stationAngle, stationXSpeed, stationYSpeed, stationXDirection, stationYDirection;
var playerX, playerY, playerSpeed;
var laserX, laserY, laserSpeed;
const TO_RADIANS = Math.PI / 180;

window.onload = function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    canvas.onmousemove = function (e) {
        var mousecoords = getMousePos(e);
        document.getElementById("coords").innerText = "x: " + (mousecoords.x - 10) + "\ny: " + (mousecoords.y - 10);
    };

    document.onkeydown = processInput;

    middleX = canvas.clientWidth / 2;
    middleY = canvas.clientHeight / 2;

    // LOAD IMAGES
    loadImages();

    // Configure Start properties
    configureEnemies();
    configurePlayer();

    frameInterval = setInterval(render, 5);

};

function loadImages() {
    var background = new Image();
    background.src = "https://www.wired.com/wp-content/uploads/images_blogs/wiredscience/2013/07/forkingsprite.jpg";
    images.push(background);

    var enemyShip = new Image();
    enemyShip.src = "http://1.bp.blogspot.com/-MQE-zK1mVSE/UdSVGV3GP3I/AAAAAAAAAu8/EOsv__HnS-M/s1600/spacestation.png";
    images.push(enemyShip);

    var playerShip = new Image();
    playerShip.src = "https://opengameart.org/sites/default/files/ship3.png";
    images.push(playerShip);

    var laser = new Image();
    laser.src = "https://donaldcarling.files.wordpress.com/2016/03/blast-harrier-laser-1.png";
    images.push(laser);

    setTimeout(function () {
        console.log("timout")
    }, 1000);
}

function render() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    //fillBackground("#354");
    drawBackground(images[0]);
    //drawStars();
    //processInput();

    moveEnemies()


    drawEnemies();
    drawPlayer();
    drawLasers();
}

function processInput(e) {
    // keypresses & stuff to move player ship
    e = e || window.event;

    switch (e.keyCode) {
        case 37: // left
            playerX -= playerSpeed;
            break;
        case 38: // up

            break;
        case 39: // right
            playerX += playerSpeed;
            break;
        case 40: // down

            break;
        case 32:
            shoot();
        break;
    }
}

function shoot(){
    // create new laser
    laserX = playerX + 45;
    laserY = playerY + 6;
    

}

function moveEnemies() {
    // rotate station
    stationAngle++;

    if (stationX > canvas.clientWidth)
        stationXDirection = "left";

    if (stationX < 0)
        stationXDirection = "right";

    if (stationXDirection === "left")
        stationX -= stationXSpeed;
    else
        stationX += stationXSpeed;

    if (stationY > 300)
        stationYDirection = "up";

    if (stationY < 0)
        stationYDirection = "down";

    if (stationYDirection === "up")
        stationY -= stationYSpeed;
    else
        stationY += stationYSpeed;
}

function configureEnemies() {
    stationX = middleX;
    stationY = 100;
    stationAngle = 90;
    stationXDirection = "left";
    stationXSpeed = 2;
    stationYDirection = "up";
    stationYSpeed = 0.2;
}

function configurePlayer() {
    playerSpeed = 30;
    playerX = middleX;
    playerY = 550;
    laserSpeed = 10;
}

function drawLasers(){
    drawImage(images[3],laserX, laserY,10,10);
}

function drawEnemies() {
    rotateAndDrawImage(images[1], stationAngle * TO_RADIANS, stationX, stationY, 140, 160, 300, 300);
}

function drawPlayer() {
    drawImage(images[2], playerX, playerY, 100, 100);
}

function getMousePos(e) {
    return {
        x: e.clientX,
        y: e.clientY
    };
}

function fillBackground(color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

function drawBackground(img) {
    drawImage(img, 0, 0, canvas.clientWidth, canvas.clientHeight);
}

function drawImage(img, x, y, width, height) {
    ctx.drawImage(img, x, y, width, height);
}

function rotateAndDrawImage(img, angleInRad, x, y, axisX, axisY, width, height) {
    ctx.translate(x, y);
    ctx.rotate(angleInRad);
    ctx.drawImage(img, -axisX, -axisY, width, height);
    ctx.rotate(-angleInRad);
    ctx.translate(-x, -y);
}

function drawText(color, text, x, y) {
    ctx.fillStyle = color;
    ctx.font = "bold 1.5em courier-new";
    ctx.textAlign = "left";
    ctx.fillText(text, x, y);
}

function drawLine(color, x1, y1, x2, y2, width) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawPolygon(color, vertices) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(vertices[0], vertices[1]);
    for (var i = 2; i < vertices.length; i += 2) {
        ctx.lineTo(vertices[i], vertices[i + 1]);
    }
    ctx.lineTo(vertices[0], vertices[1]);
    ctx.fill();
}

function drawCircle(color, x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}