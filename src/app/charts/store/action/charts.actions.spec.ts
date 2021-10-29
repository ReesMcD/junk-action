import * as fromChart from './charts.actions';

describe('changeCharts', () => {
  it('should return an action', () => {
    expect(fromChart.changeXAxis({ label: 'USAGE' }).type).toBe(
      fromChart.ChartsActions.ChangeXAxis
    );
  });
});
