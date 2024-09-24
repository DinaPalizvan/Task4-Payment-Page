"use client";
import { Button, Container, Typography } from "@mui/material";

function error({ error, reset }) {
  return (
    <Container>
      <Typography variant="h5" align="center">
        {error.message}
      </Typography>
      <Button variant="contained" onClick={() => reset()}>
        Reset
      </Button>
    </Container>
  );
}

export default error;
