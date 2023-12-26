let ball, floors, floor, bg, balloon,  sandbagstate, txt, score, totalFrames, debugstate, testing;
let shot, shooterShots, shooterShot, lasers, birds, time, timeNormal, timeSlow;
let endScreen, lost, endfade;
let balloonscale = 0.7;
sandbagstate = true;
shot = endfade = totalFrames = 0;
ended = false;

debugstate = false;
testing = false;
staticstate = 's';
kineticstate = 'k';
time = timeNormal = 1;
timeSlow = 0.1;


function setup() {
	new Canvas(1920, 1080);

	backgroundSky = new Sprite();
	backgroundSky.img = 'assets/sky.jpg';
	backgroundSky.width = 1920;
	backgroundSky.height = 4917;
	backgroundSky.scale = 2.46;
	backgroundSky.y = -6360;
	backgroundSky.collider = 'none';

	balloon = new Sprite(960, 800, [
		[0, -180],
		[80, 30],
		[35, 35],
		[3, 45],
		[-3, 45],
		[-35, 50],
		[-43, 40],
		[0, 40],
		[25, 25],
		[0, 20],
		[-20, 30],
		[-42, 0],

		[-42, 0],
		[-20, -30],
		[0, -20],
		[25, -25],
		[0, -40],
		[-43, -40],
		[-35, -50],
		[-3, -45],
		[3, -45],
		[35, -35],
		[80, -30],
		], 'd');
	balloon.offset.x = 0;
	balloon.debug = debugstate;

	balloon.img = 'assets/balloon-default.png';
	balloon.bounciness = 0;
	balloon.rotationLock =true;
	balloon.debug = debugstate;
	balloon.friction = 1;
	balloon.scale *= balloonscale;

	
	sandBag = new Sprite(960, 200, 200, 200, 'd');
	sandBag.img = 'assets/bag.png';
	sandBag.scale *= 0.1;
	sandBag.rotationLock = true;
	sandBag.debug = debugstate;


	cliff = new Sprite(1620, 620, 500, 760, staticstate);
	cliff.img = 'assets/cliff.png';
	cliff.debug = debugstate;

	shooter = new Sprite(1800, 205, 469, 500, staticstate);
	shooter.img = 'assets/shooter1.gif';
	shooter.scale *= 0.2;
	shooter.debug = debugstate;

	shooterShots = new Group();
	shooterShots.img = 'assets/shooterBullet.gif';
	shooterShot = new shooterShots.Sprite(1790, 185, 192, 192, kineticstate);
	shooterShot.scale *= 0.2;
	shooterShot.debug = debugstate;

	heli = new Sprite(360, -400, 452, 167, kineticstate);
	heli.img = 'assets/heli1.png';
	heli.debug = debugstate;

	lasers = new Group();
	lasers.color = 'red';
	lasers.collider = staticstate;

	laser1 = new lasers.Sprite(700, -600, 1500, 10);
	laser2 = new lasers.Sprite(1400, -1200, 1500, 10);
	laser3 = new lasers.Sprite(700, -1800, 1500, 10);
	laser4 = new lasers.Sprite(1400, -2300, 1500, 10);


	island = new Sprite(960, -3000, 140, 50, staticstate);
	island.img = 'assets/island.png';
	island.debug = debugstate;
	island.scale *= 2;


	birds = new Group();
	birds.debug = debugstate;

	bird1 = new birds.Sprite(0, -3500, 200, 200, kineticstate);
	bird2 = new birds.Sprite(640, -3500, 200, 200, kineticstate);
	bird3 = new birds.Sprite(1280, -3500, 200, 200, kineticstate);

	bird4 = new birds.Sprite(0, -3700, 200, 200, kineticstate);
	bird5 = new birds.Sprite(640, -3700, 200, 200, kineticstate);
	bird6 = new birds.Sprite(1280, -3700, 200, 200, kineticstate);

	bird7 = new birds.Sprite(0, -3900, 200, 200, kineticstate);
	bird8 = new birds.Sprite(640, -3900, 200, 200, kineticstate);
	bird9 = new birds.Sprite(1280, -3900, 200, 200, kineticstate);

	bird1.scale *= 0.5;
	bird1.img = 'assets/bird1.gif';

	bird2.scale *= 0.375;
	bird2.img = 'assets/bird2.gif';

	bird3.scale *= 0.375;
	bird3.img = 'assets/bird3.gif';

	bird4.scale *= 0.375;
	bird4.img = 'assets/bird2.gif';

	bird5.scale *= 0.375;
	bird5.img = 'assets/bird1.gif';

	bird6.scale *= 0.375;
	bird6.img = 'assets/bird3.gif';

	bird7.scale *= 0.375;
	bird7.img = 'assets/bird3.gif';

	bird8.scale *= 0.375;
	bird8.img = 'assets/bird2.gif';

	bird9.scale *= 0.375;
	bird9.img = 'assets/bird1.gif';

	ufos = new Group();
	ufos.img = 'assets/ufo.gif';
	ufo = new ufos.Sprite(1750, -6000, 100, 100, staticstate);
	ufo.scale *= 2;
	ufo.debug = debugstate;
	ufo2 = new ufos.Sprite(200, -6300, 100, 100, staticstate);
	ufo2.mirror.x = true;
	ufo2.scale *= 2;
	ufo2.debug = debugstate;
	ufo3 = new ufos.Sprite(1750, -6900, 100, 100, staticstate);
	ufo3.scale *= 2;
	ufo3.debug = debugstate;
	ufo4 = new ufos.Sprite(200, -7200, 100, 100, staticstate);
	ufo4.mirror.x = true;
	ufo4.scale *= 2;
	ufo4.debug = debugstate;
	ufo5 = new ufos.Sprite(1750, -7800, 100, 100, staticstate);
	ufo5.scale *= 2;
	ufo5.debug = debugstate;
	ufo6 = new ufos.Sprite(200, -8100, 100, 100, staticstate);
	ufo6.mirror.x = true;
	ufo6.scale *= 2;
	ufo6.debug = debugstate;

	ufoLasers = new Group();
	ufoLasers.img = 'assets/ufoLaser.gif';
	ufoLaser = new ufoLasers.Sprite(1620, -6000, 600, 1728, kineticstate);
	ufoLaser.scale *= 0.2;
	ufoLaser.rotation = 90;
	ufoLaser.debug = debugstate;
	ufoLaser2 = new ufoLasers.Sprite(200, -6300, 600, 1728, kineticstate);
	ufoLaser2.scale *= 0.2;
	ufoLaser2.rotation = -90;
	ufoLaser2.debug = debugstate;
	ufoLaser3 = new ufoLasers.Sprite(1420, -6900, 600, 1728, kineticstate);
	ufoLaser3.scale *= 0.2;
	ufoLaser3.rotation = 90;
	ufoLaser3.debug = debugstate;
	ufoLaser4 = new ufoLasers.Sprite(200, -7200, 600, 1728, kineticstate);
	ufoLaser4.scale *= 0.2;
	ufoLaser4.rotation = -90;
	ufoLaser4.debug = debugstate;
	ufoLaser5 = new ufoLasers.Sprite(1420, -7800, 600, 1728, kineticstate);
	ufoLaser5.scale *= 0.2;
	ufoLaser5.rotation = 90;
	ufoLaser5.debug = debugstate;
	ufoLaser6 = new ufoLasers.Sprite(200, -8100, 600, 1728, kineticstate);
	ufoLaser6.scale *= 0.2;
	ufoLaser6.rotation = -90;
	ufoLaser6.debug = debugstate;


	floors = new Group();
	floors.w = 1184;
	floors.h = 1184;
	floors.y = 1060;
	floors.collider = 'static';
	floors.img = 'assets/grass.png';
	while (floors.length < 20) {
		let floor = new floors.Sprite();
		floor.x = (floors.length -1) * 100;
		floor.scale *= 0.1;
	}

	undergrounds = new Group();
	undergrounds.w = 1184;
	undergrounds.h = 1184;
	undergrounds.y = 1140;
	undergrounds.collider = 'static';
	undergrounds.img = 'assets/dirt.png';
	while (undergrounds.length < 20) {
		let underground = new undergrounds.Sprite();
		underground.x = (undergrounds.length -1) * 100;
		underground.scale *= 0.1;
	}

	wallLeft = new Sprite(-50, -8000, 100, 200000, 'static');
	wallLeft2 = new Sprite(-50, -16000, 100, 200000, 'static');
	wallRight = new Sprite(1970, -8000, 100, 20000, 'static');
	wallRight2 = new Sprite(1970, -16000, 100, 20000, 'static');

	txt = new Sprite(70, 200, 'static');
	txt.textSize = 40;
	txt.color = 'rgba(0,0,0,0)';
	txt.stroke = 'rgba(0,0,0,0)';
}


function draw() {
	clear();
	background(79, 56, 98);
	world.gravity.y = 30 * time;
	totalFrames +=1;
	camera.y = balloon.y - 250;
	balloon.img = 'assets/balloon-default.png';

	if (balloon.vel.y < -30 * time){
		balloon.vel.y = -30 * time;
	}

	if (kb.pressing('space') || kb.pressing('up')) {
		balloon.bearing = -90;
		balloon.applyForce(50 * time);
		balloon.img = 'assets/balloon-default-fire.png';
	}

	if (kb.pressing('right')) {
		balloon.bearing = 0;
		balloon.applyForce(20 * time);
	}
	if (kb.pressing('left')) {
		balloon.bearing = 180;
		balloon.applyForce(20 * time);
	}
	if (mouse.pressing()){
		if (time == timeNormal){
			time = timeSlow;
			balloon.vel.y *= time;
			balloon.vel.x *= time;
		}
	}
	else {
		time = timeNormal;
	}
	if (kb.presses('b') && (sandbagstate == true)){
		sandbagstate = false;
		balloon.bearing = -90;
		balloon.applyForce(3000 * time);
		sandBag.vel.y = 20 * time;
		sandBag.collider = 'none';
	}
	if (sandbagstate == true) {
		sandBag.y = balloon.y + 150 * balloonscale;
		sandBag.x = balloon.x;
		sandBag.collider = 'd';
	}
	if (sandBag.collides(floors)) {
		sandBag.vel.y = 0;
		sandBag.collider = 'static'
	}
	score = int(balloon.y - 819) * (-1);
	if (score < 0) {
		score = 0;
	}
	txt.text = score;
	txt.y = balloon.y - 740;

	shootingShooter();

	angryHeli();

	flyingBirds();

	laseringUfo();

	if (score > 12000){
		score = totalFrames / frameRate();
		if (ended == false && testing == false){
		end("won");}
	}

	if (ended) {
		endScreen.y = camera.y;
		if (endfade < 100){
			let alpha = endfade/100;
			endcolor = 'rgba(0,0,0,' + alpha + ')';
			endScreen.color = color(endcolor);
			endfade += 1;
		}
		if (keyIsPressed === true && endfade > 99){
			location.reload();
		}
	}
}

function shootingShooter() {
	shooterShot.vel.x = -30 * time;
	if(shooterShot.x < 0){
		shooterShot.x = 1790;
	}
	if (balloon.collides(shooterShot)){
		if (ended == false && testing == false){
			end('lost');}
	}
}
function angryHeli(){
	if (balloon.y < -200 && balloon.y > -2500){
		heli.moveTowards(balloon, 0.007 * time);
	}
	else{
		heli.moveTowards(360, -400, 0.01 * time);
	}
	if(int(totalFrames/5) % 2 == 0){
		heli.img = 'assets/heli2.png';
	}
	else{
		heli.img = 'assets/heli1.png';
	}
	if (heli.collides(balloon) || lasers.collides(balloon)){
		if (ended == false && testing == false){
		end('lost');
	}}
}

function flyingBirds(){
	bird1.vel.x = 10 * time;
	if(bird1.x > 1920){
		bird1.x = 0;}
	bird2.vel.x = 14 * time;
	if(bird2.x > 1920){
		bird2.x = 0;}
	bird3.vel.x = 12 * time;
	if(bird3.x > 1920){
		bird3.x = 0;}

	bird4.vel.x = 9 * time;
	if(bird4.x > 1920){
		bird4.x = 0;}
	bird5.vel.x = 13 * time;
	if(bird5.x > 1920){
		bird5.x = 0;}
	bird6.vel.x = 11 * time;
	if(bird6.x > 1920){
		bird6.x = 0;}

	bird7.vel.x = 11 * time;
	if(bird7.x > 1920){
		bird7.x = 0;}
	bird8.vel.x = 15 * time;
	if(bird8.x > 1920){
		bird8.x = 0;}
	bird9.vel.x = 13 * time;
	if(bird9.x > 1920){
		bird9.x = 0;}

	if (balloon.collides(birds)){
		if (ended == false && testing == false){
			end('lost');}
	}
}

function laseringUfo() {
	ufoLaser.vel.x = -22 * time;
	if(ufoLaser.x < 0){
		ufoLaser.x = 1620;
	}
	ufoLaser2.vel.x = 22 * time;
	if(ufoLaser2.x > 1920){
		ufoLaser2.x = 200;
	}
	ufoLaser3.vel.x = -24 * time;
	if(ufoLaser3.x < 0){
		ufoLaser3.x = 1620;
	}
	ufoLaser4.vel.x = 24 * time;
	if(ufoLaser4.x > 1920){
		ufoLaser4.x = 200;
	}
	ufoLaser5.vel.x = -25 * time;
	if(ufoLaser5.x < 0){
		ufoLaser5.x = 1620;
	}
	ufoLaser6.vel.x = 20 * time;
	if(ufoLaser6.x > 1920){
		ufoLaser6.x = 200;
	}
	if (balloon.collides(ufoLasers)){
		if (ended == false && testing == false){
			end('lost');}
	}
}


function end(result){
	endScreen = new Sprite(960, balloon.y, 1920, 1080);
	endcolor = 'rgba(0, 0, 0, 0)'
	endScreen.color = color(endcolor);
	endScreen.collider = 'none';
	endScreen.textSize = 100;
	endScreen.textColor = 'white';
	if (result == 'won'){
		endScreen.text = "You won! \n Time: " + score + "\nPress anything to restart";}
	else{
		endScreen.text = "You lost! \n Score: " + score + "\nPress anything to restart";}
	ended = true;
}