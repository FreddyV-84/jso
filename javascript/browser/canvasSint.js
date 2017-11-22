'use strict';
<<<<<<< HEAD

var canvas, ctx;

window.onload = function () {
    canvas = document.getElementById("mijnCanvas");
    ctx = canvas.getContext("2d");


    canvas.onmousemove = function (e) {
        var mousecoords = getMousePos(e);
        document.getElementById("coords").innerText = "x: " + (mousecoords.x - 10) + "\ny: " + (mousecoords.y - 10);
    };

    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);


    ctx.fillStyle = "#546";
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    drawBackground("https://www.wired.com/wp-content/uploads/images_blogs/wiredscience/2013/07/forkingsprite.jpg");

    //drawSint();
    drawImage("http://3.bp.blogspot.com/-jGC08Dy0zg8/U405cNq1-MI/AAAAAAAABqU/38d5rmV1S8Y/s1600/redfighter0006.png", 150, 450, 100, 100);
    drawImage("https://opengameart.org/sites/default/files/ship3.png", 450, 450, 100, 100);
    drawImage("http://1.bp.blogspot.com/-MQE-zK1mVSE/UdSVGV3GP3I/AAAAAAAAAu8/EOsv__HnS-M/s1600/spacestation.png", 300, 50, 200, 200);

    drawText("#dee", "Score: 54332", 15, 30);
};

function getMousePos(e) {
    return {
        x: e.clientX,
        y: e.clientY
    };
}

function drawSint() {
    drawFace();
}

function drawFace() {
    drawCircle("#002755", 300, 300, 100);
    drawCircle("#0061A3", 300, 300, 95);

    drawEyes();

    drawBeard("#002755", 10);
    drawBeard("#3aabce", 0);

    drawMouth("#002755", 300, 365, 60);
    drawMouth("#0099FF", 300, 365, 55);

    drawMouth("#002755", 300, 345, 40);
    drawMouth("#c52353", 300, 345, 35);

    drawHat("#002755", 10);
    drawHat("#3aabce", 0);

    drawLine("#002755", 300, 60, 300, 234, 10);
    drawLine("#002755", 175, 160, 425, 160, 10);
}

function drawBackground(src) {
    drawImage(src, 0, 0, canvas.clientWidth, canvas.clientHeight);
=======
var canvas, context, topx;

window.onload = drawSint;

function drawSint() {
    canvas = document.getElementById("mijnCanvas");
    context = canvas.getContext("2d");
    // er is nog geen 3D canvas; d.i. om de code "futureproof" te maken
    topx = canvas.clientWidth / 2;

    // context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);  // alles wissen
    context.fillStyle = "#ccffff";
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    drawCoat();
    drawFace();
    drawMiter2();
    drawImage("images/speelgoedzak.png",
        Math.floor(Math.random() * (canvas.clientWidth - 150)),
        Math.floor(Math.random() * (canvas.clientHeight - 150)), 150, 150);
    drawText("yellow", "Dag sinterklaasje!", topx, canvas.clientHeight - 50);
}

function drawFace() {
    drawCircle("pink", topx, 320, 70);
    drawEyes();
    drawBeard2();
    drawMouth();
}

function drawCircle(color, x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
}

function drawPolygon(color, vertices) {
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(vertices[0], vertices[1]);
    for (var i = 2; i < vertices.length; i += 2) {
        context.lineTo(vertices[i], vertices[i + 1]);
    }
    context.lineTo(vertices[0], vertices[1]);
    context.fill();
}

function drawLine(color, x1, y1, x2, y2, width) {
    context.strokeStyle = color;
    context.lineWidth = width;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
>>>>>>> e831878796a33651a80fb9cafe2b9ff111b0e475
}

function drawImage(imgName, x, y, width, height) {
    var img = new Image();
    img.src = imgName;
<<<<<<< HEAD
    // images zijn niet altijd meteen geladen, daarom wachten we tot de prent helemaal geladen is
    // voor we ze op het canvas tekenen
    img.onload = function () {
        ctx.drawImage(img, x, y, width, height);
    };
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

function drawHat(color, bs) {
    var hatVertices = [235 - bs, 230 + bs, 180 - bs, 160, 300, 60 - bs, 420 + bs, 160, 365 + bs, 230 + bs];
    drawPolygon(color, hatVertices);
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

function drawBeard(color, borderSize) {
    drawPolygon(color, [300 - 40 - borderSize, 380 - borderSize + 10, 340 + borderSize, 380 - borderSize + 10, 300, 520 + borderSize]);
}

function drawMouth(color, x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, Math.PI / 16, Math.PI - Math.PI / 16);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawEyes() {
    drawCircle("#002755", 255, 280, 20);
    drawCircle("#0099FF", 255, 280, 15);

    drawCircle("#002755", 345, 280, 20);
    drawCircle("#0099FF", 345, 280, 15);
}

function drawCircle(color, x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
=======
    // images zijn niet altijd meteen geladen, daarom wachten we tot 
    // de prent helemaal geladen is voor we ze op het canvas tekenen:
    img.onload = function () {
        context.drawImage(img, x, y, width, height);
    }
}

function drawText(color, text, x, y) {
    context.fillStyle = color;
    context.font = "bold 2em sans-serif";
    context.textAlign = "center";
    context.fillText(text, x, y);
}

function drawEyes() {
    drawCircle("white", topx - 25, 315, 10);
    drawCircle("blue", topx - 25, 315, 5);
    drawCircle("white", topx + 25, 315, 10);
    drawCircle("blue", topx + 25, 315, 5);
}

function drawMouth() {
    context.beginPath();
    context.arc(topx, 350, 20, Math.PI / 16, Math.PI - Math.PI / 16);
    context.fillStyle = "darkred";
    context.fill();
}

function drawBeard() {
    drawPolygon("white", [topx - 60, 360, topx + 60, 360, topx, 520]);
}

function drawMiter() {
    drawPolygon("red", [topx, 60, topx + 120, 180, topx + 60, 300, topx - 60, 300, topx - 120, 180]);
    drawLine("gold", topx - 120, 180, topx + 120, 180, 10);
    drawLine("gold", topx, 60, topx, 300, 10);
}

/* onderstaande functies met dank aan Irina */
function drawBeard2(){
    drawPolygon("white",[topx-60,360,topx+60,360,topx,520]);
}
function drawMiter2(){
    drawPolygon("red",[topx-65,298,topx-100,180,topx,60,topx+100,180,topx+65,298]);
    drawLine("gold", topx-98,180,topx+98,180,10);
    drawLine("gold", topx,62,topx,298,10);
}

function drawCoat(){
    drawPolygon("red",[topx-165,600,topx-100,380,topx,260,topx+100,380,topx+165,600]);
>>>>>>> e831878796a33651a80fb9cafe2b9ff111b0e475
}