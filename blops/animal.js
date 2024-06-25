
let fickungsrate = 200;
let friendship =100;
let hunger = 200;
let prioFactor = 10;
let sign;
let Bounce;
let mutationRate = 1;



class Animal {
    constructor(x, y, aggresiveness, attractiveness, intelligence, strength, health, lastFickung, direction){
    this.x = x;
    this.y = y;
    this.attractiveness = attractiveness;
    this.aggresiveness = aggresiveness;
    this.intelligence = intelligence;
    this.strength = strength;
    this.health = health;
    this.lastFickung = lastFickung;
    this.vision = 100;
    this.direction = p5.Vector.normalize(createVector((Math.random()-0.5)*this.health/25,(Math.random()-0.5)*this.health/25));
    this.vel = (Math.random()+0.2)*2;
    this.pos = createVector(x,y);
    this.rejection = createVector();

    }
    show(){
        stroke(this.aggresiveness,this.attractiveness,this.intelligence, this.health);
        strokeWeight(this.strength);
        point(this.pos.x,this.pos.y);
    
    }
    update(){
        this.vision = this.health;
        // console.log(this.strength)
        this.vel = 1 + 1 / Math.pow(this.strength,2);
        
        
        //Bounce am Rand

        if (this.pos.x < (this.strength / 2)){
            this.direction = createVector(-this.direction.x, this.direction.y);
            this.pos = createVector(this.pos.x + 3, this.pos.y);
            Bounce = true
        }
        if (this.pos.y < (this.strength / 2)){
            this.direction = createVector(this.direction.x, -this.direction.y);
            this.pos = createVector(this.pos.x, this.pos.y + 3);
            Bounce = true
        }
        if (this.pos.x > browserWidth-(this.strength / 2)){
            this.direction = createVector(-this.direction.x, this.direction.y);
            this.pos = createVector(this.pos.x - 3, this.pos.y);
            Bounce = true
        }
        if (this.pos.y > browserHeight-(this.strength / 2)){
            this.direction = createVector(this.direction.x, -this.direction.y);
            this.pos = createVector(this.pos.x, this.pos.y - 3);
            Bounce = true
        }
        // Hilfe die Welt hat Enden
        // sign = -1;
        // if(Bounce = true) {
        //     sign = sign * (-1);
        //     Bounce = false;
        // }
        // if(this.x < this.vision || this.y < this.vision || this.x + this.vision > browserWidth || this.y + this.vision > browserHeight) {
        //     this.direction = p5.Vector.normalize(p5.Vector.add(this.direction.rotate((Math.random()*0.001*sign))));
        // }

        this.health = this.health - 0.05 * (1-this.strength/400);

        if (this.health < 3){
            let index = animals.indexOf(this);
            animals.splice(index, 1);
            console.log("Ein Blop ist an Altersschwäche gestorben");
        }



    }
    checknearest(){
        for (var i=0; i < animals.length; i++){
            let animal = animals[i];
            let distance = mag(this.pos.x - animal.pos.x, this.pos.y - animal.pos.y)
            let totalDifference = Math.abs(this.aggresiveness - animal.aggresiveness) + Math.abs(this.attractiveness - animal.attractiveness) + Math.abs(this.intelligence - animal.intelligence);
          
        
            if (distance < this.vision){
                //Ich hab dich lieb
                if(totalDifference < this.attractiveness && (this.lastFickung + fickungsrate) < frameCount){
                    this.direction = p5.Vector.add(this.direction, createVector((animal.pos.x - this.pos.x)/distance * (this.attractiveness), (animal.pos.y - this.pos.y)/distance * (this.attractiveness)))
                    // this.direction = p5.Vector.normalize(this.direction);
                }
                 //Großmutter, warum ist dein maul so groß
                 if(totalDifference > 255 - this.aggresiveness && animal.strength < this.strength){
                    this.direction = p5.Vector.add(this.direction, createVector((animal.pos.x - this.pos.x)/(distance * (this.aggresiveness)), (animal.pos.y - this.pos.y)/(distance * (this.aggresiveness))))
                    // this.direction = p5.Vector.normalize(this.direction);
                }
                //Hilfe, ich hasse dich
                if(totalDifference > 255 - this.aggresiveness && animal.strength > this.strength){
                    this.direction = p5.Vector.add(this.direction, createVector((this.pos.x - animal.pos.x)/(distance * (this.intelligence)), (this.pos.y - animal.pos.y)/(distance * (this.intelligence))))
                    // this.direction = p5.Vector.normalize(this.direction);

                }
                //1 Baby-Elefant Mindestabstand
                this.rejection = p5.Vector.add(this.rejection, createVector((this.pos.x - animal.pos.x)/Math.pow(distance/2, 8), (this.pos.y - animal.pos.y)/Math.pow(distance/2, 8)))
             //  this.rejection = p5.Vector.normalize(this.direction);
 
               
              
            //  this.direction = p5.Vector.normalize(this.direction);
             //1 Baby-Elefant Mindestabstand
            //  this.direction = p5.Vector.add(this.direction, createVector((this.pos.x - animal.pos.x)/(Math.pow(distance, 3)), (this.pos.y - animal.pos.y)/(Math.pow(distance, 3))))
            //  this.direction = p5.Vector.normalize(this.direction);

            }

            
            
        
            //Bewegungsvektor in die Richtung * Intelligenz * Attraktivität vom anderen
            //Else:
            //Bewgungsvektor in andere richtung * intelligenz
            //INTELLIGENZ UND AGGRESSIVITÄT EINSTELLEN

          
          
          
          
            if (distance < ((this.strength + animal.strength)/2) && distance > 0 && animal.health < 250){
                if (totalDifference > 255 - this.aggresiveness){
                    if (this.strength > animal.strength){
                        animals.splice(i, 1);
                        this.strength = this.strength + animal.strength * (1-this.strength/hunger);
                        console.log("nom nom", 255/totalDifference/2, 255/this.aggresiveness, 255/animal.aggresiveness);
                    }
                } 


                if (animal.attractiveness > totalDifference && this.attractiveness > totalDifference && (animal.health < 250 && this.health < 250) && ((animal.lastFickung + fickungsrate) < frameCount && (this.lastFickung + fickungsrate) < frameCount)){
                    this.lastFickung = frameCount;
                    animal.lastFickung = frameCount;
                    let baby = new Animal(animal.pos.x + ((Math.random()-0.5) * this.strength),animal.pos.y + ((Math.random()-0.5) * this.strength),
                        Math.floor((this.aggresiveness + animal.aggresiveness) / 2 + (Math.random()-0.5)*mutationRate),
                        Math.floor((this.attractiveness + animal.attractiveness) / 2 + (Math.random()-0.5)*mutationRate),
                        Math.floor((this.intelligence + animal.intelligence) / 2 + (Math.random()-0.5)*mutationRate),
                        Math.floor(10 + (Math.sqrt(this.strength + animal.strength)) + (Math.random()-0.5)*mutationRate),
                        255, frameCount, p5.Vector.normalize((p5.Vector.cross(this.direction, animal.direction))));
                    animals.push(baby);
                    baby.show();
                    console.log("ES WURDE EIN KIND KREIERT")
                } 
                //console.log("Nah");
                //console.log(mag(this.pos.x - animal.pos.x, this.pos.y - animal.pos.y));

            }
        }

        this.direction.normalize();
        this.direction.add(this.rejection);
        this.direction.normalize();

        this.pos.add(p5.Vector.mult(this.direction,this.vel));


    }
}


