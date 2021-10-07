const canvas= document.getElementById('game-field');
const ctx= canvas.getContext('2d');

let tile_size= 20;
let tileCount= canvas.width/tile_size;

let velocity ={
	x: 0,
	y : 0,
}

let food = {
	x : 15,
	y : 15,
}

let snake =[];

let snakeHead= {
	x:10,
	y:10,
}
let snake_length = 2;

function draw_field(){
	ctx.fillStyle = 'white';
	ctx.fillRect(0,0, canvas.width, canvas.height);
}

function draw_snake(){
	ctx.fillStyle = 'black';

	for(let i=0;i<snake.length;i++){
		ctx.fillRect(snake[i].x* tile_size, snake[i].y*tile_size, tile_size-2, tile_size-2);

		if(snake[i]. x ===snakeHead.x &&
			 snake[i].y===snakeHead.y){

				snake_length= 2;
		}
	}
}

function drawFood(){
	ctx.fillStyle = 'red';
	ctx.fillRect(food.x * tile_size, food.y * tile_size, tile_size-2, tile_size -2)
}

function updateSnakehead(){
	snakeHead.x += velocity.x;
	snakeHead.y += velocity.y;

	if(snakeHead.x<0)
	{
		 snakeHead.x = tileCount - 1;
	}
	if (snakeHead.x> tileCount - 1){
		snakeHead.x=0;
	}
	if(snakeHead.y<0)
	{
		 snakeHead.y = tileCount - 1;
	}
	if (snakeHead.y> tileCount - 1){
		snakeHead.y=0;
	}
}

function updateSnakeBody(){
	snake.push({
		x:snakeHead.x,
		y: snakeHead.y
	})

	while(snake.length> snake_length){
		snake.shift();
	}
}

function PlaceFoodrandom (){
 
	food.x = Math.floor(Math.random*tile_size);
	food.y = Math.floor(Math.random*tile_size)

}

function eatFood(){
	if(food.x===snakeHead.x &&
		food.y===snakeHead.y)
	{
		snakeTail.Count++
		PlaceFoodrandom();

	}
}

const keydownHandlers = {
	'ArrawLeft': ()=>{
		velocity.x = -1;
		velocity.y= 0;
	},
	'ArrowRight': ()=>{
		velocity.x = 1;
		velocity.y= 0;
	},

	'ArrawTop': ()=>{
		velocity.x = 0;
		velocity.y= -1;
	},
	'ArrowBot': ()=>{
		velocity.x = 0;
		velocity.y= 1;
	}

}

function onKeyDown(event){
	 if(keydownHandlers.hasOwnProperty(event.key)){
        keydownHandlers[event.key]()

	 }
}

function updategame(){
	updateSnakehead();

	draw_field();
	draw_snake();

	drawFood();
	eatFood();

	updateSnakeBody();
}

document.addEventListener('keydown', onKeyDown);

setInterval(updategame, 1000/5);
 
//const field = document.createElement('div');
//field.classList.add('field');

//f

//const food = document.createElement('div');
//food.classList.add("food");
