class Obstacles {
  constructor(game) {
    this.game = game;

    // Obstacle Coordinates
    this.x;
    this.y;

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

  checkCollision() {
    // return true or false
    const car = this.game.car;
    return (
      this.y + this.height > car.y && // bottom side of Obstacle > Upper side of Car
      this.x + this.width > car.x && // right side of Obstacle > Left side of Car
      this.x > car.x + car.carWidth // left side of Obstacle < Right side of Car
    );
  }
}
