import { FormatDatePipe } from './format-date.pipe';

describe('FormatDatePipe', () => {
  it('should create an instance', () => {
    const pipe = new FormatDatePipe();
    expect(pipe).toBeTruthy();
  });
});

describe('transform', () => {
  it('should display a correct date', () => {
    const date: string = '1564159267162';
    const pipe = new FormatDatePipe();
    const actualResult = pipe.transform(date);
    const expectedResult = '26 July 2019';
    expect(actualResult).toEqual(expectedResult);
  });
});
