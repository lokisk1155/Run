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

ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)

const map = new Image()
map.src = 'map.png'
let mapX = 0 
let mapY = 0

const playerImage = new Image() 
playerImage.src = 'playerDown.png'

function animate() {
    window.requestAnimationFrame(animate)
        ctx.drawImage(map, mapX, mapY)
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

