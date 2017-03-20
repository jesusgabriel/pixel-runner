(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight  * 0.8;

var player = require("./player.js");
var scene = require("./scene.js");
var rock = require("./rock.js")[0];
var rock2 = require("./rock.js")[1];



function gameloop() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
  player.update();
  rock.update();
  rock2.update();


  scene.render(ctx, canvas)
  player.render(ctx);
  rock.render(ctx);
  rock2.render(ctx);
  window.requestAnimationFrame(gameloop);
}

gameloop();

},{"./player.js":2,"./rock.js":3,"./scene.js":4}],2:[function(require,module,exports){
var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");

document.addEventListener("keydown", function(ev) {
    if (ev.keyCode === 32 && player.velY > 5) {
        if (!player.doubleJumping) {
            player.velY = -10;
            if (player.y < window.innerHeight * 0.5) player.doubleJumping = true;
        }
    }
});

var player = {
    x: 50,
    y: window.innerHeight * 0.5,
    velY: 10,
    score: 0,
    sprite: f1,
    numUpdates: 0,
    doubleJumping: false,
    nextSprite: function() {
        if (this.sprite === f1) this.sprite = f2;
        else if (this.sprite === f2) this.sprite = f3;
        else if (this.sprite === f3) this.sprite = f4;
        else this.sprite = f1;

    },
    update: function() {
        this.numUpdates++;
        if (this.numUpdates > 5) {
            this.numUpdates = 0;
            this.nextSprite();
        }
        this.y += this.velY;
        if (this.y >= window.innerHeight * 0.5  ) {
            this.y = window.innerHeight * 0.5 ;
            this.doubleJumping = false;
        }
        if (this.velY < 10) {
            this.velY += 0.2;
        }
    },
    render: function(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y, 100, 100);
    }

};
module.exports = player;

},{}],3:[function(require,module,exports){
var rock = {
    x: canvas.width + 200,
    y: window.innerHeight * 0.5,

    update: function() {
        this.x -= 3;
        if (this.x < -100) {
            this.x = 1800;
        }
    },

    render: function(ctx) {
      ctx.fillRect(this.x, this.y, 100, 100);
    }
  };
var rock2 = {
    x: canvas.width + 400,
    y: window.innerHeight * 0.5,

    update: function() {
        this.x -= 3;
        if (this.x < -100) {
            this.x = 2000;
        }
    },

    render: function(ctx) {
        ctx.fillRect(this.x, this.y, 100, 100);
    }
};

// module.exports(){
// var px = player.x + 21;
// var py = player.y + 35;
// var x1 = thing.x + thing2.width;
// var y0 = thing2.y;
// var y1 = thing2.y + thing2.height;
// if (px > xo && px <x1 && py > y0 && py < y2) return true;
// px = player.x - 45;
// if (px > xo && px <x1 && py > y0 && py < y2) return true;
// py = player.y - 35;
//
//   {
module.exports = [rock, rock2];

},{}],4:[function(require,module,exports){
var sky = document.getElementById("sky");

module.exports = {
    update: function() {

    },
    render: function(ctx, canvas) {
        for (var i = 0; i <= canvas.width; i += 10) {
            ctx.drawImage(sky, i, 0, 10, window.innerHeight * 0.5 + 100);
        }
        ctx.fillRect(0, window.innerHeight * 0.5 + 100, canvas.width, canvas.height * 0.5);
    }
};

},{}]},{},[1]);
