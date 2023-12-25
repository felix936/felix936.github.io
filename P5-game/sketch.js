let ball, floors, floor, bg, balloon,  sandbagstate, txt, score, totalFrames;
let shot, shooterShots, shooterShot, lasers, laser1, laser2, laser3;
let endScreen, lost, endfade;
let balloonscale = 1;
sandbagstate = true;
shot = endfade = totalFrames = 0;
ended = false;

function setup() {
	new Canvas(1920, 1080);
	world.gravity.y = 30;

	backgroundSky = new Sprite();
	backgroundSky.img = 'assets/sky.jpg';
	backgroundSky.width = 1920;
	backgroundSky.height = 4917;
	backgroundSky.scale = 2.46;
	backgroundSky.y = -3900;
	backgroundSky.collider = 'none';

	balloon = new Sprite(960, 200, [
		[0 * balloonscale, -180 * balloonscale],
		[80 * balloonscale, 30 * balloonscale],
		[35 * balloonscale, 35 * balloonscale],
		[3 * balloonscale, 45 * balloonscale],
		[-3 * balloonscale, 45 * balloonscale],
		[-35 * balloonscale, 50 * balloonscale],
		[-43 * balloonscale, 40 * balloonscale],
		[0 * balloonscale, 40 * balloonscale],
		[25 * balloonscale, 25 * balloonscale],
		[0 * balloonscale, 20 * balloonscale],
		[-20 * balloonscale, 30 * balloonscale],
		[-42 * balloonscale, 0 * balloonscale],

		[-42 * balloonscale, 0 * balloonscale],
		[-20 * balloonscale, -30 * balloonscale],
		[0 * balloonscale, -20 * balloonscale],
		[25 * balloonscale, -25 * balloonscale],
		[0 * balloonscale, -40 * balloonscale],
		[-43 * balloonscale, -40 * balloonscale],
		[-35 * balloonscale, -50 * balloonscale],
		[-3 * balloonscale, -45 * balloonscale],
		[3 * balloonscale, -45 * balloonscale],
		[35 * balloonscale, -35 * balloonscale],
		[80 * balloonscale, -30 * balloonscale],
		], 'd');
	balloon.offset.x = 0;
	balloon.debug = true;

	balloon.img = 'assets/balloon-default.png';
	balloon.bounciness = 0;
	balloon.rotationLock =true;
	balloon.debug = true;
	balloon.friction = 1;
	balloon.scale *= balloonscale;

	
	sandBag = new Sprite(960, 200, 200, 200, 'd');
	sandBag.img = 'assets/bag.png';
	sandBag.scale *= 0.1;
	sandBag.rotationLock = true;
	sandBag.debug = true;


	cliff = new Sprite(1620, 600, 500, 760, 's');
	cliff.img = 'assets/cliff.png';
	cliff.debug = true;

	shooter = new Sprite(1800, 180, 469, 500, 's');
	shooter.img = 'assets/shooter1.gif';
	shooter.scale *= 0.2;
	shooter.debug = true;

	shooterShots = new Group();
	shooterShots.img = 'assets/shooterBullet.gif';

	heli = new Sprite(360, -400, 452, 167, 'k');
	heli.img = 'assets/heli1.png';
	heli.debug = true;

	lasers = new Group();
	lasers.color = 'red';
	lasers.collider = 's';

	laser1 = new lasers.Sprite(800, -600, 1500, 10);
	laser2 = new lasers.Sprite(1500, -1400, 1500, 10);
	laser3 = new lasers.Sprite(800, -2000, 1500, 10);

	floors = new Group();
	floors.w = 1184;
	floors.h = 1184;
	floors.y = 1060;
	floors.collider = 's';
	floors.img = 'assets/grass.png';
	while (floors.length < 20) {
		let floor = new floors.Sprite();
		floor.x = (floors.length -1) * 100;
		floor.scale *= 0.1;
	}

	wallLeft = new Sprite(-50, -4000, 100, 10000, 'static');
	wallRight = new Sprite(1970, -4000, 100, 10000, 'static');

	txt = new Sprite(70, 200, 's');
	txt.textSize = 40;
	txt.color = 'rgba(0,0,0,0)';
	txt.stroke = 'rgba(0,0,0,0)';
}


function draw() {
	clear();
	totalFrames +=1;
	camera.y = balloon.y - 250;
	balloon.img = 'assets/balloon-default.png';

	if (kb.pressing('space') || kb.pressing('up')) {
		balloon.bearing = -90;
		balloon.applyForce(50);
		balloon.img = 'assets/balloon-default-fire.png';
	}

	if (kb.pressing('right')) {
		balloon.bearing = 0;
		balloon.applyForce(20);
	}
	if (kb.pressing('left')) {
		balloon.bearing = 180;
		balloon.applyForce(20);
	}
	if (kb.presses('b') && (sandbagstate == true)){
		sandbagstate = false;
		balloon.bearing = -90;
		balloon.applyForce(3000);
	}
	if (sandbagstate == true) {
		sandBag.y = balloon.y + 160 * balloonscale;
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

	if (balloon.y < -2000){
		if (ended == false){
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
			endScreen.remove();
			ended = false;
			endfade = 0;
			sandbagstate = true;
			balloon.x = 960;
			balloon.y = 800;
			heli.x = 360;
			heli.y = -400;

		}
	}
}

function shootingShooter() {
	if (shot == 0) {
		shooterShot = new shooterShots.Sprite(1790, 160, 192, 192, 'k');
		shooterShot.scale *= 0.2;
		shooterShot.debug = true;
		shooterShot.vel.x = -30;
		shot = 1;
	}
	if(shooterShot.x < 0){
		shooterShot.x = 1790;
	}
	if (balloon.collides(shooterShot)){
		if (ended == false){
			end('lost');}
	}
}
function angryHeli(){
	if (balloon.y < -200 && balloon.y > -1300){
		heli.moveTowards(balloon, 0.005);
	}
	else{
		heli.moveTowards(360, -400, 0.01);
	}
	console.log(totalFrames);
	if(int(totalFrames/5) % 2 == 0){
		heli.img = 'assets/heli2.png';
	}
	else{
		heli.img = 'assets/heli1.png';
	}
	if (heli.collides(balloon) || lasers.collides(balloon)){
		if (ended == false){
		end('lost');
	}}
}



function end(result){
	endScreen = new Sprite(960, balloon.y, 1920, 1080);
	endcolor = 'rgba(0, 0, 0, 0)'
	endScreen.color = color(endcolor);
	endScreen.collider = 'none';
	endScreen.textSize = 100;
	endScreen.textColor = 'white';
	endScreen.text = "You " + result + "! \n Score: " + score + "\nPress anything to restart";
	ended = true;
}