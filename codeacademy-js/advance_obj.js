const robot = {
  model: 'B-4MI',
  mobile: true,
  greeting() {
  	console.log(`I'm model ${this.model}, how may I be of service?`);
  }
}

const massProdRobot = (model, mobile) => {
  return {
    model,
    mobile,
    greeting() {
      console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  }
}

const shinyNewRobot = massProdRobot('TrayHax', true)

const chargingStation = {
  _name: 'Electrons-R-Us',
  _robotCapacity: 120,
  _active: true,
  _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

  set robotCapacity(newCapacity) {
    if (typeof newCapacity === 'number') {
      this._robotCapacity = newCapacity;
    } else {
      console.log(`Change ${newCapacity} to a number.`)
    }
  },
  get robotCapacity() {
    return this._robotCapacity;
  }
}


// this keyword

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};
console.log(robot.provideInfo());

// Arrow function and this 

const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();


// privacy  // javaScript dont have build-in privacy feature but few naming convention are used.

const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robot._energyLevel = 'high';
robot.recharge();


