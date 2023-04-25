import React from "react";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
//import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

const SubLists = (props) => {
  return (
    <Container maxWidth="md">
      {props.subList.length > 0 ? (
        <List>
          {props.subList.map((item, index) => (
            <>
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                    <ClearIcon />
                  </IconButton>
                }
              >
                <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div">
                  {item}
                </Typography>
                {/*alternative way to show the list  */}
                {/* <ListItemText primary={item}/> */}
              </ListItem>

              <Divider />
            </>
          ))}
        </List>
      ) : (
        <p>No entries</p>
      )}
    </Container>
  );
};

export default SubLists;
