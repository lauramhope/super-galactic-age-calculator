import Earthling from '../src/js/earthling.js';

describe('Earthling', () => {
  let earthling; 

  beforeEach(() => {
    earthling = new Earthling (30);
  });


  test('should create an object "Earthling" with current earth age', () => {
    expect(earthling.currentEarthAge).toEqual(30);
  });
  
});