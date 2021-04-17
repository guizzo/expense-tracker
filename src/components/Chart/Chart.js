import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props) => {

  const totalMaximum = Math.max(...props.data.map((el) => el.value));

  return (
    <div className="chart">
      { props.data.map((el) => <ChartBar key={ el.id } value={ el.value } maxValue={ totalMaximum } label={ el.label }/>) }
    </div>
  );

}

export default Chart;
