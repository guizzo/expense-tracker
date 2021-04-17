import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

  if (!props.list.length) {
    return <h2 className="expenses-list__fallback">No expenses found :)</h2>;
  }
  return (
    <ul className="expenses-list">
      { props.list.map((el) => <ExpenseItem key={ el.id } title={ el.title } amount={ el.amount } date={ el.date }/>) }
    </ul>
  );

};

export default ExpensesList;
