"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { steps } from "@/app/db/FakeData";
import UserInfo from "./UserInfo";
import { useContext } from "react";
import { dataContext } from "@/app/page";
import PaymentMethod from "./PaymentMethod";
import Plan from "./Plan";
import PaymentTable from "./PaymentTable";

export default function Stepper() {
  const { selectedPaymentMetod, disabled, setDisabled, setSelectedPaymentMethod } = useContext(dataContext);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    selectedPaymentMetod === "One-Step Payment" && activeStep === 1
      ? setActiveStep(3)
      : setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setDisabled(true);
  };

  const handleBack = () => {
    selectedPaymentMetod === "One-Step Payment" && activeStep === 3
      ? setActiveStep(1)
      : setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100vw", flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 70,
          pl: 2,
          bgcolor: "#088395",
          color: "#F1F0E8",
        }}
      >
        <Typography variant="h5">{steps[activeStep].step}</Typography>
      </Paper>
      <Box
        sx={{
          minHeight: 400,
          width: 800,
          width: "100vw",
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py:5
        }}
      >
        {activeStep === 0 && <UserInfo />}
        {activeStep === 1 && <PaymentMethod />}
        {activeStep === 2 && <Plan />}
        {activeStep === 3 && <PaymentTable />}
      </Box>
      <MobileStepper
        sx={{ bgcolor: "#088395", color: "#F1F0E8" }}
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={disabled}
            sx={{ color: "#F1F0E8" }}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ color: "#F1F0E8" }}
          >
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Box>
  );
}
