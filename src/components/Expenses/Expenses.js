import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

  const filterByYearHandler = (year) => props.onFilterChange(year);

  const filteredList = props.data
    .filter((el) => el.date.getFullYear().toString() === props.selectedYear);

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterByYear={ filterByYearHandler } year={ props.selectedYear }/>
      <ExpensesChart list={ filteredList }/>
      <ExpensesList list={ filteredList } year={ props.selectedYear }/>
    </Card>
  );

}

export default Expenses;
