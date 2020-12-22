// console.log('DOM Loaded')
// //
// // let movementDisplay = movement
// //same as let 
// movementDisplay = document.getElementById('movement')
// let game = document.getElementById('game')


// game.getAttribute['width', getComputedStyle(game)['width']]
// game.getAttribute['height', getComputedStyle(game)['height']]
// //sam things
// // game.height = getComputedStyle(game)['height']

// //get some context
// let ctx = game.getContext('2d')

// // //changing Attribute
// // ctx.fillStyle = 'white'
// // ctx.strokeStyle = 'red'
// // ctx.lineWidth = 5

// // //
// // ctx.fillRect(10, 10, 100, 100)
// // ctx.strokeRect(10, 10, 100, 100) 

// // let drawBox = () => {
// //     ctx .fillstyle = 'hotpink'
// //     ctx.fillrect(50, 100, 100, 100)
// // }

// let drawBox = (x, y, size, color) => {
//     ctx .fillStyle = color
//     ctx.fillRect(x, y, size, size)
// }

// game.addEventListener('click', e => {
//     // console.log(e)
//     drawBox(e.offsetX, e.offsetY, 50, 'rebeccapurple')
// })

// // drawBox(30, 30, 81, 'hotpink')
// // drawBox(300, 150, 150, 'chartreuse')

// // addEventListener('click', ()=>{
// //     drawBox()
// // })

// // let ogre = {
// //     x : 10,
// //     y: 10,
// //     color: '#bada55',
// //     width: 40,
// //     height: 80,
// //     alive: true,
// //     render: function() {
// //         ctx.fillStyle = this.color
// //         ctx.fillRect(this.x, this.y, this.width, this.height)
// //     }
// // }

// // let hero = {
// //     x : 50,
// //     y: 50,
// //     color: 'hotpink',
// //     width: 60,
// //     height: 60,
// //     alive: true,
// //     render: function() {
// //         ctx.fillStyle = this.color
// //         ctx.fillRect(this.x, this.y, this.width, this.height)
// //     }
// // }

// // ogre.x = 100
// // ogre.render()
// // hero.render()

// //CONSTRUCTOR FUNCTION
// function Crawler(x, y, color, width, height) {
//     this.x = x
//     this.y = y
//     this.color = color
//     this.width = width
//     this.height = height
//     this.alive = true
//     this.render = function() {
//         ctx.fillStyle = this.color
//         ctx.fillRect(this.x, this.y, this.width, this.height) 
//     }
// }

// let hero = new Crawler(20, 20, 'hotpink', 20, 20) 
// let ogre = new Crawler(10, 10, '#bada55', 40, 80) 

// // ogre.render()
// // hero.render()


//-------


// references to DOM Elements I will use.
// Hot off the press, new way of doing things (let movementDisplay = movement;)
let movementDisplay = document.getElementById('movement')
let game = document.getElementById('game')

game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

// game.width = getComputedStyle(game)['width']
// game.height = getComputedStyle(game)['height']

// Get some Context
let ctx = game.getContext('2d')

// draw a filled box
let drawBox = (x, y, size, color) => {
  ctx.fillStyle = color
  ctx.fillRect(x, y, size, size)
}

// game.addEventListener('click', e => {
//   drawBox(e.offsetX, e.offsetY, 50, 'rebeccapurple')
// })

// Constructor function (JS version of OOP)
// This is a blueprint for a Crawler
function Crawler(x, y, color, width, height) {
  this.x = x
  this.y = y
  this.color = color
  this.width = width
  this.height = height
  this.alive = true
  this.render = function() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

// individual crawler
let hero = new Crawler(20, 20, 'hotpink', 20, 20)
let ogre = new Crawler(10, 10, '#bada55', 60, 120)

// game.addEventListener('click', e => {
//     ctx.clearRect(0, 0, game.width, game.height)
//     hero.x = e.offsetX
//     hero.y = e.offsetY
//     hero.render()
// })

let gameLoop = () => {
    // console.log('LOOPING...')
    //clear canvas
    ctx.clearRect(0, 0, game.width, game.height)
    //display x y coordinates (HERO)
    movementDisplay.innerText = `X: ${hero.x}\nY: ${hero.y}`
    //check if OGRE is alive
    if (ogre.alive) {
        //render OGRE
        ogre.render()
        //check for contact
    }
    //render HERO
    hero.render()
}
//MOVEMENT 
let movementHandler = e => {
    switch(e.key) {
        case 'w':
            // move up
            hero.y -= 10
            break
        case 'a':
            // move left
            hero.x -= 10
            break
        case 's':
            // move down
            hero.y += 10
            break
        case 'd':
            //move right
            hero.x += 10
            break
        default:
            console.log('use: W A S D keys')
    }
    // console.log(e)
    //HERO's moves...
    // if (e.key === 'w') {
    //     hero.y -= 10
    // } else if (e.key === 'a') {
    //     hero.x -= 10
    // }
}

document.addEventListener('keypress', movementHandler)

let gameInterval = setInterval(gameLoop, 17)
