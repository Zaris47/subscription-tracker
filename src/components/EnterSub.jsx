import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";

const EnterSub = (props) => {
  const [subItem, setSubItem] = useState("");
  const [open, setOpen] = useState(false);

  // Handling Error Snackbar
  const SlideTransition = (props) => {
    return <Slide {...props} direction="down" />;
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subItem.trim().length === 0) {
      // alert("Please enter an item");
      setOpen(true);
    } else {
      props.onAddItem(subItem);
      setSubItem("");
    }
  };

  const handleInputChange = (e) => {
    setSubItem(e.target.value);
  };

  return (
    <form className="Enter-Task" onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Enter Task"
            variant="filled"
            value={subItem}
            onChange={handleInputChange}
          />
        </Box>
        <Button variant="contained" type="submit">
          Add
        </Button>
      </Stack>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Please enter an item!
        </Alert>
      </Snackbar>
    </form>
  );
};

export default EnterSub;
