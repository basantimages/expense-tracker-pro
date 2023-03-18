import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal-slice";
import expenseReducer from "./expense-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  reducer: { modals: modalReducer, expenses: expenseReducer, auth: authReducer },
});

export default store;
