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
