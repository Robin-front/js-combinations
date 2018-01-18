import expect from 'expect'

import combinations, { combinationsWithoutCache } from 'src/index'

describe('combinations', () => {
  it('should return 0 when k > n', function () {
    expect(0).toEqual(combinations(2, 4));
    expect(0).toEqual(combinations(2, 5));
    expect(0).toEqual(combinations(5, 7));
    expect(0).toEqual(combinations(6, 8));
  });
  it('should return the number of possible combinations', function () {
    expect(6).toEqual(combinations(4, 2));
    expect(10).toEqual(combinations(5, 2));
    expect(10).toEqual(combinations(5, 3));
    expect(15).toEqual(combinations(6, 4));
  });
});

describe('combinationsWithoutCache', () => {
  it('should return 0 when k > n', function () {
    expect(0).toEqual(combinationsWithoutCache(2, 4));
    expect(0).toEqual(combinationsWithoutCache(2, 5));
    expect(0).toEqual(combinationsWithoutCache(5, 7));
    expect(0).toEqual(combinationsWithoutCache(6, 8));
  });
  it('should return the number of possible combinationsWithoutCache', function () {
    expect(6).toEqual(combinationsWithoutCache(4, 2));
    expect(10).toEqual(combinationsWithoutCache(5, 2));
    expect(10).toEqual(combinationsWithoutCache(5, 3));
    expect(15).toEqual(combinationsWithoutCache(6, 4));
  });
});
