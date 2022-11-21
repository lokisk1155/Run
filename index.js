const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// dom content loaded event listener ******
    // goes with webpack


 
// const popUpWrapper = document.querySelector('pop-up-wrapper')
// const closeButton = document.getElementById('close-pop-up-button')

// closeButton.addEventListener('click', () => {
//     popUpWrapper.classList.add('toggle-modal')
// })

// popUpInstructions.addEventListener('click', () => {
//     popUpWrapper.classList.remove('toggle-modal')
// })
// const popUpInstructions = document.getElementById('pop-up-button')

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

// ** took inspiration from sprite class from pokemon video, decided to make each thing its own class instead of putting monsters/players together
class Player {
    constructor({pos, image, frames = { max: 1}}) {
        this.pos = pos 
        this.image = image
        this.frames = frames
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max 
            this.height = this.image.height
        }
    }
    
    draw() {
        ctx.drawImage(
            this.image, 
            0, 
            0,
            this.image.width / this.frames.max,
            this.pos.x,
            canvas.width / 2 - (this.width / 4) / 2, 
            canvas.height / 2 - (this.height / 2),
            this.image.width / this.frames.max,
            350
        )
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

const playerImage = new Image() 
playerImage.src = 'playerDown.png'

const monsterImage = new Image() 
monsterImage.src = 'monster25.png'

const player = new Player({
    pos: {
        x: canvas.width / 2 - 190 / 4 / 2, 
        y: canvas.height / 2 + 70 / 2
    },
    image: playerImage, 
    // ** how to crop the image from pokemon video
    frames: {
        max: 4
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
        this.pos.x += 2.5
    }

    moveLeft() {
        this.draw()
        this.pos.x -= 2.5
    }

    moveDown() {
        this.draw()
        this.pos.y += 2.5
    }

    moveUp() {
        this.draw()
        this.pos.y -= 2.5
    }
 }

 const monster = new Monster({
    pos: {
        x: 50,
        y: 50
    }, 
    image: monsterImage
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
            }

            if (rec1.pos.y < rec2.pos.y - 100) {
                rec1.moveDown()
            }

            if (rec1.pos.y > rec2.pos.y - 100) {
                rec1.moveUp()
            }

            if (rec1.pos.x > rec2.pos.x +15) {
                rec1.moveLeft()
            }
    
}

function gameOver({rec1}) {
    if (rec1.pos.x < 520 && rec1.pos.x > 485 && rec1.pos.y < 240 && rec1.pos.y > 205) {
        return true
    } else {
        return false 
    }
}

function spawnLeftTop() {
    monster.pos.x = 75
    monster.pos.y = 75
}

function spawnRightBottom() {
    monster.pos.x = 700
    monster.pos.y = 500
}

function spawnLeftBottom() {
    monster.pos.x = 100
    monster.pos.y = 500
}

function spawnRightTop() {
    monster.pos.x = 650
    monster.pos.y = 300
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
function helpImStuck() {
    
        if (prevdirect === 'bottom' || mapY > -500) {
            if (prevHor === 'leftTop') {
                spawnRightTop()
                prevHor= 'rightTop'
                prevdirect = 'top'
            } else {
                spawnLeftTop()
                prevHor = 'leftTop'
                prevdirect = 'top'
            }
        } else {
            if (prevVert === 'rightBottom') {
                spawnLeftBottom()
                prevVert = 'leftBottom'
                prevdirect = 'bottom'

            } else {
                spawnRightBottom()
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
        helpImStuck()
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
function animate() {
    let requestID = window.requestAnimationFrame(animate)
        ctx.drawImage(map, mapX, mapY)
        boundries.forEach((boundary) => {
            boundary.draw()
        })
        player.draw()
        //player.highlight()
        monster.draw()
        let movingPlayer = true 
    
    if (gameOn === false) {
        ctx.font = '48px serif'
        ctx.strokeText('Press W/A/S/D to Start', 300, 250)
        if (keyPressed.w.pressed || keyPressed.a.pressed || keyPressed.d.pressed || keyPressed.s.pressed) {
            gameOn = true 
        }
    }

    if (gameOn) {
        if (gameOver({rec1: monster})) {
            window.cancelAnimationFrame(requestID)
            ctx.font = '48px serif';
            ctx.strokeText('You got Striked' ,380, 175)
            gameOn = false 
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
        if (keyPressed.w.pressed && previousKey === 'w') {

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
                
            }
        } else if (keyPressed.d.pressed && previousKey === 'd') {
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
            }     
        } else if (keyPressed.a.pressed && previousKey === 'a') {
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
            }
        } else if (keyPressed.s.pressed && previousKey === 's') {
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
            }
        }
    }
    
}

animate()
