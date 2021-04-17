import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {

  const [ insertMode, setInsertMode ] = useState(false);

  const saveExpenseDataHandler = (obj) => {
    const expense = {
      ...obj,
      id: Math.random().toString()
    };
    props.onSaveExpenseData(expense);
  };

  const resetFormHandler = () => setInsertMode(false);

  const insertModeClickHandler = () => setInsertMode(true);

  if (!insertMode) {
    return (
      <div className="new-expense">
        <button onClick={ insertModeClickHandler }>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler } onResetForm={ resetFormHandler }/>
    </div>
  );

}

export default NewExpense;
