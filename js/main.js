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
