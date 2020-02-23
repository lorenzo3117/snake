let snake
let food
let points = 0
let applePicture
let snakeHead
let scaleFactor = 10
let squareSide = scaleFactor*5

function preload() {
    applePicture = loadImage('assets/apple.png')
    snakeHead = loadImage('assets/snakeHead.jpg')
}

function setup() {
    createCanvas(scaleFactor*80, scaleFactor*80)
    noStroke()
    frameRate(8)
    textSize(40)
    textAlign(RIGHT, TOP)
    snake = new Snake()
    food = new Food()
}

function draw() {
    makeGrid()
    food.show()
    snake.show()
    snake.updatePosition()

    // Check if snake ate food
    if (snake.pos[0].x == food.pos.x && snake.pos[0].y == food.pos.y) {
        snake.foodEaten()
        points++
    }

    // Check if game is lost
    if (snake.outsideArea() || snake.crashed()) {
        snake = new Snake()
        points = 0
    }

    fill(255)
    text(snake.pos.length-1, width-6, 7)
}

function makeGrid() {
    let count = 1
    for (let i = 0; i < width; i += squareSide) {
        for (let j = 0; j < height; j += squareSide) {
            if (count % 2 == 0) {
                fill(50)
            } else {
                fill(70)
            }
            rect(i, j, squareSide, squareSide)    
            count++
        }
        count++ 
    }
}