import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NoItem = () => {
  return (
    <Box mt="5rem">
      <Typography variant="body1" component="h6" color="initial" textAlign="center">
        Nothing to show !
      </Typography>
      <Typography variant="p" component="h6" color="initial" textAlign="center">
        Please add some expenses.
      </Typography>
    </Box>
  );
};

export default NoItem;
