import expect from 'expect'

import combinations, { combinationsWithoutCache } from 'src/index'

describe('combinations', () => {
  it('should return 0 when k > n', function () {
    expect(0).toEqual(combinations(2, 4));
    expect(0).toEqual(combinations(6, 8));
  });
  it('should return the number of possible combinations', function () {
    expect(4).toEqual(combinations(4, 1));
    expect(10).toEqual(combinations(5, 2));
    expect(10).toEqual(combinations(5, 3));
    expect(15).toEqual(combinations(6, 4));
  });
  it('should throw error when pass negative Int', function () {
    expect(function () {
      combinations(3, -1);
    }).toThrow('factorial s argv should be greater than 0');
  });
  it('should throw error when only one argv', function (){
    expect(function (){
      combinations(3);
    }).toThrow('combinations require two args');
  });
});

describe('combinationsWithoutCache', () => {
  it('should return 0 when k > n', function () {
    expect(0).toEqual(combinationsWithoutCache(5, 7));
    expect(0).toEqual(combinationsWithoutCache(6, 8));
  });
  it('should return the number of possible combinationsWithoutCache', function () {
    expect(4).toEqual(combinationsWithoutCache(4, 1));
    expect(10).toEqual(combinationsWithoutCache(5, 2));
    expect(10).toEqual(combinationsWithoutCache(5, 3));
    expect(15).toEqual(combinationsWithoutCache(6, 4));
  });
});
