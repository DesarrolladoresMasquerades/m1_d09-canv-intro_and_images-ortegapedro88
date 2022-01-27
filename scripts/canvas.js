 const canvas = document.querySelector("canvas")

 canvas.width = 1000
 canvas.height = 500

const ctx = canvas.getContext("2d")

// // // console.log(ctx)

ctx.fillStyle = "orange"
ctx.fillRect(0, 0, 1000, 500)

ctx.beginPath();
ctx.moveTo(0,50)
ctx.lineTo(50, 50)
ctx.strokeStyle = "white"
ctx.lineWidth = 5
ctx.stroke()


ctx.beginPath();
ctx.moveTo(0,450)
ctx.lineTo(50, 450)
ctx.strokeStyle = "white"
ctx.lineWidth = 5
ctx.stroke()

ctx.beginPath()
ctx.arc(50, 250, 200, (Math.PI/180)*270 ,(Math.PI/180)*90, false)
ctx.stroke()

ctx.beginPath()
ctx.arc(950, 250, 200, (Math.PI/180)*270 ,(Math.PI/180)*90, true)
ctx.stroke()


ctx.beginPath();
ctx.moveTo(950,50)
ctx.lineTo(1000, 50)
ctx.strokeStyle = "white"
ctx.lineWidth = 5
ctx.stroke()


ctx.beginPath();
ctx.moveTo(950,450)
ctx.lineTo(1000, 450)
ctx.strokeStyle = "white"
ctx.lineWidth = 5
ctx.stroke()





ctx.beginPath()
ctx.arc(500, 250, 80, 0, Math.PI*2, false)
ctx.strokeStyle = "white"
ctx.fillStyle = "brown"
ctx.fill()
ctx.stroke()

ctx.beginPath();
ctx.moveTo(500,0)
ctx.lineTo(500, 500)
ctx.strokeStyle = "white"
ctx.lineWidth = 5
ctx.stroke()




// // ctx.fillRect(200, 100, 100, 100)
// // ctx.fillStyle = "red"
// // ctx.fillRect(300, 100, 100, 100)
// // ctx.fillStyle = "blue"
// // ctx.fillRect(400, 100, 100, 100)
// // ctx.fillStyle = "red"
// // ctx.fillRect(500, 100, 100, 100)

// // ctx.beginPath();
// // ctx.moveTo(50,300)
// // ctx.lineTo(300, 100)
// // ctx.lineTo(300,400)
// // ctx.strokeStyle = "red"
// // ctx.stroke()

// // ctx.beginPath();
// // ctx.moveTo(300,400)
// // ctx.lineTo(500, 700)
// // ctx.lineTo(350,20)
// // ctx.strokeStyle = "blue"
// // ctx.stroke()

// // ctx.beginPath()
// // ctx.arc(700, 1000, 100, 0, Math.PI * 2, false)
// // ctx.stroke()
// // ctx.beginPath()
// // ctx.arc(780, 1100, 100, 0, Math.PI * 2, false)
// // ctx.stroke()
// // ctx.beginPath()
// // ctx.arc(860, 1000, 100, 0, Math.PI * 2, false)
// // ctx.stroke()
// // ctx.beginPath()
// // ctx.arc(940, 1100, 100, 0, Math.PI * 2, false)
// // ctx.stroke()
// // ctx.beginPath()
// // ctx.arc(1020, 1000, 100, 0, Math.PI * 2, false)
// // ctx.stroke()



// for(let i=0; i< 89; i++){
//     let x = Math.random()* canvas.width
//     let y = Math.random()* canvas.height
//     ctx.beginPath()
//     ctx.arc(x, y, 30, 0, Math.PI*2, false)
//     ctx.stroke()
// }