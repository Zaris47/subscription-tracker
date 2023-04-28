import React, { useState } from "react";
import "./EnterSub.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import InputAdornment from "@mui/material/InputAdornment";
import { NumericFormat } from "react-number-format";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputLabel from '@mui/material/InputLabel';


const EnterSub = (props) => {
  const [subItem, setSubItem] = useState("");
  const [open, setOpen] = useState(false);
  const [subCost, setSubCost] = useState("");
  const [subTP, setSubTP] = useState("");

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
    if (
      subItem.trim().length === 0 ||
      subCost.trim().length === 0 ||
      subTP.trim().length === 0
    ) {
      // alert("Please enter an item");
      setOpen(true);
    } else {
      // const newItem = {
      //   subItem: subItem,
      //   subCost: subCost
      // };
      //props.onAddItem(newItem);
      const newItem = {
        subItem: subItem,
        subCost: subCost,
        subTP: subTP,
      };
      props.onAddItem(newItem);
      setSubItem("");
      setSubCost("");
      setSubTP("");
    }
  };

  const handleInputChange = (e) => {
    setSubItem(e.target.value);
  };

  const handleSubCost = (e) => {
    setSubCost(e.target.value);
  };

  const handleSubTP = (e) => {
    setSubTP(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="Enter-Task" onSubmit={handleSubmit}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
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
            label="Enter Subscription"
            variant="filled"
            size="small"
            value={subItem}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />

          <TextField
          className="input"
            size="small"
            label="Amount"
            value={subCost}
            onChange={handleSubCost}
            id="formatted-numberformat-input"
            InputProps={{
              inputComponent: NumericFormat,
              inputProps: {
                thousandSeparator: true,
                //prefix: "$",
                valueIsNumericString: true,
              },
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            variant="filled"
            onKeyPress={handleKeyPress}
          />
          <FormControl sx={{ m: 1, minWidth: 120 }} variant="filled">
          <InputLabel id="billing-label">Billing</InputLabel>
            <Select
            labelId="billing-label"
              size="small"
              value={subTP}
              autoWidth
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleSubTP}
            >
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Yearly">Yearly</MenuItem>
            </Select>
            {/* Incase changing input variant <FormHelperText>Select billing cycle</FormHelperText> */}
          </FormControl>
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
          Please enter all fields!
        </Alert>
      </Snackbar>
    </form>
  );
};

export default EnterSub;
