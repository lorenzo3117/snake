function Food() {
    this.offset = 5
    do {
        this.pos = createVector(round(random(scaleFactor)) * squareSide, round(random(scaleFactor)) * squareSide)
    } while (this.snakePositionCheck) {}

    this.snakePositionCheck = function() {
        for (let i = 0; i < snake.pos.length; i++){
            if (this.pos.x == snake.pos[i].x && this.pos.y == slang.pos[i].y){
                return false
            }
        }
        return true
    }

    this.show = function() {
        image(applePicture, this.pos.x+this.offset, this.pos.y+this.offset, squareSide-this.offset*2, squareSide-this.offset*2)
    }
}