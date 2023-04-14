export default class Earthling {
  constructor(currentEarthAge) {
    this.currentEarthAge = currentEarthAge;
    this.yearsSince = 0; 
    this.yearsUntil = 0;
    this.mercuryAge = 0; 
  }

  numEarthYearsSinceAge(previousAge) {
    let earthYearsPassed = this.currentEarthAge - previousAge; 
    this.yearsSince = earthYearsPassed; 
  }

  numEarthYearsUntilAge(futureAge) {
    let earthYearsUntil = futureAge - this.currentEarthAge;
    this.yearsUntil = earthYearsUntil; 
  }

  mercury() {
    let mercuryAgeConversion = this.currentEarthAge / 0.24;
    this.mercuryAge = mercuryAgeConversion;
  }

}