import React from "react";
import "./SubLists.css";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
//import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";

const SubLists = (props) => {
  const handleDelete = (index) => {
    props.setSubList((prevList) => prevList.filter((item, i) => i !== index));
  };

  const lastIndex = props.subList.length - 1;

  return (
    <Container
      maxWidth="md"
      className="list"
      sx={{
        border: "2px solid #f1f1f1",
      }}
    >
      {props.subList.length > 0 ? (
        <List>
          {props.subList.map((item, index) => (
            <>
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={6}>
                    <Typography variant="h6" component="div">
                      {item.subItem}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" component="div" textAlign="right">
                      ${item.subCost} /
                    </Typography>
                    <Typography
                      variant="body2"
                      component="div"
                      textAlign="right"
                    >
                      {item.subTP}
                    </Typography>
                  </Grid>
                </Grid>

                {/*alternative way to show the list  */}
                {/* <ListItemText primary={item}/> */}
              </ListItem>
              {index !== lastIndex && <Divider />}
              {/* <Divider /> */}
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
