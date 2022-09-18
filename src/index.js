const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2D')

canvas.width = 1024
canvas.height = 576

ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)

const mapImage = new Image()
mapImage.src = './img/Pellet Town.png'

image.onLoad = () => { 
    ctx.drawImage(mapImage, '750', '-560')
}




