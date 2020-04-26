class Obstacles {
  constructor(game) {
    this.game = game;

    // Obstacle Coordinates
    this.x;
    this.y;

    //Obstacles starting height
    this.startingHeight = this.game.height / 2 - this.height;

    // Obstacles Speed
    // this.speed = 10;
    // Obstacles dimensions
    this.width = 100;
    this.height = 20;

    this.draw();
  }

  draw() {
    const context = this.game.context;

    // x, y , width, height
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.y += this.game.speed;
  }
}
