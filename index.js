const collisions = [0, 0, 0, 0, 0, 0, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 1128, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1128, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 1128, 1128, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 1128, 1128, 1128, 1128, 1128, 1128, 1128, 0, 0, 0, 0, 0, 0,
    0, 0, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 0, 0, 0, 0, 0,
    0, 0, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0, 0, 0, 0,
    0, 0, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 0, 0, 0, 0,
    1128, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0, 0, 0,
    1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0, 0,
    1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 0, 0,
    1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0,
    1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0,
    1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0,
    1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0,
    1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 0,
    1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128,
    0, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128,
    0, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128,
    0, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128,
    0, 0, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128,
    0, 0, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128,
    0, 0, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128,
    0, 0, 0, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128,
    0, 0, 0, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0,
    0, 0, 0, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 0,
    0, 0, 0, 0, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0,
    0, 0, 0, 0, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0,
    0, 0, 0, 0, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0,
    0, 0, 0, 0, 0, 1128, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 1128, 1128, 1128, 1128, 1128, 1128, 0, 0, 0, 0, 0, 1128, 1128, 1128, 1128, 1128, 1128, 1128, 0, 0, 0, 0, 0, 1128, 1128, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1128, 1128, 1128, 1128, 1128, 1128, 1128, 0, 0, 0, 0, 0, 1128, 1128, 1128, 1128, 1128, 1128, 1128, 0, 0, 0, 0]

class Boundary {
    constructor({pos}) {
        this.pos = pos 
    }
    
    draw() {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    }
}
    
const collisionMap = [] 

for (let i = 0; i < collisions.length; i+= 40) {
    collisionMap.push(collisions.slice(i, 40 + i))
}
    
const boundries = [] 

const offset = {
    x: -450,
    y: -450
}
    
collisionMap.forEach((row, idx) => {
    row.forEach((ele, jdx) => {
    if (ele === 1128) {
        boundries.push(new Boundary({pos: {x: jdx * 48 + offset.x, y: idx * 48 + offset.y}}))
    }})
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
        console.log('poop')
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

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const map = new Image()
map.src = 'map.png'
let mapX = offset.x
let mapY = offset.y

const playerImage = new Image() 
playerImage.src = 'playerDown.png'

function animate() {
    window.requestAnimationFrame(animate)
        ctx.drawImage(map, mapX, mapY)
        boundries.forEach((boundary) => {
            boundary.draw()
        })
        ctx.drawImage(
            playerImage, 
            0, 
            0,
            playerImage.width / 4,
            playerImage.height,
            canvas.width / 2 - (playerImage.width / 4) / 2, 
            canvas.height / 2 - playerImage.height / 2,
            playerImage.width / 4,
            playerImage.height
        )

        if (keyPressed.w.pressed) {
            mapY += 3
        } else if (keyPressed.d.pressed) {
            mapX -= 3
        } else if (keyPressed.a.pressed) {
            mapX += 3
        } else if (keyPressed.s.pressed) {
            mapY -= 3
        }
}
animate()





// const boundries = []
// for (let row = 0; row < collisionMap.length; row++) {
//     for (let col = 0; col < row.length; col++) {
//         boundries.push(new Boundary({
//             pos: {
//                 x: row * 48, 
//                 y: col * 48 
//             }
//         }))
//     }
// }

// image.onload = () => { 
//     ctx.drawImage(image, 0, 0)
//     ctx.drawImage(
//         playerImage, 
//         0, 
//         0,
//         playerImage.width / 4,
//         playerImage.height,
//         canvas.width / 2 - (playerImage.width / 4) / 2, 
//         canvas.height / 2 - playerImage.height / 2,
//         playerImage.width / 4,
//         playerImage.height
//         )
// }

// function animate() {
//     window.requestAnimationFrame(animate)
//     map.p()
//     ctx.drawImage(
//         playerImage, 
//         0, 
//         0,
//         playerImage.width / 4,
//         playerImage.height,
//         canvas.width / 2 - (playerImage.width / 4) / 2, 
//         canvas.height / 2 - playerImage.height / 2,
//         playerImage.width / 4,
//         playerImage.height
//     )

//     if (keys.w.pressed) {
//         map.pos.y += 3
//     } else if (keys.a.pressed) {
//         map.pos.x += 3 
//     } else if (keys.s.pressed) {
//         map.pos.y -= 3 
//     } else if (keys.d.pressed) {
//         map.pos.x -= 3 
//     }
// }
// animate()

