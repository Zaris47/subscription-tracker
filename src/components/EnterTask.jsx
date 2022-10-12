import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const EnterTask = () => {
  return (
    <div className="Enter-Task">
        
    <Stack direction="row" spacing={2} justifyContent="center">
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Filled" variant="filled" />
    </Box>
      <Button variant="contained">Contained</Button>
    </Stack>
  </div>
  )
}

export default EnterTask