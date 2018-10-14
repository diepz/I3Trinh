const TANK_WIDTH = 20;
const TANK_HEIGHT = 20;
const BARREL_WIDTH = 10;


function Tank(x,y,board) {
	this.x = x;
	this.y = y;
	this.board = board;
	this.speed = 10;
	this.setX = function(x) {
		return this.x;
	};
	this.setY = function(y) {
		return this.y;
	};

	this.render = function(canvas) {
		var context = canvas.getContext('2d');
		context.clearRect(0,0,500,500);
		context.beginPath();
		context.fillStyle = "red";
		context.fillRect(this.x,this.y,TANK_WIDTH,TANK_HEIGHT);
		context.fill();
	};

	this.moveRight = function() {
		this.x += this.speed;
		// if (this.x <= this.board.getWidth() - this.speed - TANK_WIDTH - BARREL_WIDTH) {
		// 	this.x += this.speed;
		// }
		this.render(canvas);
	};
	this.moveLeft = function() {
		this.x -= this.speed;
		this.render(canvas);
	};
	this.moveUp = function() {
		this.y -= this.speed;
		// if (this.y >= 490) {
		// 	this.y = 0;
		// }
		this.render(canvas);
	};

	// this.getWidth = function() {
	// 	return this.canvas.width;
	// }
	this.moveDown = function() {
		this.y += this.speed;
		this.render(canvas);
	};

	

      

}; 

var tank = new Tank(50,50);
var canvas = document.getElementById('myCanvas');
tank.render(canvas);



function move (event) {
	if (event.which === 39) {
		tank.moveRight();
	} else if (event.which === 37) {
		tank.moveLeft();
	} else if (event.which === 38) {
		tank.moveUp();
	} else if (event.which === 40) {
		tank.moveDown();
	} else if (event.which === 68) {
		tank.moveRight();
	} else if (event.which === 65) {
		tank.moveLeft();
	} else if (event.which === 83) {
		tank.moveDown();
	} else if (event.which === 87) {
		tank.moveUp();
	}


};


var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10;


function draw() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    // player1Tank();
   theBall();
}

//game refresh loop
setInterval(draw, 10);

// var tank1x = 0;
// var tank1y = 0;
// function player1Tank() {

//     //player 1 tank
//     drawRect(tank1x, tank1y, 50, 50, "#FF0000");



function theBall() {
    drawCirc(x, y, ballRadius, "green");
    // x += dx;
    // for (var i = theBall.length + 1; i >= 0; i--) {
    	 if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;
    // }
    // if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    //     dx = -dx;
    // }
    // if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    //     dy = -dy;
    // }

    // x += dx;
    // y += dy;
}

// // function drawRect(x, y, width, height, color) {
// //     ctx.beginPath();
// //     ctx.rect(x, y, width, height);
// //     ctx.fillStyle = color;
// //     ctx.fill();
// //     ctx.closePath();
// }

function drawCirc(x, y, rad, color) {
    context.beginPath();
    context.arc(x, y, rad, 0, Math.PI * 2, false);
    context.fillStyle = color;
    context.fill();
    context.closePath();
}








// function move(event) {
// 	switch(event.keypressed) {
// 		case 39:
// 			tank.moveRight();
// 			// this.render(canvas);
// 			break;
// 		case 37:
// 			tank.moveLeft();
// 			// this.render(canvas);
// 			break;
// 		case 38:
// 			tank.moveDown();
// 			// this.render(canvas);
// 			break;
// 		case 40:
// 			tank.moveUp();
// 			// this.render(canvas);
// 			break;
// 	}
	
// };



















