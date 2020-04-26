class Car {
  constructor(game) {
    this.game = game;
    // Car dimensions
    this.carWidth = 50;
    this.carHeight = 100;
    // Car position
    this.x = game.width / 2 - this.carWidth / 2;
    this.y = game.height - this.carHeight;
    // Car Speed
    this.speed = 50;
  }

  draw() {
    const context = this.game.context;
    const carImage = this.game.carImage;

    context.drawImage(carImage, this.x, this.y, this.carWidth, this.carHeight);
  }

  move(direction) {
    if (direction === 'left') {
      this.x -= this.speed;
    } else if (direction === 'right') {
      this.x += this.speed;
    }
  }
}
