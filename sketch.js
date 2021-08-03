var boy, boy_running, boy_collided;
var ground, invisibleWall1 , invisibleWall2, groundImage;

function preload() {
    boy_running = loadAnimation("Runner-1.png", "Runner-2.png");
    groundImage = loadImage("path.png");
}

function setup() {
    createCanvas(300, 500);
    
    //create a boy sprite
    boy = createSprite(50,400,20,50);
    boy.addAnimation("running",boy_running);
    boy.scale = 0.05;
    
    //create a ground sprite
    ground = createSprite(145,250,400,10);
    ground.addImage("path",groundImage);
    ground.y = ground.height /2;
    ground.velocityY = -7;

    //fake walls
    invisibleWall1 = createSprite(-10,250,10,1000)
    invisibleWall1.visible = false
    invisibleWall2 = createSprite(310,250,10,1000)
    invisibleWall2.visible = false
}

function draw() {
    background(220);
    console.log(boy.x)
    boy.x = mouseX
    
    if (ground.y < 0) {
    ground.y = ground.height/2;
    }
    boy.collide(invisibleWall1);
    boy.collide(invisibleWall2); 

    boy.depth = ground.depth + 1
    drawSprites();
}