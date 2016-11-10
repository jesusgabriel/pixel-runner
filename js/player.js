var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");

document.addEventListener("keydown", function(ev){
  if (ev.keyCode ===32) {
    player.velY = -10;
  }
});

var player = {
    x: 50,
    y: window.innerHeight * 0.5,
    velY: 10,
    sprite: f1,
    numUpdates: 0,
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
        if (this.y >= window.innerHeight * 0.5) {
            this.y = window.innerHeight * 0.5;
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
