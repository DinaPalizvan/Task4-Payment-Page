"use client";
import * as React from "react";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useContext } from "react";
import { dataContext } from "@/app/page";
import { plans } from "@/app/db/FakeData";
import { Typography } from "@mui/material";

export default function Plan() {
  const { setSelectedPlan, setDisabled } = useContext(dataContext);

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
              borderRadius: "50%",
              color: "#088395",
            },
          },
        }}
      >
        {plans.map((value) => (
          <Sheet
            key={value.id}
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
              setSelectedPlan(value);
              setDisabled(false);
            }}
          >
            <Radio
              id={value.id}
              value={value.name}
              checkedIcon={<CheckCircleRoundedIcon />}
            />
            <FormLabel
              htmlFor={value.name}
              sx={{ fontSize: 25, color: "#1D3E53" }}
            >
              {value.name}
            </FormLabel>
            <Typography variant="h6" color="#088395">
              {value.price}
            </Typography>
            {value.name === "Three-Month Plan" && (
              <Typography
                variant="p"
                sx={{
                  bgcolor: "#FB2576",
                  color: "white",
                  padding: 0.75,
                  borderRadius: 3,
                  textAlign: "center",
                  fontSize: 13,
                  position: "absolute",
                  right: 10,
                  bottom: 10,
                }}
              >
                popular
              </Typography>
            )}
          </Sheet>
        ))}
      </RadioGroup>
    </>
  );
}
