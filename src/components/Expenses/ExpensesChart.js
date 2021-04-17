import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {

  const chartData = [
    { id: 1, label: 'Jan', value: 0 },
    { id: 2, label: 'Feb', value: 0 },
    { id: 3, label: 'Mar', value: 0 },
    { id: 4, label: 'Apr', value: 0 },
    { id: 5, label: 'May', value: 0 },
    { id: 6, label: 'Jun', value: 0 },
    { id: 7, label: 'Jul', value: 0 },
    { id: 8, label: 'Aug', value: 0 },
    { id: 9, label: 'Sep', value: 0 },
    { id: 10, label: 'Oct', value: 0 },
    { id: 11, label: 'Nov', value: 0 },
    { id: 12, label: 'Dec', value: 0 }
  ];

  for (const expense of props.list) {
    const expenseMonth = expense.date.getMonth();
    chartData[expenseMonth].value += expense.amount;
  }

  return <Chart data={ chartData }/>;

};

export default ExpensesChart;
