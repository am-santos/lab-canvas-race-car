const backgroundImage = new Image();
backgroundImage.src = '../images/road.png';

const carImage = new Image();
carImage.src = '../images/car.png';

class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');

    this.backgroundImage = backgroundImage;
    this.carImage = carImage;

    this.width = $canvas.width;
    this.height = $canvas.height;

    // Game speed, same as obstacles speed towards the car.
    this.speed = 10;

    this.keyMovements();
  }

  reset() {
    this.board = new Board(this);
    this.car = new Car(this);
  }

  createArrayOfObstacles() {
    let obstacles = [];
    for (let i = 0; i < 50; i++) {
      const obstacle = new Obstacles(this);
      obstacle.x = Math.random() * (this.width - obstacle.width);
      obstacle.y = this.height / 2 - i * 2 * obstacle.height;
      obstacles.push(obstacle);
    }

    this.arrayOfObstacles = obstacles;
  }

  loop() {
    this.draw();

    const arrayOfObstacles = this.arrayOfObstacles;
    if (!arrayOfObstacles) {
      this.createArrayOfObstacles();
    } else {
      for (let obstacle of this.arrayOfObstacles) {
        obstacle.move();
        obstacle.draw();
      }
    }

    setTimeout(() => {
      this.loop();
    }, 1000 / 10);
  }

  draw() {
    this.clearEverything();
    this.board.draw();
    this.car.draw();
  }

  clearEverything() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  keyMovements() {
    window.addEventListener('keydown', (event) => {
      const keyCode = event.keyCode;
      switch (keyCode) {
        case 37: // Left
          this.car.move('left');
          this.loop();
          break;
        case 39: // Right
          this.car.move('right');
          this.loop();
          break;
      }
    });
  }
}
