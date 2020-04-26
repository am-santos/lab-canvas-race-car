class Board {
  constructor(game) {
    this.game = game;
  }

  draw() {
    const context = this.game.context;
    const backgroundImage = this.game.backgroundImage;

    context.drawImage(backgroundImage, 0, 0, this.game.width, this.game.height);
    /* backgroundImage.addEventListener('load', () => {
      console.log('image is loaded');
    }); */
  }
}
