var cat,catWalk,catSit,catCollide;
var mouse,mouseCheese,mouseDance,mouseCollide;
var bg,bg_image;

function preload() {
    catWalk = loadAnimation("images/cat2.png","images/cat3.png");
    catSit = loadAnimation("images/cat1.png");
    catCollide = loadAnimation("images/cat4.png");

    mouseDance = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseCheese = loadAnimation("images/mouse1.png");
    mouseCollide = loadAnimation("images/mouse4.png")
    
    bg_image = loadImage("images/garden.png");
}

function setup(){
    createCanvas(400,400);
    
    bg = createSprite(200,200,20,20);
    bg.addImage(bg_image);
    bg.scale=0.57

    mouse = createSprite(50,340,20,20);
    mouse.addAnimation('collide',mouseCollide);
    mouse.addAnimation('dance',mouseDance);
    mouse.addAnimation('cheese',mouseCheese);
    mouse.scale=0.1;

    cat = createSprite(340,340,20,20);
    cat.addAnimation('sit',catSit);
    cat.addAnimation('walk',catWalk);
    cat.addAnimation('collide',catCollide);
    cat.scale=0.1;

    mouse.setCollider("rectangle",0,0,500,800);
    mouse.debug = false;

    cat.setCollider("rectangle",0,0,950,500);
    cat.debug = false;

    console.log(cat.x)
}

function draw() {

    background("black");

    if(cat.x<50){
        cat.velocityX=0;
        cat.changeAnimation('collide',catCollide);
        mouse.x=110;;

    }

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.changeAnimation('cheese',mouseCheese);

    }

    keyPressed();

    drawSprites();
}

function keyPressed(){
    if(keyDown("left")){
        cat.velocityX=-2;
        cat.changeAnimation('walk',catWalk);
        mouse.changeAnimation('dance',mouseDance)
    }
}