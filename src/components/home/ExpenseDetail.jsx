import { useDispatch } from "react-redux";
import { TableCell, TableRow, Button } from "@mui/material";
import { modalActions } from "../store/modal-slice";
import { expenseActions } from "../store/expense-slice";

const ExpenseDetail = (props) => {
  const dispatch = useDispatch();

  function editHandler() {
    dispatch(modalActions.addExpenseHandler());
    dispatch(
      modalActions.editExpenseHandler({
        id: props.id,
        description: props.description,
        amount: props.amount,
        category: props.category,
        dateTime: props.dateTime,
      })
    );
  }

  function deleteHandler() {
    dispatch(expenseActions.removeExpense(props.id));
  }

  return (
    <TableRow>
      <TableCell>{props.description}</TableCell>
      <TableCell>{props.amount}</TableCell>
      <TableCell>{props.category}</TableCell>
      <TableCell
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button variant="outlined" color="success" size="small" onClick={editHandler}>
          Edit
        </Button>
        <Button variant="outlined" color="error" size="small" onClick={deleteHandler}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ExpenseDetail;
