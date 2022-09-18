const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2D')

canvas.width = 600
canvas.height = 600

ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)

const mapImage = new Image(); mapImage.src = 'image go here'
const playerImage = new Image(); playerImage.src = 'image go here'

image.onLoad = () => { 
    ctx.drawImage(mapImage, 'idk', 'idk')
    ctx.drawImage(playerImage, 
        0, // crop player image here
        0,
        0, 
        0, 
        canvas.width / 2 - playerImage.width / 2, 
        canvas.height / 2 - playerImage.height / 2)
}




