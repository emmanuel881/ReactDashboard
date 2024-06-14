import React from "react";
import { Typography, Button, ButtonGroup, Container } from "@mui/material";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";

export default function Create() {
  return (
    <Container>
      <Typography variant="h1" color="secondary" component="h2" gutterBottom>
        Create a new note
      </Typography>
      <Button type="submit" color="primary" variant="contained">
        Submit
      </Button>
      <ButtonGroup variant="contained">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>
      <AcUnitOutlinedIcon />
    </Container>
  );
}
