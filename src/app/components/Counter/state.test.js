import * as _ from './state';

describe('state functions', () => {
  describe('initialState', () => {
    it('returns an object with the default initial value for counter', () => {
      expect(_.initialState()).toEqual({ counter: 1 });
    });

    it('returns an object with the value passed as param as initial value for counter', () => {
      expect(_.initialState(0)).toEqual({ counter: 0 });
    });
  });


  describe('increment', () => {
    const state = _.initialState(0);

    it('increments counter', () => {
      expect(_.increment(state)).toEqual({ counter: 1 });
    });

    describe('with step', () => {
      it('increments counter by a given step', () => {
        expect(_.increment(state, 10)).toEqual({ counter: 10 });
      });
    });
  });


  describe('decrement', () => {
    it('decrements counter', () => {
      const state = _.initialState(4);
      expect(_.decrement(state)).toEqual({ counter: 3 });
    });

    describe('with step', () => {
      it('decrements counter by a given step', () => {
        const state = _.initialState(20);
        expect(_.decrement(state, 10)).toEqual({ counter: 10 });
      });
    });
  });


  describe('reset', () => {
    it('resets state to its initial value', () => {
      const state = _.initialState(4);

      expect(_.reset(4)).toEqual(state);
    });
  });
});
