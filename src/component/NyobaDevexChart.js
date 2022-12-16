import React from 'react';
import Chart, {
  ArgumentAxis,
  Series,
  ZoomAndPan,
  Legend,
  ScrollBar,
  ValueAxis,
  CommonAxisSettings,
} from 'devextreme-react/chart';
import { zoomingData } from './data.js';

const visualRange = { startValue: 300, endValue: 500 };

class NyobaDevexChart extends React.Component {
  render() {
    return (
      <Chart
        id="chart"
        // palette="Harmony Light"
        dataSource={zoomingData}>
        <Series
          argumentField="arg"
          valueField="y1"
          type="spline"
          color="#456972"
        />
        {/* <Series argumentField="arg" valueField="y2" /> */}
        <ArgumentAxis
          // defaultVisualRange={visualRange}
          title="test argument axis"
        />
        <ValueAxis
          title="test value axis"
        />
        <ScrollBar visible={false} />
        <ZoomAndPan
          argumentAxis="both"
          // valueAxis="both"
          allowTouchGestures={true}
        />
        <Legend visible={false} />
        <CommonAxisSettings
          color="grey"
        >
        </CommonAxisSettings>
      </Chart>
    );
  }
}

export default NyobaDevexChart;