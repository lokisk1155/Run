const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// dom content loaded event listener ****** popUpWrapper.classList.remove('toggle-modal')
    // goes with webpack popUpWrapper.classList.add('toggle-modal')

canvas.width = 1024
canvas.height = 576

const offset = {
    x: -435,
    y: -450
}

const collisions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]




class Coin {
    constructor({pos, image}) {
        this.pos = pos 
        this.image = image 
        this.width = 48
        this.height = 48
    }
            
    draw() {
        ctx.drawImage(
        this.image,
        this.pos.x, 
        this.pos.y,
        this.width,
        this.height        
        ) 
    }
}

class Winner {
    constructor({pos, image}) {
        this.pos = pos 
        this.image = image 
        this.width = 250
        this.height = 250
    }
            
    draw() {
        ctx.drawImage(
        this.image,
        this.pos.x, 
        this.pos.y,
        this.width,
        this.height        
        ) 
    }
}

// ** took inspiration from sprite class from pokemon video, decided to make each thing its own class instead of putting monsters/players together
class Player {
    constructor({pos, image, frames = { max: 1}, sprites}) {
        this.pos = pos 
        this.image = image
        this.frames = {...frames, val: 0, elapsed: 0}
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max 
            this.height = this.image.height
        }
        this.moving = false 
        this.sprites = sprites
    }
    
    draw() {
        ctx.drawImage(
            this.image, 
            this.frames.val, 
            0,
            this.image.width / this.frames.max,
            this.pos.x,
            canvas.width / 2 - (this.width / 4) / 2, 
            canvas.height / 2 - (this.height / 2),
            this.image.width / this.frames.max,
            350
        )

        if (!this.moving) return 

        if (this.frames.max > 1) {
            this.frames.elapsed++
        }

        if (this.frames.elapsed % 10 === 0) {
            if (this.frames.val < this.frames.max - 1) this.frames.val++
            else this.frames.val = 0 
        }
    }

    // highlight() {
    //     ctx.fillStyle = 'red'
    //     //ctx.fillStyle = 'rgba(255, 0, 0, 0)'
    //     ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    // }

 }

const map = new Image()
map.src = 'finalmap.png'
let mapX = offset.x
let mapY = offset.y 



const playerDown = new Image() 
playerDown.src = 'playerDown.png'

const playerUp = new Image() 
playerUp.src = 'playerUp.png'

const playerRight = new Image() 
playerRight.src = 'playerRight.png'

const playerLeft = new Image() 
playerLeft.src = 'playerleft.png'

const monsterImage = new Image() 
monsterImage.src = 'monster25.png'

const player = new Player({
    pos: {
        x: canvas.width / 2 - 190 / 4 / 2, 
        y: canvas.height / 2 + 70 / 2
    },
    image: playerDown, 
    // ** how to crop the image from pokemon video
    frames: {
        max: 4
    },
    sprites: {
        up: playerUp,
        down: playerDown,
        right: playerRight,
        left: playerLeft 
    }
})

class Monster {
    constructor({pos, image}) {
        this.pos = pos 
        this.image = image 
        this.width = 48
        this.height = 48
    }

    secretCounter = 0

    draw() {
        ctx.drawImage(
            this.image,
            this.pos.x, 
            this.pos.y,
            this.width,
            this.height        
        ) 
    }

    moveRight() {
        this.draw()
        this.pos.x += 2.25
    }

    moveLeft() {
        this.draw()
        this.pos.x -= 2.25
    }

    moveDown() {
        this.draw()
        this.pos.y += 2.25
    }

    moveUp() {
        this.draw()
        this.pos.y -= 2.25
    }
 }

 const monster = new Monster({
    pos: {
        x: 50,
        y: 50
    }, 
    image: monsterImage
})

const coinImage = new Image() 
coinImage.src = 'coin.png'

const coin = new Coin({
    pos: {
        x: 250,
        y: 225, 
    },
    image: coinImage
})

const winnerImage = new Image() 
winnerImage.src = 'winner.png'

const winner = new Winner({
    pos: {
        x: 0,
        y: 0, 
    },
    image: winnerImage

})

// **
class Boundary {
    constructor({pos}) {
        this.pos = pos 
        this.width = 70
        this.height = 70
    }
    
    draw() {
        //ctx.fillStyle = 'red'
        ctx.fillStyle = 'rgba(255, 0, 0, 0)'
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    }
}
// **
const collisionMap = [] 
/* ** When extracting from tiled, you recieve a JSON file of all of your layers represented as an array. We need to convert that into a 2D array that 
represents the size of our map, because inside of tiled, our mapsize is 40x40, we want to create a 2d array where each rows length is only 40  */
for (let i = 0; i < collisions.length; i+= 40) {
    collisionMap.push(collisions.slice(i, 40 + i))
}
// **
const boundries = []
/* ** Peak my collision map, this represents one layer of 
all collision blocks that I placed inside of my grid. We can loop over each row/col and check if each ele is represented as a collision block. If it is 
we want to create a "Boundry" node for that position. */
collisionMap.forEach((row, idx) => {
    row.forEach((ele, jdx) => {
        if (ele === 1132) {
            boundries.push(
                new Boundary({
                    pos: {
                        x: jdx * 48 + offset.x, 
                        y: idx * 48 + offset.y
                    }
                })
            )
        }
    })
})
// const slicedMap = [] 
// let boundaryFound = false 
// for (let i = 0; i < collisions.length; i++) {
//     if (collisions[i] === 1132) boundaryFound = true 
//     if (boundaryFound) slicedMap.push(collisions[i])
// }
// let backwardsFound = false 
// for (let i = slicedMap.length; i > 0; i--) {
//     if (slicedMap[i] === 1132) backwardsFound = true 
//     if (!backwardsFound) slicedMap.pop() 
// }

// ** hold boolean values for player movement logic 
const keyPressed = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false 
    }
}
// ** check what key was pressed first
let previousKey = ''
// ** assign boolean values to true when pressed
window.addEventListener('keydown', (temp) => {
    if (temp.key === 'w') {
        keyPressed.w.pressed = true 
        previousKey = 'w'
    } else if (temp.key === 'a') {
        keyPressed.a.pressed = true 
        previousKey = 'a'
    } else if (temp.key === 's') {
        keyPressed.s.pressed = true 
        previousKey = 's'
    } else if (temp.key === 'd') {
        keyPressed.d.pressed = true 
        previousKey = 'd'
    }
})
// ** assign boolean values to false when no longer pressed
window.addEventListener('keyup', (temp) => {
    if (temp.key === 'w') {
        keyPressed.w.pressed = false 
    } else if (temp.key === 'a') {
        keyPressed.a.pressed = false 
    } else if (temp.key === 's') {
        keyPressed.s.pressed = false 
    } else if (temp.key === 'd') {
        keyPressed.d.pressed = false 
    }
})
// ** check if player or monster is currently in contact with a boundry object
function playerCollision({rec1, rec2}) {
    if (rec1.pos.x + 10 + rec1.width >= rec2.pos.x && 
        rec1.pos.x + 25 <= rec2.pos.x + rec2.width &&
        rec1.pos.y <= rec2.pos.y + 50 + rec2.height &&
        rec1.pos.y - 100 + rec1.height >= rec2.pos.y) {
            return true 
        }
    return false 
}
function monsterCollision({rec1, rec2}) {
    if (rec1.pos.x + rec1.width >= rec2.pos.x && 
        rec1.pos.x <= rec2.pos.x + rec2.width &&
        rec1.pos.y <= rec2.pos.y + rec2.height &&
        rec1.pos.y + rec1.height >= rec2.pos.y) {
            return true 
        }
    return false 
}

function bruteForceChase({rec1, rec2}) {
    for (let i = 0; i < boundries.length; i++) {
        const bound = boundries[i]
        if (monsterCollision({rec1: monster, rec2: bound })) {
            navigateCollision({rec1: monster, rec2: player})
            return
        } 
    }
            if (rec1.pos.x < rec2.pos.x + 15) {
                rec1.moveRight()
                direction = 'right'
            }

            if (rec1.pos.y < rec2.pos.y - 100) {
                rec1.moveDown()
                direction = 'down'
            }

            if (rec1.pos.y > rec2.pos.y - 100) {
                rec1.moveUp()
                direction = 'up'
            }

            if (rec1.pos.x > rec2.pos.x +15) {
                rec1.moveLeft()
                direction = 'left'
            }
    
}

function gameOver({rec1}) {
    if (rec1.pos.x < 520 && rec1.pos.x > 485 && rec1.pos.y < 240 && rec1.pos.y > 205) {
        return true
    } else {
        return false 
    }
}

function score({rec1}) {
    if (rec1.pos.x < 520 && rec1.pos.x > 485 && rec1.pos.y < 240 && rec1.pos.y > 205) {
        return true
    } else {
        return false 
    }
}

function spawnLeftTop({ rec }) {
    rec.pos.x = 75
    rec.pos.y = 75
}

function spawnRightBottom({ rec }) {
    rec.pos.x = 700
    rec.pos.y = 500
}

function spawnLeftBottom({ rec}) {
    rec.pos.x = 100
    rec.pos.y = 500
}

function spawnRightTop({ rec }) {
    rec.pos.x = 650
    rec.pos.y = 300
}

let movingAI = true 
let canGoLeft = true 
let canGoRight = true 
let canGoUp = true 
let canGoDown = true 
let prev = [0, 0]
let prevHor = 'leftop'
let prevVert = 'rightBottom'
let prevdirect = 'top';
let randomX;
let randomY;
function helpImStuck({ rec }) {
    
        if (prevdirect === 'bottom' || mapY > -500) {
            if (prevHor === 'leftTop') {
                spawnRightTop({ rec })
                prevHor= 'rightTop'
                prevdirect = 'top'
            } else {
                spawnLeftTop({ rec })
                prevHor = 'leftTop'
                prevdirect = 'top'
            }
        } else {
            if (prevVert === 'rightBottom') {
                spawnLeftBottom({ rec })
                prevVert = 'leftBottom'
                prevdirect = 'bottom'

            } else {
                spawnRightBottom({ rec })
                prevVert = 'rightBottom'
                prevdirect = 'bottom'
            }
        }
}

function navigateCollision({rec1, rec2}) {
    prev.push(rec1.pos.x)
    prev.push(rec1.pos.y)

    if (prev[0] === rec1.pos.x && prev[1] === rec1.pos.y) {
        prev.shift()
        prev.shift()
        helpImStuck({ rec: rec1 })
        return 
    }  
    prev.shift()
    prev.shift() 

        if ((rec2.pos.y > rec1.pos.y)) {
            for (let i = 0; i < boundries.length; i++) {
                const bound = boundries[i]
                if (
                    monsterCollision({
                        rec1: monster,
                        rec2: {
                            ...bound,
                            pos: {
                                x: bound.pos.x,
                                y: bound.pos.y + 3
                            }
                        }
                    })
                ) {
                    rec1.pos.y += 3
                    canGoUp = true 
                } else {
                    canGoUp = false 
                }
            }
        } 
        if (rec2.pos.y < rec1.pos.y) {
            for (let i = 0; i < boundries.length; i++) {
                const bound = boundries[i]
                if (
                    monsterCollision({
                        rec1: monster,
                        rec2: {
                            ...bound,
                            pos: {
                                x: bound.pos.x,
                                y: bound.pos.y - 3
                            }
                        }
                    })
                ) {
                    rec1.pos.y -= 3
                    canGoDown = true           
                } else {
                    canGoDown = false 
                }
            }
        }

            if (rec2.pos.x < rec1.pos.x + 50) {
                for (let i = 0; i < boundries.length; i++) {
                const bound = boundries[i]
                if (
                    monsterCollision({
                        rec1: monster,
                        rec2: {
                            ...bound,
                            pos: {
                                x: bound.pos.x - 3,
                                y: bound.pos.y
                            }
                        }
                    })
                ) {
                    rec1.pos.x -= 3
                    canGoLeft = true 
                } else {
                    canGoLeft = false
                }
            }
            } 
            
            if (rec2.pos.x > rec1.pos.x + 50) {
                for (let i = 0; i < boundries.length; i++) {
                const bound = boundries[i]
                if (
                    monsterCollision({
                        rec1: monster,
                        rec2: {
                            ...bound,
                            pos: {
                                x: bound.pos.x + 3,
                                y: bound.pos.y
                            }
                        }
                    })
                ) {
                    rec1.pos.x += 3
                    canGoRight = true 
                } else {
                    canGoRight = false 
                }
            }
        } 

}
     

let gameOn = false 
let clockCount = 0 
let direction; 
function animate() {
    let requestID = window.requestAnimationFrame(animate)
        ctx.drawImage(map, mapX, mapY)
        boundries.forEach((boundary) => {
            boundary.draw()
        })
        player.draw()
        //player.highlight()
        monster.draw()
        coin.draw()
        let movingPlayer = true 

    
    if (gameOn === false) {
        ctx.font = '48px serif'
        ctx.strokeText('Press W/A/S/D to Start', 300, 250)
        if (keyPressed.w.pressed || keyPressed.a.pressed || keyPressed.d.pressed || keyPressed.s.pressed) {
            gameOn = true 
        }
    }

    if (gameOn) {
        
        if (score({ rec1: coin })) {
            clockCount += 1 
            if (clockCount === 1) {
                coin.pos.y = 650
            } else if (clockCount === 2) {
                coin.pos.x = 1000
            } else if (clockCount === 3) {
                coin.pos.y = -300
            } else if (clockCount === 4) {
                gameOn = false 
            }
        }

        ctx.strokeText(`${clockCount}`, 520, 200)     
        if (gameOver({rec1: monster})) {
            gameOn = false 
        }

        if (!gameOn) {
            window.cancelAnimationFrame(requestID)
            ctx.font = '120px Georgia'
            ctx.fillStyle = 'red'
            if (clockCount === 4) {
                winner.draw() 
                ctx.fillText('Winner!' ,300, 125)
            } else {
                ctx.fillText('You got Striked' , 100, 275)
            }
            gameOn = true 
            setTimeout(() => location.reload(), 4000)
        }
        bruteForceChase({rec1: monster, rec2: player})

        /*  368-454 **
            492-593 **
            First check if any of our keys inside our keyPressed Object have a value set to true. If Its set to true and our 
            previous key is equal to that true value, enter inside that conditional statement. Before we do anything we need to check
            if moving in the direction of our key will cause a collision. To do this we loop over every single boundary and check if 
            the direction we want to go will cause a collision or not. If it does not, we will move the map, monster, and boundaries to 
            make it seem like our character is moving in that direction. If it will cause a collision, we will break out of the if statement.
        */
       player.moving = false 
        if (keyPressed.w.pressed && previousKey === 'w') {
            player.moving = true 
            player.image = player.sprites.up
            for (let i = 0; i < boundries.length; i++) {
                const bound = boundries[i]

                if (
                    playerCollision({
                        rec1: player,
                        rec2: {
                            ...bound,
                            pos: {
                                x: bound.pos.x,
                                y: bound.pos.y + 3
                            }
                        }
                    })
                ) {
                    movingPlayer = false 
                    break
                }
            } 
            if (movingPlayer) {
                boundries.forEach((ele) => {
                    ele.pos.y += 3
                    
                })
                mapY += 3
                monster.pos.y += 3
                coin.pos.y += 3
                
            }
        } else if (keyPressed.d.pressed && previousKey === 'd') {
            player.moving = true 
            player.image = player.sprites.right
            for (let i = 0; i < boundries.length; i++) {
                const bound = boundries[i]

                if (
                    playerCollision({
                        rec1: player,
                        rec2: {
                            ...bound,
                            pos: {
                                x: bound.pos.x - 3,
                                y: bound.pos.y 
                            }
                        }
                    })
                ) {
                    movingPlayer = false 
                    break
                }
            } 
            if (movingPlayer) {
                boundries.forEach((ele) => {
                    ele.pos.x -= 3
                })
                mapX -= 3
                monster.pos.x -= 3
                coin.pos.x -= 3
            }     
        } else if (keyPressed.a.pressed && previousKey === 'a') {
            player.moving = true 
            player.image = player.sprites.left
            for (let i = 0; i < boundries.length; i++) {
                const bound = boundries[i]

                if (
                    playerCollision({
                        rec1: player,
                        rec2: {
                            ...bound,
                            pos: {
                                x: bound.pos.x + 3,
                                y: bound.pos.y 
                            }
                        }
                    })
                ) {
                    movingPlayer = false 
                    break
                }
            } 
            
            if (movingPlayer) {
                boundries.forEach((ele) => {
                    ele.pos.x += 3
                })
                mapX += 3
                monster.pos.x += 3
                coin.pos.x += 3
            }
        } else if (keyPressed.s.pressed && previousKey === 's') {
            player.moving = true 
            player.image = player.sprites.down
            for (let i = 0; i < boundries.length; i++) {
                const bound = boundries[i]

                if (
                    playerCollision({
                        rec1: player,
                        rec2: {
                            ...bound,
                            pos: {
                                x: bound.pos.x,
                                y: bound.pos.y - 3
                            }
                        }
                    })
                ) {
                    movingPlayer = false 
                    break
                }
            } 

            if (movingPlayer) {
                boundries.forEach((ele) => {
                    ele.pos.y -= 3
                })
                mapY -= 3
                monster.pos.y -= 3
                coin.pos.y -= 3
            }
        }
    }
    
}

animate()
