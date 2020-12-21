console.log('DOM Loaded')
//
let movementDisplay = movement
//same as let 
//movementDisplay = document.getElementById('movement')
let game = document.getElementById('game')

//
game.getAttribute['width', '800px']
game.height = '400'

//get some context
let ctx = game.getContext('2d')

//changing Attribute
ctx.fillStyle = 'white'
ctx.strokeStyle = 'red'
ctx.lineWidth = 5

//
ctx.fillRect(10, 10, 100, 100)
ctx.strokeRect(10, 10, 100, 100) 