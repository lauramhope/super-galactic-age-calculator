import Earthling from '../src/js/earthling.js';

describe('Earthling', () => {
  let earthling; 

  beforeEach(() => {
    earthling = new Earthling (30);
  });

  test('should create an object "Earthling" with current earth age', () => {
    expect(earthling.currentEarthAge).toEqual(30);
  });

  test('should create a method of returning correct number of earth years since Earthling objects previous birthday', () => {
    earthling.numEarthYearsSinceAge(20);
    expect(earthling.yearsSince).toEqual(10);
  });

  test('should create a method of returning correct number of earth years until Earthling objects future birthday', () => {
    earthling.numEarthYearsUntilAge(45);
    expect(earthling.yearsUntil).toEqual(15);
  });

  test('should create a method of taking earthlings current earth age in years and returning correct number of mercury age in years', () => {
    earthling.mercury(); 
    expect(earthling.mercuryAge).toEqual(125); 
  });

  test('should create a method of returning correct number of Mercury years since earthlings previous birthday', () => {
    earthling.numMercuryYearsSinceAge(20);
    expect(earthling.mercuryYearsSince).toEqual(41);
  });

  test('should create a method of returning correct number of Mercury years until earthlings future birthday', () => {
    earthling.numMercuryYearsUntilAge(45);
    expect(earthling.mercuryYearsUntil).toEqual(62); 
  });

  test('should create a method of taking earthlings current earth age in years and returning correct number of venus age in years', () => {
    earthling.venus(); 
    expect(earthling.venusAge).toEqual(48); 
  });

  test('should create a method of returning correct number of Venus years since earthlings previous birthday', () => {
    earthling.numVenusYearsSinceAge(20);
    expect(earthling.venusYearsSince).toEqual(16);
  });

  test('should create a method of returning correct number of Venus years until earthlings future birthday', () => {
    earthling.numVenusYearsUntilAge(45);
    expect(earthling.venusYearsUntil).toEqual(24); 
  });

  test('should create a method of taking earthlings current earth age in years and returning correct number of Mars age in years', () => {
    earthling.mars(); 
    expect(earthling.marsAge).toEqual(16); 
  });

  test('should create a method of returning correct number of Mars years since earthlings previous birthday', () => {
    earthling.numMarsYearsSinceAge(20);
    expect(earthling.marsYearsSince).toEqual(5);
  });

  test('should create a method of returning correct number of Mars years until earthlings future birthday', () => {
    earthling.numMarsYearsUntilAge(45);
    expect(earthling.marsYearsUntil).toEqual(8); 
  });

  test('should create a method of taking earthlings current earth age in years and returning correct number of Jupiter age in years', () => {
    earthling.jupiter(); 
    expect(earthling.jupiterAge).toEqual(3); 
  });

  test('should create a method of returning correct number of Jupiter years since earthlings previous birthday', () => {
    earthling.numJupiterYearsSinceAge(20);
    expect(earthling.jupiterYearsSince).toEqual(1);
  });

  test('should create a method of returning correct number of Jupiter years until earthlings future birthday', () => {
    earthling.numJupiterYearsUntilAge(45);
    expect(earthling.jupiterYearsUntil).toEqual(1);
  });

})