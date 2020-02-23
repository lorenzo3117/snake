function Snake() {
    this.pos = []
    this.pos[0] = createVector(0, 0)
    this.posTemp = this.pos.slice()
    this.speed = createVector(0, 0)
    this.move = []
    this.move.push(true)

    this.setDirection = function(x, y) {
        this.speed.x = x*squareSide
        this.speed.y = y*squareSide
    }

    this.updatePosition = function() {
        for (let i = this.pos.length - 1; i > 0; i--) {
            if (!this.move[i]) {
                this.move[i] = true
            } else {
                this.pos[i].x = this.posTemp[i - 1].x
                this.pos[i].y = this.posTemp[i - 1].y
            }
        }
        this.posTemp = this.pos.slice()
        this.pos[0].add(this.speed)
    }

    this.show = function() {
        image(snakeHead, this.pos[0].x, this.pos[0].y, squareSide, squareSide)
        for (let i = 1; i < this.pos.length; i++) {
            green = 190 * i / (this.pos.length+3)
            fill(0, green, 0)
            rect(this.pos[i].x, this.pos[i].y, squareSide, squareSide)
        }
    }

    this.foodEaten = function() {
        this.pos.push(createVector(this.pos[this.pos.length-1].x, this.pos[this.pos.length-1].y,))
        food = new Food()
    }

    this.crashed = function() {
        for (let i = 2; i < this.pos.length; i++) {
            if (this.pos[0].x == this.pos[i].x && this.pos[0].y == this.pos[i].y)
                return true
        }
        return false
    }

    this.outsideArea = function() {
        if (this.pos[0].x < 0 || this.pos[0].x > width-squareSide || this.pos[0].y < 0 || this.pos[0].y > height-squareSide) {
            return true
        } else {
            return false
        }
    }
}

function keyPressed() {
    switch (keyCode) {
        case UP_ARROW:
            if (snake.speed.y <= 0) {
                snake.setDirection(0, -1)
            }
            break;
        case DOWN_ARROW:
            if (snake.speed.y >= 0) {
                snake.setDirection(0, 1)
            }
            break
        case RIGHT_ARROW:
            if (snake.speed.x >= 0) {
                snake.setDirection(1, 0)
            }
            break
        case LEFT_ARROW:
            if (snake.speed.x <= 0) {
                snake.setDirection(-1, 0)
            }
            break
        default:
            break;
    }
}