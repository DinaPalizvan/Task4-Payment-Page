"use client";
import * as React from "react";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useContext } from "react";
import { dataContext } from "@/app/page";
import { Typography } from "@mui/material";

export default function PaymentMethod() {
  const { setSelectedPaymentMethod, setDisabled } = useContext(dataContext);

  return (
    <>
      <RadioGroup
        aria-label="platform"
        overlay
        name="platform"
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-evenly",
          gap: 2,
          [`& .${radioClasses.checked}`]: {
            [`& .${radioClasses.action}`]: {
              inset: -1,
              border: "3px solid",
              borderColor: "#088395",
            },
          },
          [`& .${radioClasses.radio}`]: {
            display: "contents",
            "& > svg": {
              zIndex: 2,
              position: "absolute",
              top: "-8px",
              right: "-8px",
              bgcolor: "background.surface",
              color: "#088395",
              borderRadius: "50%",
            },
          },
        }}
      >
        {["One-Step Payment", "Installment Payment"].map((value) => (
          <Sheet
            key={value}
            variant="outlined"
            sx={{
              borderRadius: "md",
              boxShadow: "sm",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.5,
              p: 2,
              width: 300,
              height: 150,
              justifyContent: "center",
              bgcolor: "#C1ECE4",
            }}
            onClick={() => {
              setSelectedPaymentMethod(value);
              setDisabled(false);
            }}
          >
            <Radio
              id={value}
              value={value}
              checkedIcon={<CheckCircleRoundedIcon />}
            />
            <FormLabel htmlFor={value} sx={{ fontSize: 25, color: "#1D3E53" }}>
              {value}
            </FormLabel>
            <Typography size="small" color="#088395">
              {value === "One-Step Payment" ? "GET STARTED" : "CHOOSE STEPS"}
            </Typography>
          </Sheet>
        ))}
      </RadioGroup>
    </>
  );
}
