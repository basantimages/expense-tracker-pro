import React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import { verifyMail } from "../store/auth-thunks";

const Buttons = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  function logoutHandler() {
    dispatch(authActions.logout());
  }

  function verifyMailHandler() {
    dispatch(verifyMail());
  }

  return (
    <Stack direction="row">
      {!isAuthenticated && (
        <Button variant="outlined" color="inherit" size="small" component={Link} to="/auth">
          Signup
        </Button>
      )}
      {isAuthenticated && (
        <Button
          variant="outlined"
          color="error"
          size="small"
          sx={{ mr: "1rem" }}
          onClick={logoutHandler}
        >
          Logout
        </Button>
      )}
      {isAuthenticated && (
        <Button variant="outlined" color="inherit" size="small" onClick={verifyMailHandler}>
          verify email
        </Button>
      )}
    </Stack>
  );
};

export default Buttons;
