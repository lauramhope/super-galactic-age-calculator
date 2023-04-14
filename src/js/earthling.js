export default class Earthling {
  constructor(currentEarthAge) {
    this.currentEarthAge = currentEarthAge;
    this.yearsSince = 0; 
    this.yearsUntil = 0;
    this.mercuryAge = 0; 
    this.mercuryYearsSince = 0; 
    this.mercuryYearsUntil = 0; 
    this.venusAge = 0; 
    this.venusYearsSince = 0; 
    this.venusYearsUntil = 0; 
    this.marsAge = 0; 
    this.marsYearsSince = 0;
    this.marsYearsUntil = 0; 
    this.jupiterAge = 0; 
    this.jupiterYearsSince = 0; 
    this.jupiterYearsUntil = 0; 
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
    this.mercuryAge = parseInt(mercuryAgeConversion);
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

  numVenusYearsSinceAge(previousAge) {
    let venusYearsPassed = (this.currentEarthAge - previousAge) / 0.62;
    this.venusYearsSince = parseInt(venusYearsPassed.toFixed()); 
  }

  numVenusYearsUntilAge(futureAge) {
    let venYearsUntil = (futureAge - this.currentEarthAge) / 0.62; 
    this.venusYearsUntil = parseInt(venYearsUntil.toFixed()); 
  }

  mars() {
    let marsAgeConversion = this.currentEarthAge / 1.88;
    this.marsAge = parseInt(marsAgeConversion.toFixed()); 
  }

  numMarsYearsSinceAge(previousAge) {
    let marsYearsPassed = (this.currentEarthAge - previousAge) / 1.88;
    this.marsYearsSince = parseInt(marsYearsPassed.toFixed()); 
  }

  numMarsYearsUntilAge(futureAge) {
    let marsYrsUntil = (futureAge - this.currentEarthAge) / 1.88; 
    this.marsYearsUntil = parseInt(marsYrsUntil.toFixed()); 
  }

  jupiter() {
    let jupiterAgeConversion = this.currentEarthAge / 11.86;
    this.jupiterAge = parseInt(jupiterAgeConversion.toFixed()); 
  }

  numJupiterYearsSinceAge(previousAge) {
    let jupiterYearsPassed = (this.currentEarthAge - previousAge) / 11.86;
    this.jupiterYearsSince = parseInt(jupiterYearsPassed.toFixed()); 
  }

  numJupiterYearsUntilAge(futureAge) {
    let jupYearsUntil = (futureAge - this.currentEarthAge) / 11.86;
    this.jupiterYearsUntil = parseInt(jupYearsUntil.toFixed()); 
  }

}