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
})