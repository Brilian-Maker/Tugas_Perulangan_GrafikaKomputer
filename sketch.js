function setup() {
  createCanvas(400, 400);
  background('darkgreen');
  let numberOfGhost = 8;
  let ghostSize = 8;
  for (let i = 0; i < numberOfGhost; i++) {
    drawGhost(15 + i * (ghostSize + 40), height / 2, ghostSize);
  }
}

function drawGhost(x, y, size) {
  textSize(25)
  text('👻', x, y, size, size * 5)
}