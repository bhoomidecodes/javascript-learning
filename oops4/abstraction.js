//abstraction means hiding internal implementaion details and showing only the essential features t uers
// ex- your pincode,
// Encapsulation is about protecting data.
// Abstraction is about hiding complexity.

/*
Create a JavaScript class CoffeeMachine that demonstrates abstraction by providing a public
 method makeCoffee() which internally calls private methods #boilWater() and #addCoffee().
*/
class coffeeMachine {
  makecoffee() {
    this.#boilWater();
    this.#addCoffee();
    console.log("coffee ready");
  }
  #boilWater() {
    console.log("water is boiling");
  }
  #addCoffee() {
    console.log("adding coffee...");
  }
}
let machine = new coffeeMachine();
machine.makecoffee();

/*
Create a JavaScript class MusicPlayer that demonstrates abstraction by using a public method playMusic()
 which internally calls private methods #loadSong() and #startSpeaker().
*/
class MusicPlayer {
  playmusic() {
    this.#loadSong();
    this.#startSpeaker();
    console.log("playing music");
  }
  #loadSong() {
    console.log("song is LOADING.......");
  }

  #startSpeaker() {
    console.log("speaker is starting......");
  }
}
let music = new MusicPlayer();
music.playmusic();

/*
Create a Car class in JavaScript where the public method startCar() 
internally calls a private method #checkFuel() before starting the car.
*/
class Car {
  startCar() {
    this.#checkFuel();
    console.log("Car started...");
  }

  #checkFuel() {
    console.log("Checking fuel...");
  }
}

let myCar = new Car();
myCar.startCar();
