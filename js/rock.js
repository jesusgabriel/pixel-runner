var rock = {
    x: 600,
    y: window.innerHeight * 0.5,

    update: function() {
        this.x -= 3;
        if (this.x < 0) {
            this.x = 500;
        }
    },

    render: function(ctx) {
      ctx.fillRect(this.x, this.y, 100, 100);
    }
  };
var rock2 = {
    x: 800,
    y: window.innerHeight * 0.5,

    update: function() {
        this.x -= 3;
        if (this.x < 0) {
            this.x = 500;
        }
    },


    render: function(ctx) {
        ctx.fillRect(this.x, this.y, 100, 100);
    }
};


module.exports = [rock, rock2];
