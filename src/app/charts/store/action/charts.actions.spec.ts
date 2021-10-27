import * as fromChart from './charts.actions';

describe('changeCharts', () => {
  it('should return an action', () => {
    expect(fromChart.changeXAxis('USAGE').type).toBe(
      fromChart.CHART_ACTIONS.CHANGE_X_AXIS
    );
  });
});
