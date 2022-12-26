let sound = [];
let animation = [];
const max_anim = 12; 	//define how many animation can be played at the same time (overlapped)

function preload(){
    
	sound[0] = loadSound('./sounds/se01.wav');
	sound[1] = loadSound('./sounds/se02.wav');
	sound[2] = loadSound('./sounds/se03.wav');
	sound[3] = loadSound('./sounds/se04.wav');
	sound[4] = loadSound('./sounds/se05.wav');
	sound[5] = loadSound('./sounds/se06.wav');	
	sound[6] = loadSound('./sounds/se07.wav');
	sound[7] = loadSound('./sounds/se08.wav');
	sound[8] = loadSound('./sounds/se09.wav');
	sound[9] = loadSound('./sounds/se10.wav');
	sound[10] = loadSound('./sounds/se11.wav');
	sound[11] = loadSound('./sounds/se12.wav');
	sound[12] = loadSound('./sounds/se13.wav');
	sound[13] = loadSound('./sounds/se14.wav');
	sound[14] = loadSound('./sounds/se15.wav');
	sound[15] = loadSound('./sounds/se16.wav');
	sound[16] = loadSound('./sounds/se17.wav');
	sound[17] = loadSound('./sounds/se18.wav');	
	sound[18] = loadSound('./sounds/se19.wav');
	sound[19] = loadSound('./sounds/se20.wav');
	sound[20] = loadSound('./sounds/se21.wav');
	sound[21] = loadSound('./sounds/se22.wav');
	sound[22] = loadSound('./sounds/se23.wav');
	sound[23] = loadSound('./sounds/se24.wav');		
	sound[24] = loadSound('./sounds/se25.wav');
	sound[25] = loadSound('./sounds/se26.wav');	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	colorMode(HSB, 360, 100, 100, 100);
	noStroke();
}

function draw() {
	background(50, 10, 100);
	for(let i =0; i < animation.length; i++){
		animation[i].draw();
	}
}

function keyTyped(){
	
	//animation.push -> add animation at the end of number sequence
	
	if (key == 'a'){
		sound[0].play();
		animation.push (new Anim_a());
	} else if (key == 's'){
		sound[1].play();
		animation.push (new Anim_s());
	} else if (key == 'd'){
		sound[2].play();
		animation.push (new Anim_d());	
	} else if (key == 'f'){
		sound[3].play();
		animation.push (new Anim_f());	
	} else if (key == 'g'){
		sound[4].play();
		animation.push (new Anim_g());
	} else if (key == 'h'){
		sound[5].play();
		animation.push (new Anim_h());
	}else if (key == 'j'){
		sound[6].play();
		animation.push (new Anim_j());
	} else if (key == 'k'){
		sound[7].play();
		animation.push (new Anim_k());	
	} else if (key == 'l'){
		sound[8].play();
		animation.push (new Anim_l());	
	} else if (key == 'q'){
		sound[9].play();
		animation.push (new Anim_q());
	} else if (key == 'w'){
		sound[10].play();
		animation.push (new Anim_w());
	}else if (key == 'e'){
		sound[11].play();
		animation.push (new Anim_e());
	} else if (key == 'r'){
		sound[12].play();
		animation.push (new Anim_r());	
	} else if (key == 't'){
		sound[13].play();
		animation.push (new Anim_t());	
	} else if (key == 'y'){
		sound[14].play();
		animation.push (new Anim_y());
	} else if (key == 'u'){
		sound[15].play();
		animation.push (new Anim_u());
	}else if (key == 'i'){
		sound[16].play();
		animation.push (new Anim_i());
	} else if (key == 'o'){
		sound[17].play();
		animation.push (new Anim_o());	
	} else if (key == 'p'){
		sound[18].play();
		animation.push (new Anim_p());	
	} else if (key == 'z'){
		sound[19].play();
		animation.push (new Anim_z());
	} else if (key == 'x'){
		sound[20].play();
		animation.push (new Anim_x());
	}else if (key == 'c'){
		sound[21].play();
		animation.push (new Anim_c());
	} else if (key == 'v'){
		sound[22].play();
		animation.push (new Anim_v());	
	} else if (key == 'b'){
		sound[23].play();
		animation.push (new Anim_b());	
	} else if (key == 'n'){
		sound[24].play();
		animation.push (new Anim_n());
	} else if (key == 'm'){
		sound[25].play();
		animation.push (new Anim_m());
	}
	
	
 //if length of number sequence exceeds max_anim, delete the oldest number
	
	if(animation.length > max_anim) {
		animation.splice(1,1);
	}
}


 //define animations (a-z) below

class Anim_a {
	constructor(){
		this.diameter = 0;
		this.alpha = 100;
		this.position = createVector(random(width), random(height));
	}
	draw(){
		fill(330, 40, 80, this.alpha);
		circle(this.position.x, this.position.y, this.diameter);
		this.diameter += 10;
		this.alpha -= 1; 
	}
}
class Anim_s {
	constructor(){
		this.xPos = 0;	
	}
	draw(){
		fill(50, 80, 80);
		rect(this.xPos, 0, 20, height);
		this.xPos += 50;
	}
}
class Anim_d {
	constructor(){
		this.size = 1.0;		
	}
	draw(){
		fill(130, 100, 60);
		rectMode(CENTER);
		rect(width/2, height/2, width*this.size, height*this.size);
		this.size *= 0.9;
		rectMode(CORNER);
	}
}
class Anim_f {
	constructor(){
		this.alpha = 100;
		this.xPos = width;
	}
	draw(){
		fill(230, 80, 80, this.alpha);
		rect(this.xPos, 0, width-this.xPos, height)
		this.alpha *= 0.96;
		this.xPos -= 40;
	}
}
class Anim_g {
	constructor(){
		this.yPos = height;	
	}
	draw(){
		fill(200, 90, 90);
		rect(0, this.yPos-5, width, 5);
		rect(0, height - this.yPos, width, 5);
		this.yPos *= 0.95;
	}
}
class Anim_h {
	constructor(){
		this. size = 1.0;	
	}
	draw(){
		stroke(0, 70, 70);
		strokeWeight(5);
		noFill();
		circle(width/2, height/2, this.size);
		this.size *= 1.25;
		strokeWeight(1);
		noStroke();
	}
}
class Anim_j {
	constructor(){
		this.alpha = 100;		
	}
	draw(){
		fill(random(260, 360), 80, 80, this.alpha);
		quad(random(width), random(height),random(width), random(height),random(width), random(height),random(width), random(height));	
		this.alpha *= 0.95;
	}
}
class Anim_k {
	constructor(){
		this.alpha = 100;	
	}
	draw(){
		rectMode(CENTER);
		fill(0, 0, 70, this.alpha);
		square(width * 1 / 6, height / 2, width*0.08);
		square(width * 2 / 6, height / 2, width*0.08);
		square(width * 3 / 6, height / 2, width*0.08);
		square(width * 4 / 6, height / 2, width*0.08);
		square(width * 5 / 6, height / 2, width*0.08);	
		
		square(width * 1 / 6, height / 4, width*0.08);
		square(width * 2 / 6, height / 4, width*0.08);
		square(width * 3 / 6, height / 4, width*0.08);
		square(width * 4 / 6, height / 4, width*0.08);
		square(width * 5 / 6, height / 4, width*0.08);
		
		square(width * 1 / 6, height * 3 / 4, width*0.08);
		square(width * 2 / 6, height * 3 / 4, width*0.08);
		square(width * 3 / 6, height * 3 / 4, width*0.08);
		square(width * 4 / 6, height * 3 / 4, width*0.08);
		square(width * 5 / 6, height * 3 / 4, width*0.08);
		
		this.alpha *= 0.95;
		rectMode(CORNER);
	}
}
class Anim_l {
	constructor(){
		this.alpha = 100;	
		this.xPos = random(width);
		this.yPos = 0;
	}
	draw(){
		fill(30, 100, 100, this.alpha);
		rect(this.xPos, 0, width * 0.2, this.yPos); 
		this.yPos += 30;
		this.alpha *= 0.95;
	}
}
class Anim_q {
	constructor(){
		this.diameterA = 0;
		this.diameterB = 0;		
		this.alpha = 100;
		this.position = createVector(random(width), random(height));
	}
	draw(){
		noFill();
		strokeWeight(3.5);
		stroke(200, 70, 100, this.alpha);
		circle(this.position.x, this.position.y, this.diameterA);
		circle(this.position.x, this.position.y, this.diameterB);		
		this.diameterA += 10;
		this.diameterB += 8.5;		
		this.alpha -= 0.8;
		noStroke();
	}
}
class Anim_w {
	constructor(){
		this.alpha = 100;
		this.location = createVector(random(width), 0);
		this.velocity = createVector(0, 30);
		this.velocityZero = createVector(0, 0);
		this.diameter = height * 0.65;
	}
	draw(){
		if(this.location.y <= height / 2) {
			this.location.add(this.velocity);
			fill(60, 100, 90, this.alpha);
			circle(this.location.x, height-this.location.y, this.diameter);
		} else {
		  this.location.add(this.velocityZero);
		  fill(60, 100, 90, this.alpha);
			circle(this.location.x, height-this.location.y, this.diameter);
			this.diameter -= 20;
			this.alpha -= 4;
		}
	}
}
class Anim_e {
	constructor(){
		this.alpha = 100;	
		this.location = createVector(random(width), random(height));
		this.direction = createVector(random(-1000, 1000), random(-1000, 1000));
		this.velocity = createVector(random(-20,20), random(-20,20));
	}
	draw(){
		noFill();
		stroke(230, 60, 100, this.alpha);
		strokeWeight(80)
		line(this.location.x, this.location.y, this.location.x + this.direction.x, this.location.y + this.direction.y);
		this.location.add(this.velocity);
		this.alpha *= 0.95;
		noStroke();
	}
}
class Anim_r {
	constructor(){
		this.alpha = 100;
		this.hue = 360;
	}
	draw(){
		background(this.hue, 100, 100, this.alpha);
		this.hue -= 20;
		this.alpha *= 0.9;
	}
}
class Anim_t {
	constructor(){
		this.alpha = 100;
		this.location = createVector(0, random(height));
		this.velocity = createVector(30, 0);
		this.velocityZero = createVector(0, 0);
		this.diameter = height * 0.45;
		this.stopLoc = random(width / 5, width * 7 / 8);
	}
	draw(){
		if(this.location.x <= this.stopLoc) {
			this.location.add(this.velocity);
			fill(330, 100, 100, this.alpha);
			circle(this.location.x, this.location.y, this.diameter);
		} else {
		  this.location.add(this.velocityZero);
		  fill(330, 100, 100, this.alpha);
			circle(this.location.x, this.location.y, this.diameter);
			this.diameter -= 20;
			this.alpha -= 4;
		}	
	}
}
class Anim_y {
	constructor(){
		this.alpha = 100;
		this.firstLoc = createVector(random(width / 3), random(height));
		this.secondLoc = createVector(random(width / 3, width * 2 / 3), random(height));
		this.thirdLoc = createVector(random(width * 2 / 3, width), random(height));
	}
	draw(){
		fill(random(50, 240), 80, 70, this.alpha);
		triangle(this.firstLoc.x, this.firstLoc.y, this.secondLoc.x, this.secondLoc.y, this.thirdLoc.x, this.thirdLoc.y);	
		this.alpha *= 0.95;
	}
}
class Anim_u {
	constructor(){
		this.alpha = 100;	
		this.yLoc = random(height);
		this.direction = random(-300, 300);
		this.hue = random(360);
	}
	draw(){
		strokeWeight(5);
		stroke(this.hue, 70, 70, this.alpha);
		line(0, this.yLoc, width, this.yLoc + this.direction);
		stroke(0, 0, 100, this.alpha);
		line(0, height-this.yLoc, width, height-this.yLoc - this.direction);
		this.alpha *= 0.95;
		noStroke();
	}
}
class Anim_i {
	constructor(){
		this.alpha = 100;
		this.hue = random(360);
	}
	draw(){
		fill(this.hue, 100, 70, this.alpha);
		textSize(400);
		textAlign(CENTER, BASELINE);
		text('WE', width / 2, height / 2);
		textAlign(CENTER, TOP);
		text('BREAK', width / 2, height / 2);
		this.alpha *= 0.95;
	}
}
class Anim_o {
	constructor(){
		this.alpha = 100;	
		this.loc = createVector(random(width), height / 2);
		this.locT = createVector(random(width), height / 4);
		this.locB = createVector(random(width), height * 3 / 4);		
		this.spread = createVector(random(300), 0);
		this.diameter = 15;
	}
	draw(){
		
		fill(0, 0, 30, this.alpha);
		
		circle(this.loc.x, this.loc.y, this.diameter);
		circle(this.loc.x + this.spread.x, this.loc.y, this.diameter);
		circle(this.loc.x + this.spread.x * 0.6, this.loc.y, this.diameter);
		circle(this.loc.x + this.spread.x * 1.2, this.loc.y, this.diameter);
		circle(this.loc.x + this.spread.x * 1.8, this.loc.y, this.diameter);		
		circle(this.loc.x - this.spread.x, this.loc.y, this.diameter);
		circle(this.loc.x - this.spread.x * 0.6, this.loc.y, this.diameter);
		circle(this.loc.x - this.spread.x * 1.2, this.loc.y, this.diameter);
		circle(this.loc.x - this.spread.x * 1.8, this.loc.y, this.diameter);	
		
		circle(this.locT.x, this.loc.y, this.diameter);
		circle(this.locT.x + this.spread.x, this.locT.y, this.diameter);
		circle(this.locT.x + this.spread.x * 0.6, this.locT.y, this.diameter);
		circle(this.locT.x + this.spread.x * 1.2, this.locT.y, this.diameter);
		circle(this.locT.x + this.spread.x * 1.8, this.locT.y, this.diameter);		
		circle(this.locT.x - this.spread.x, this.locT.y, this.diameter);
		circle(this.locT.x - this.spread.x * 0.6, this.locT.y, this.diameter);
		circle(this.locT.x - this.spread.x * 1.2, this.locT.y, this.diameter);
		circle(this.locT.x - this.spread.x * 1.8, this.locT.y, this.diameter);	
		
		circle(this.locB.x, this.loc.y, this.diameter);
		circle(this.locB.x + this.spread.x, this.locB.y, this.diameter);
		circle(this.locB.x + this.spread.x * 0.6, this.locB.y, this.diameter);
		circle(this.locB.x + this.spread.x * 1.2, this.locB.y, this.diameter);
		circle(this.locB.x + this.spread.x * 1.8, this.locB.y, this.diameter);		
		circle(this.locB.x - this.spread.x, this.locB.y, this.diameter);
		circle(this.locB.x - this.spread.x * 0.6, this.locB.y, this.diameter);
		circle(this.locB.x - this.spread.x * 1.2, this.locB.y, this.diameter);
		circle(this.locB.x - this.spread.x * 1.8, this.locB.y, this.diameter);			
		
		this.alpha *= 0.95;	
	}
}
class Anim_p {
	constructor(){
		this.alpha = 100;	
		this.xPosA = width / 2;
		this.xPosB = 0;
		this.hue = 60 * random(1, 6);
	}
	draw(){
		strokeWeight(20);
		noStroke();
		// stroke(360-this.hue, 90, 90, this.alpha);
		fill(this.hue, 90, 90, this.alpha);
		rect(this.xPosA, 0, width / 2 - this.xPosA, height)
		rect(width / 2, 0, this.xPosB, height)
		this.alpha *= 0.96;
		this.xPosA -= 40;
		this.xPosB += 40;	
		// noStroke();
	}
}
class Anim_z {
	constructor(){
		this.alpha = 100;	
		this.angle = 0;
		this.rad = radians(this.angle);
		this.hue = 60 * random(1, 6);
	}
	draw(){
		noFill();
		strokeWeight(5);
		stroke(this.hue, 70, 70, this.alpha);
		arc(width / 2, height / 2, height * 0.9, height * 0.9, 0, radians(this.angle));
		arc(width / 2, height / 2, height * 0.8, height * 0.8, 0, radians(this.angle));
		arc(width / 2, height / 2, height * 0.7, height * 0.7, 0, radians(this.angle));
		arc(width / 2, height / 2, height * 0.6, height * 0.6, 0, radians(this.angle));
		arc(width / 2, height / 2, height * 0.5, height * 0.5, 0, radians(this.angle));
		arc(width / 2, height / 2, height * 0.4, height * 0.4, 0, radians(this.angle));
		arc(width / 2, height / 2, height * 0.3, height * 0.3, 0, radians(this.angle));
		arc(width / 2, height / 2, height * 0.2, height * 0.2, 0, radians(this.angle));
		arc(width / 2, height / 2, height * 0.1, height * 0.1, 0, radians(this.angle));		
		this.angle += 10;
		this.alpha *= 0.95;
		noStroke();
	}
}
class Anim_x {
	constructor(){
		this.alpha = 100;	
	}
	draw(){
		background(0, 0, 0, this.alpha);
		this.alpha *= 0.95;
	}
}
class Anim_c {
	constructor(){
		this.size = 1.0;
		this.xLoc = width * int(random(1, 20)) / 20;
	}
	draw(){
		fill(20, 90, 70);
		circle(this.xLoc, height/2, width * this.size);
		this.size *= 0.9;
	}
}
class Anim_v {
	constructor(){
		this.alpha = 100;
		this.loc = createVector(random(width), random(height));
	}
	draw(){
		rectMode(CENTER);
		this.r = sin(frameCount/10, 0);
		fill(0, 0, 90, this.alpha);		
		square(this.loc.x, this.loc.y, 500 * this.r);
		fill(0, 0, 80, this.alpha);		
		square(this.loc.x, this.loc.y, 400 * this.r);
		fill(0, 0, 70, this.alpha);		
		square(this.loc.x, this.loc.y, 300 * this.r);
		fill(0, 0, 60, this.alpha);		
		square(this.loc.x, this.loc.y, 200 * this.r);
		fill(0, 0, 50, this.alpha);		
		square(this.loc.x, this.loc.y, 100 * this.r);		
		this.alpha *= 0.9;
		noStroke();
		rectMode(CORNER);
	}
}
class Anim_b {
	constructor(){
		this.alpha = 100;	
		this.x = int(random(width));
		this.y = int(random(height));
		this.angle = 0;
		this.length = random(50, width);
	}
	draw(){
		push();
     rectMode(CENTER);
		 translate(this.x, this.y);
		 rotate(radians(this.angle));
		 fill(0, 0, 0, this.alpha);
		 rect(0, 0, 5, this.length);
		 this.angle += 20;
		 this.alpha *= 0.95;
		pop();
	}
}
class Anim_n {
	constructor(){
		this.alpha = 100;	
		this.xLoc1 = random(width);
		this.xLoc2 = random(width);
		this.xLoc3 = random(width);
		this.xLoc4 = random(width);
		this.hue1 = 60 * random(1,6);
		this.hue2 = 60 * random(1,6);
		this.hue3 = 60 * random(1,6);
		this.hue4 = 60 * random(1,6);
		this.hue5 = 60 * random(1,6);
	}
	draw(){
		strokeWeight(10);
		stroke(0, 0, 80, this.alpha);
		line(0, height / 5, width, height / 5);
		line(0, height * 2 / 5, width, height * 2 / 5);
		line(0, height * 3 / 5, width, height * 3 / 5);
		line(0, height * 4 / 5, width, height * 4 / 5);		
		noStroke();
		
		textAlign(CENTER, CENTER);
		this.ko = sin(frameCount/5, 0);
		textSize(150 * this.ko + 150);
		fill(this.hue1, 100, 70, this.alpha);		
		text('KON', this.xLoc1, height / 5);	
		fill(this.hue2, 100, 70, this.alpha);		
		text('NI', this.xLoc2, height * 2 / 5);	
		fill(this.hue3, 100, 70, this.alpha);		
		text('CHI', this.xLoc3, height * 3 / 5);
		fill(this.hue4, 100, 70, this.alpha);		
		text('WA', this.xLoc4, height * 4 / 5);
		
		this.alpha *= 0.9;
	}
}

class Anim_m {
	constructor(){
		this.firstLoc = createVector(random(width / 4), random(height));
		this.secondLoc = createVector(random(width / 4, width * 2 / 4), random(height));
		this.thirdLoc = createVector(random(width * 2 / 4, width * 3 / 4), random(height));
		this.forthLoc = createVector(random(width * 3 / 4, width), random(height));
		this.hue = 120 * random(1, 3);
		this.alpha = 100;	
	}
	draw(){
		strokeWeight(3);
		stroke(this.hue, 80, 70, this.alpha);
		quad(this.firstLoc.x, this.firstLoc.y, this.secondLoc.x, this.secondLoc.y, this.thirdLoc.x, this.thirdLoc.y, this.forthLoc.x, this.forthLoc.y);	
		fill(this.hue, 80, 70, this.alpha);		
		point(this.firstLoc.x, this.firstLoc.y);
		point(this.secondLoc.x, this.secondLoc.y);
		point(this.thirdLoc.x, this.thirdLoc.y);
		point(this.forthLoc.x, this.forthLoc.y);	
		this.alpha *= 0.9;
		noStroke();	
	}
}