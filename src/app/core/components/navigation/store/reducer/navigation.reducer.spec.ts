import { navigationReducer, initialState } from './navigation.reducer';

describe('Navigation Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = navigationReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
