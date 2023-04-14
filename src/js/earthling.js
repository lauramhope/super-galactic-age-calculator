export default class Earthling {
  constructor(currentEarthAge) {
    this.currentEarthAge = currentEarthAge;
    this.yearsSince = 0; 
    this.yearsUntil = 0;
    this.mercuryAge = 0; 
    this.mercuryYearsSince = 0; 
    this.mercuryYearsUntil = 0; 
    this.venusAge = 0; 
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

  numMercuryYearsSinceAge(previousAge) {
    let mercuryYearsPassed = (this.currentEarthAge - previousAge) / 0.24;
    this.mercuryYearsSince = parseInt(mercuryYearsPassed.toFixed()); 
  }

  numMercuryYearsUntilAge(futureAge) {
    let mercYearsUntil = (futureAge - this.currentEarthAge) / 0.24; 
    this.mercuryYearsUntil = parseInt(mercYearsUntil.toFixed()); 
  }

  venus() {
    let venusAgeConversion = this.currentEarthAge / 0.62;
    this.venusAge = parseInt(venusAgeConversion.toFixed()); 
  }

}