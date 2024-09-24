import Stepper from "@/components/Stepper";
import { Box, Container } from "@mui/material";

export default function MainPage() {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stepper />
      </Container>
    </>
  );
}
