import { pipe } from 'rxjs';
import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;
  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty collection when array is empty', () => {
    // Arrange
    const array = new Array<any>();
    // Act
    const result = pipe.transform(array, ['toString']);

    // Assert
    expect(result).toBeDefined();
    expect(result?.length).toEqual(0);
  });

  it('should order a sequence', () => {
    // Arrange
    const array = new Array({ a: 10, b: 30 }, { a: 13, b: 10 }, { a: 16, b: 20 },);
    // Act
    const result = pipe.transform(array, ['a'], false);

    // Assert
    expect(result).toBeDefined();
    expect(result?.length).toEqual(3);
    expect(result![0].a).toEqual(16);
    expect(result![1].a).toEqual(13);
    expect(result![2].a).toEqual(10);
  });

});
