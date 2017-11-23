'use strict';

/**
 * Initialize the Game and starts it after all game assets are loaded.
 * When all images from our imageRepository are loaded, 
 * the window.init() function is called
 */
var game = new Game(); // create new Game object from our Game function

function init() {
    if (game.init())
        game.start();
}

function changeFireRate() {
    game.ship.fireRate = document.getElementById("rangeShipFireRate").value;
    document.getElementById("lblShipFireRange").innerText = "game.ship.fireRate: " + game.ship.fireRate;
}

function changeShipSpeed() {
    game.ship.speed = parseInt(document.getElementById("rangeShipSpeed").value);
    document.getElementById("lblShipSpeed").innerText = "game.ship.speed: " + game.ship.speed;
}

function changeShipDoubleShot() {
    game.ship.doubleShot = document.getElementById("chkDoubleShot").checked;
}

var statsShip = document.getElementById("statsShip");
var statsBullets = document.getElementById("statsBullets");
var bullets = "";

function displayStats() {
    bullets = "";
    for (var i = 0; i < game.ship.bulletPool.pool.length; i++) {
        bullets += "[" + (game.ship.bulletPool.pool[i].alive ? "*" : " ") + "]";
    }

    statsShip.innerText = "OBJECT: game.ship" +
        "\n\ngame.ship.x: " + game.ship.x +
        "\ngame.ship.y: " + game.ship.y +
        "\ngame.ship.width: " + game.ship.width +
        "\ngame.ship.height: " + game.ship.height +
        "\ngame.ship.canvasWidth: " + game.ship.canvasWidth +
        "\ngame.ship.canvasHeight: " + game.ship.canvasHeight +
        "\ngame.ship.speed: " + game.ship.speed +
        "\n\ngame.ship.fireRate: " + game.ship.fireRate;
    // bullet speed
    // ...
    statsBullets.innerText = "OBJECT POOL PATTERN: bulletPool" +
        "\n\ngame.ship.bulletPool.pool.length: " + game.ship.bulletPool.pool.length +
        "\n\n" + bullets;
}

/**
 * Creates the Game object which will hold all objects and data for
 * the game.
 */
function Game() {
    /*
     * Gets canvas information and context and sets up all game
     * objects.
     * Returns true if the canvas is supported and false if it
     * is not. This is to stop the animation script from constantly
     * running on browsers that do not support the canvas.
     */
    this.init = function () {
        document.getElementById("rangeShipFireRate").onchange = changeFireRate;
        document.getElementById("rangeShipSpeed").onchange = changeShipSpeed;
        document.getElementById("chkDoubleShot").onchange = changeShipDoubleShot;

        document.getElementById("rangeShipFireRate").value = changeFireRate;
        document.getElementById("rangeShipSpeed").value = changeShipSpeed;

        // Get the canvas elements
        this.bgCanvas = document.getElementById('cvs_background');
        this.shipCanvas = document.getElementById('cvs_ship');
        this.mainCanvas = document.getElementById('cvs_main');

        // Test to see if canvas is supported. Only need to
        // check one canvas
        if (this.bgCanvas.getContext) {
            this.bgContext = this.bgCanvas.getContext('2d');
            this.shipContext = this.shipCanvas.getContext('2d');
            this.mainContext = this.mainCanvas.getContext('2d');

            // Initialize objects to contain their context and canvas
            // information
            Background.prototype.context = this.bgContext;
            Background.prototype.canvasWidth = this.bgCanvas.width;
            Background.prototype.canvasHeight = this.bgCanvas.height;
            Ship.prototype.context = this.shipContext;
            Ship.prototype.canvasWidth = this.shipCanvas.width;
            Ship.prototype.canvasHeight = this.shipCanvas.height;
            Bullet.prototype.context = this.mainContext;
            Bullet.prototype.canvasWidth = this.mainCanvas.width;
            Bullet.prototype.canvasHeight = this.mainCanvas.height;
            Enemy.prototype.context = this.mainContext;
            Enemy.prototype.canvasWidth = this.mainCanvas.width;
            Enemy.prototype.canvasHeight = this.mainCanvas.height;

            // Initialize the background object
            this.background = new Background();
            this.background.init(0, 0); // Set draw point to 0,0
            
            // Initialize the ship object
            this.ship = new Ship();
            // Set the ship to start near the bottom middle of the canvas
            var shipStartX = this.shipCanvas.width / 2 - imageRepository.spaceship.width;
            var shipStartY = this.shipCanvas.height / 4 * 3 + imageRepository.spaceship.height * 2;
            this.ship.init(shipStartX, shipStartY, imageRepository.spaceship.width,
                imageRepository.spaceship.height);

            // Initialize the enemy pool object
            this.enemyPool = new Pool(30);
            this.enemyPool.init("enemy");
            var height = imageRepository.enemy.height;
            var width = imageRepository.enemy.width;
            var x = 100;
            var y = -height;
            var spacer = y * 1.5;
            for (var i = 1; i <= 18; i++) {
                this.enemyPool.get(x, y, 2);
                x += width + 25;
                if (i % 6 == 0) {
                    x = 100;
                    y += spacer
                }
            }
            this.enemyBulletPool = new Pool(50);
            this.enemyBulletPool.init("enemyBullet");

            return true;
        } else {
            return false;
        }
    };
    // Start the animation loop
    this.start = function () {
        this.ship.draw();
        animate();
    };
}
/**
 * The animation loop. Calls the requestAnimationFrame shim to
 * optimize the game loop and draws all game objects. This
 * function must be a gobal function and cannot be within an
 * object.
 */
function animate() {
	requestAnimFrame( animate );
	game.background.draw();
	game.ship.move();
	game.ship.bulletPool.animate();
	game.enemyPool.animate();
	game.enemyBulletPool.animate();
    displayStats();
}

/**
 * requestAnim shim layer by Paul Irish
 * Finds the first API that works to optimize the animation loop,
 * otherwise defaults to setTimeout().
 */
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function ( /* function */ callback, /* DOMElement */ element) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

/**
 * Define an object to hold all our images for the game so images
 * are only ever created once. This type of object is known as a
 * singleton.
 */
var imageRepository = new function () {
    // Define images
    this.background = new Image();
    this.spaceship = new Image();
    this.bullet = new Image();
    this.enemy = new Image();
    this.enemyBullet = new Image();

    // Set images src
    this.background.src = "imgs/bg.png";
    this.spaceship.src = "imgs/ship.png";
    this.bullet.src = "imgs/bullet.png";
    this.enemy.src = "imgs/enemy.png";
    this.enemyBullet.src = "imgs/bullet_enemy.png";

    // Ensure all images have loaded before starting the game
    var numImages = 5;
    var numLoaded = 0;

    function imageLoaded() {
        numLoaded++;
        if (numLoaded === numImages) {
            window.init();
        }
    }

    this.background.onload = function () {
        imageLoaded();
    }
    this.spaceship.onload = function () {
        imageLoaded();
    }
    this.bullet.onload = function () {
        imageLoaded();
    }
    this.enemy.onload = function () {
        imageLoaded();
    }
    this.enemyBullet.onload = function () {
        imageLoaded();
    }
}

/**
 * Creates the Drawable object which will be the base class for
 * all drawable objects in the game. Sets up default variables
 * that all child objects will inherit, as well as the default
 * functions.
 */
function Drawable() {
    this.init = function (x, y, width, height) {
        // Default variables
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    this.speed = 0;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    // Define abstract function to be implemented in child objects
    this.draw = function () {};
}

/**
 * Creates the Background object which will become a child of
 * the Drawable object. The background is drawn on the "background"
 * canvas and creates the illusion of moving by panning the image.
 */
function Background() {
    this.speed = 1; // Redefine speed of the background for panning
    // Implement abstract function
    this.draw = function () {
        // Pan background
        this.y += this.speed;
        this.context.drawImage(imageRepository.background, this.x, this.y);
        // Draw another image at the top edge of the first image
        this.context.drawImage(imageRepository.background, this.x, this.y - this.canvasHeight);
        // If the image scrolled off the screen, reset
        if (this.y >= this.canvasHeight)
            this.y = 0;
    };
}
// Set Background to inherit properties from Drawable
Background.prototype = new Drawable();

/**
 * Custom Pool object. Holds Bullet objects to be managed to prevent
 * garbage collection.
 */
function Pool(maxSize) {
    var size = maxSize; // Max bullets allowed in the pool
    this.pool = [];
    /*
     * Populates the pool array with Bullet objects
     */
    this.init = function (object) {
        if (object == "bullet") {
            for (var i = 0; i < size; i++) {
                // Initalize the object
                var bullet = new Bullet("bullet");
                bullet.init(0, 0, imageRepository.bullet.width, imageRepository.bullet.height);
                this.pool[i] = bullet;
            }
        } else if (object == "enemy") {
            for (var i = 0; i < size; i++) {
                var enemy = new Enemy();
                enemy.init(0, 0, imageRepository.enemy.width, imageRepository.enemy.height);
                this.pool[i] = enemy;
            }
        } else if (object == "enemyBullet") {
            for (var i = 0; i < size; i++) {
                var bullet = new Bullet("enemyBullet");
                bullet.init(0, 0, imageRepository.enemyBullet.width, imageRepository.enemyBullet.height);
                this.pool[i] = bullet;
            }
        }
    };
    /*
     * Grabs the last item in the list and initializes it and
     * pushes it to the front of the array.
     */
    this.get = function (x, y, speed) {
        if (!this.pool[size - 1].alive) {
            this.pool[size - 1].spawn(x, y, speed);
            this.pool.unshift(this.pool.pop());
            // The unshift() method adds one or more elements to the beginning of an array 
            // and returns the new length of the array.
        }
    };
    /*
     * Used for the ship to be able to get two bullets at once. If
     * only the get() function is used twice, the ship is able to
     * fire and only have 1 bullet spawn instead of 2.
     */
    this.getTwo = function (x1, y1, speed1, x2, y2, speed2) {
        if (!this.pool[size - 1].alive &&
            !this.pool[size - 2].alive) {
            this.get(x1, y1, speed1);
            this.get(x2, y2, speed2);
        }
    };
    /*
     * Draws any in use Bullets. If a bullet goes off the screen,
     * clears it and pushes it to the end of the array.
     */
    this.animate = function () {
        for (var i = 0; i < size; i++) {
            // Only draw until we find a bullet that is not alive
            if (this.pool[i].alive) {
                if (this.pool[i].draw()) {
                    this.pool[i].clear();
                    this.pool.push((this.pool.splice(i, 1))[0]);
                    // The splice() method changes the contents of an array 
                    // by removing existing elements and/or adding new elements.
                }
            } else
                break;
        }
    };
}

/**
 * Creates the Bullet object which the ship fires. The bullets are
 * drawn on the "main" canvas.
 */
function Bullet(object) {
    this.alive = false; // Is true if the bullet is currently in use
    var self = object;
    /*
     * Sets the bullet values
     */
    this.spawn = function (x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.alive = true;
    };
    /*
     * Uses a "dirty rectangle" to erase the bullet and moves it.
     * Returns true if the bullet moved off the screen, indicating that
     * the bullet is ready to be cleared by the pool, otherwise draws
     * the bullet.
     */
    this.draw = function () {
        this.context.clearRect(this.x, this.y, this.width, this.height);
        this.y -= this.speed;
        if (self === "bullet" && this.y <= 0 - this.height) {
            return true;
        } else if (self === "enemyBullet" && this.y >= this.canvasHeight) {
            return true;
        } else {
            if (self === "bullet") {
                this.context.drawImage(imageRepository.bullet, this.x, this.y);
            } else if (self === "enemyBullet") {
                this.context.drawImage(imageRepository.enemyBullet, this.x, this.y);
            }
            return false;
        }
    };
    /*
     * Resets the bullet values
     */
    this.clear = function () {
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.alive = false;
    };
}
Bullet.prototype = new Drawable();


/**
 * Create the Ship object that the player controls. The ship is
 * drawn on the "ship" canvas and uses dirty rectangles to move
 * around the screen.
 */
function Ship() {
    this.speed = 3;
    this.bulletPool = new Pool(16);
    this.bulletPool.init("bullet");
    this.fireRate = 15;
    this.doubleShot = true;
    this.leftCanonActive = true;
    var fireRateCounter = 0;
    this.draw = function () {
        this.context.drawImage(imageRepository.spaceship, this.x, this.y);
    };
    this.move = function () {
        fireRateCounter++;
        // Determine if the action is move action
        if (KEY_STATUS.left || KEY_STATUS.right ||
            KEY_STATUS.down || KEY_STATUS.up) {
            // The ship moved, so erase it's current image so it can
            // be redrawn in it's new location
            this.context.clearRect(this.x, this.y, this.width, this.height);
            // Update x and y according to the direction to move and
            // redraw the ship. Change the else if's to if statements
            // to have diagonal movement.
            if (KEY_STATUS.left) {
                this.x -= this.speed
                if (this.x <= 0) // Keep player within the screen
                    this.x = 0;
            }
            if (KEY_STATUS.right) {
                this.x += this.speed
                if (this.x >= this.canvasWidth - this.width)
                    this.x = this.canvasWidth - this.width;
            }
            if (KEY_STATUS.up) {
                this.y -= this.speed
                if (this.y <= this.canvasHeight / 4 * 3)
                    this.y = this.canvasHeight / 4 * 3;
            }
            if (KEY_STATUS.down) {
                this.y += this.speed
                if (this.y >= this.canvasHeight - this.height)
                    this.y = this.canvasHeight - this.height;
            }
            // Finish by redrawing the ship
            this.draw();
        }
        if (KEY_STATUS.space && fireRateCounter >= this.fireRate) {
            this.fire();
            fireRateCounter = 0;
        }
    };
    /*
     * Fires one or two bullets depending on this.doubleShot
     */
    this.fire = function () {
        if (this.doubleShot) {
            this.bulletPool.getTwo(this.x + 6, this.y, 3,
                this.x + 33, this.y, 3);
        } else {
            if (this.leftCanonActive === true) {
                this.bulletPool.get(this.x + 6, this.y, 3);
                this.leftCanonActive = false;
            } else {
                this.bulletPool.get(this.x + 33, this.y, 3);
                this.leftCanonActive = true;
            }
        }
    };

}
Ship.prototype = new Drawable();


/**
 * Create the Enemy ship object.
 */
function Enemy() {
    var percentFire = .01;
    var chance = 0;
    this.alive = false;
    /*
     * Sets the Enemy values
     */
    this.spawn = function (x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.speedX = 0;
        this.speedY = speed;
        this.alive = true;
        this.leftEdge = this.x - 90;
        this.rightEdge = this.x + 90;
        this.bottomEdge = this.y + 140;
    };
    /*
     * Move the enemy
     */
    this.draw = function () {
        this.context.clearRect(this.x - 1, this.y, this.width + 1, this.height);
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x <= this.leftEdge) {
            this.speedX = this.speed;
        } else if (this.x >= this.rightEdge + this.width) {
            this.speedX = -this.speed;
        } else if (this.y >= this.bottomEdge) {
            this.speed = 1.5;
            this.speedY = 0;
            this.y -= 5;
            this.speedX = -this.speed;
        }
        this.context.drawImage(imageRepository.enemy, this.x, this.y);
        // Enemy has a chance to shoot every movement
        chance = Math.floor(Math.random() * 101);
        if (chance / 100 < percentFire) {
            this.fire();
        }
    };
    /*
     * Fires a bullet
     */
    this.fire = function () {
        game.enemyBulletPool.get(this.x + this.width / 2, this.y + this.height, -2.5);
    }
    /*
     * Resets the enemy values
     */
    this.clear = function () {
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.alive = false;
    };
}
Enemy.prototype = new Drawable();

// The keycodes that will be mapped when a user presses a button.
// Original code by Doug McInnes
const KEY_CODES = {
    32: 'space',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
}

// Creates the array to hold the KEY_CODES and sets all their values
// to false. Checking true/false is the quickest way to check status
// of a key press and which one was pressed when determining
// when to move and which direction.
// KEY_STATUS = {};
// for (code in KEY_CODES) {
//     KEY_STATUS[KEY_CODES[code]] = false;
// }
var KEY_STATUS = {
    space: false,
    left: false,
    up: false,
    right: false,
    down: false
};


/**
 * Sets up the document to listen to onkeydown events (fired when
 * any key on the keyboard is pressed down). When a key is pressed,
 * it sets the appropriate direction to true to let us know which
 * key it was.
 */
document.onkeydown = function (e) {
    // Firefox and opera use charCode instead of keyCode to
    // return which key was pressed.
    var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
    if (KEY_CODES[keyCode]) {
        e.preventDefault();
        KEY_STATUS[KEY_CODES[keyCode]] = true;
    }
}
/**
 * Sets up the document to listen to ownkeyup events (fired when
 * any key on the keyboard is released). When a key is released,
 * it sets teh appropriate direction to false to let us know which
 * key it was.
 */
document.onkeyup = function (e) {
    var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
    if (KEY_CODES[keyCode]) {
        e.preventDefault();
        KEY_STATUS[KEY_CODES[keyCode]] = false;
    }
}