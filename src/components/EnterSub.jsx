import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const EnterSub = () => {
  const [subItem, setSubItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(subItem);
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
    </form>
  );
};

export default EnterSub;
