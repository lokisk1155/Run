const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// dom content loaded event listener ******
    // goes with webpack

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
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0, 1132, 1132, 0, 0, 0, 0, 0, 0, 0, 0,
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
monsterImage.src = 'playerRight.png'

const player = new Player({
    pos: {
        x: canvas.width / 2 - 190 / 4 / 2, 
        y: canvas.height / 2 + 70 / 2
    },
    image: playerImage, 
    frames: {
        max: 4
    }
})

class Monster {
    constructor({pos, image}) {
        this.pos = pos 
        this.image = image 
        this.width = 65
        this.height = 65
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
        this.pos.x += 2
    }

    moveLeft() {
        this.draw()
        this.pos.x -= 2
    }

    moveDown() {
        this.draw()
        this.pos.y += 2 
    }

    moveUp() {
        this.draw()
        this.pos.y -= 2
    }
 }

 const monster = new Monster({
    pos: {
        x: 50,
        y: 50
    }, 
    image: monsterImage
})

class Boundary {
    constructor({pos}) {
        this.pos = pos 
        this.width = 48
        this.height = 48
    }
    
    draw() {
        //ctx.fillStyle = 'red'
        ctx.fillStyle = 'rgba(255, 0, 0, 0)'
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    }
}

const collisionMap = [] 

for (let i = 0; i < collisions.length; i+= 40) {
    collisionMap.push(collisions.slice(i, 40 + i))
}

const boundries = []

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
let previousKey = ''

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
    if (rec1.pos.x < 510 && rec1.pos.x > 495 && rec1.pos.y < 230 && rec1.pos.y > 218) {
        return true
    } else {
        return false 
    }
}

function spawnLeftTop() {
    monster.pos.x = 50
    monster.pos.y = 50
}

function spawnRightBottom() {
    monster.pos.x = 600
    monster.pos.y = 600
}




function helpImStuck(panic) {
    monster.moveDown()

    if (panic > 0) {
        return helpImStuck(panic - 1)
    }
    if (mapY > -500) {
        spawnLeftTop()
    } else {
        spawnRightBottom()
    }
}

let movingAI = true 
let canGoLeft = true 
let canGoRight = true 
let canGoUp = true 
let canGoDown = true 
let prev = [0, 0]

function navigateCollision({rec1, rec2}) {
    prev.push(rec1.pos.x)
    prev.push(rec1.pos.y)

    if (prev[0] === rec1.pos.x && prev[1] === rec1.pos.y) {
        prev.shift()
        prev.shift()
        helpImStuck(50)
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
     


function animate() {
    let requestID = window.requestAnimationFrame(animate)
        ctx.drawImage(map, mapX, mapY)
        boundries.forEach((boundary) => {
            boundary.draw()
        })
        player.draw()
        //player.highlight()
        monster.draw()
        bruteForceChase({rec1: monster, rec2: player})    

        if (gameOver({rec1: monster})) {
            //window.cancelAnimationFrame(requestID)
        }

        let movingPlayer = true 
        //console.log(player.pos.x)  
        //console.log(monster.pos.x) 
        //console.log("--------")
        console.log(mapY, 'y')
        console.log(mapX, 'x')
      
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

animate()
