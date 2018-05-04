describe('ES-201X Features Test', () => {
  const obj = { a: 1, b: 2, c: 3 };
  const array = [1, 2, 3, 4, 5, 6];

  test('optional chaining', () => {
    /* eslint-disable no-undef */
    expect(obj?.a).toEqual(1);
    expect(obj?.foo).toBeUndefined();
    expect(obj?.foo?.test()).toBeUndefined();
    /* eslint-enable no-undef */
  });

  test('pipeline operator', () => {
    const add1 = n => n + 1;
    const add3 = n => n + 3;
    const add10 = n => n + 10;

    const result = 3
      |> add1
      |> add3
      |> add10;

    expect(result).toEqual(17);
  });

  test('rest spread', () => {
    const { a, ...rest1 } = obj;
    const [v1, ...rest2] = array;

    expect(a).toEqual(1);
    expect(rest1).toMatchObject({ b: 2, c: 3 });

    expect(v1).toEqual(1);
    expect(rest2.join()).toEqual('2,3,4,5,6');
  });

  test('class transformations', () => {
    class Foo {
      param1 = 'p1'

      fn1 = () => `fn1 - ${this.param1}`;
    }

    const f = new Foo();

    expect(f.param1).toEqual('p1');
    expect(f.fn1()).toEqual('fn1 - p1');
  });
});
