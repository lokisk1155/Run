const canvas = document.querySelector('canvas')

canvas.width = 1024
canvas.height = 576

const ctx = canvas.getContext('2d')

ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = 'PelletTown.png'


image.onLoad = () => { 
    console.log(ctx)
    ctx.drawImage(image, 0, 0)
}






