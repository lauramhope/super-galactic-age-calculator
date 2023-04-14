export default class Earthling {
  constructor(currentEarthAge) {
    this.currentEarthAge = currentEarthAge;
    this.yearsSince = 0; 
  }

  numEarthYearsSinceAge(previousAge) {
    let earthYearsPassed = this.currentEarthAge - previousAge; 
    this.yearsSince = earthYearsPassed; 
  }
}