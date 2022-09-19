const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = 'map.png'

const playerImage = new Image() 
playerImage.src = 'playerDown.png'

image.onload = () => { 
    ctx.drawImage(image, 0, 0)
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
}






