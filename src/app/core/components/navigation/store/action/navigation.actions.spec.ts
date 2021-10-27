import * as fromNavigation from './navigation.actions';

describe('changeNavigations', () => {
  it('should return an action', () => {
    expect(fromNavigation.changeSport('NFL').type).toBe(
      '[Navigation] Change Navigations'
    );
  });
});
