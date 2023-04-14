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
    this.mercuryAge = Number(mercuryAgeConversion.toFixed(2));
  }

  numMercuryYearsSinceAge(previousAge) {
    let mercuryYearsPassed = (this.currentEarthAge - previousAge) / 0.24;
    this.mercuryYearsSince = Number(mercuryYearsPassed.toFixed(2)); 
  }

  numMercuryYearsUntilAge(futureAge) {
    let mercYearsUntil = (futureAge - this.currentEarthAge) / 0.24;
    this.mercuryYearsUntil = Number(mercYearsUntil.toFixed(2));
  }

  venus() {
    let venusAgeConversion = this.currentEarthAge / 0.62;
    this.venusAge = Number(venusAgeConversion.toFixed(2)); 
  }

  numVenusYearsSinceAge(previousAge) {
    let venusYearsPassed = (this.currentEarthAge - previousAge) / 0.62;
    this.venusYearsSince = Number(venusYearsPassed.toFixed(2)); 
  }

  numVenusYearsUntilAge(futureAge) {
    let venYearsUntil = (futureAge - this.currentEarthAge) / 0.62; 
    this.venusYearsUntil = Number(venYearsUntil.toFixed(2)); 
  }

  mars() {
    let marsAgeConversion = this.currentEarthAge / 1.88; 
    this.marsAge = Number(marsAgeConversion.toFixed(2));
  }

  numMarsYearsSinceAge(previousAge) {
    let marsYearsPassed = (this.currentEarthAge - previousAge) / 1.88;
    this.marsYearsSince = parseInt(marsYearsPassed); 
  }

  numMarsYearsUntilAge(futureAge) {
    let marsYrsUntil = (futureAge - this.currentEarthAge) / 1.88; 
    this.marsYearsUntil = parseInt(marsYrsUntil);
  }

  jupiter() {
    let jupiterAgeConversion = this.currentEarthAge / 11.86;
    this.jupiterAge = parseInt(jupiterAgeConversion); 
  }

  numJupiterYearsSinceAge(previousAge) {
    let jupiterYearsPassed = (this.currentEarthAge - previousAge) / 11.86;
    this.jupiterYearsSince = parseInt(jupiterYearsPassed); 
  }

  numJupiterYearsUntilAge(futureAge) {
    let jupYearsUntil = (futureAge - this.currentEarthAge) / 11.86;
    this.jupiterYearsUntil = parseInt(jupYearsUntil); 
  }

}