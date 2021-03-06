import { chartsReducer, initialState } from './charts.reducer';

describe('Charts Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = chartsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
