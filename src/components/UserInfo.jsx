"use client";
import { dataContext } from "@/app/page";
import { FormGroup, Stack, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";

export default function UserInfo() {
  const { userData, setDisabled } = useContext(dataContext);

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);

  useEffect(() => {
    validEmail && validName && validPhoneNumber
      ? setDisabled(false)
      : setDisabled(true);
  }, [validEmail, validName, validPhoneNumber]);

  return (
    <>
      <form style={{ width: "100%", height: "100%" }}>
        <Stack
          direction={"row"}
          sx={{ width: "100%", height: "100%" }}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          useFlexGap
        >
          <FormGroup item>
            <TextField
              error={!validName}
              color="primary"
              placeholder="Leonardo Dicaprio"
              variant="outlined"
              required
              helperText="Full Name"
              sx={{ width: 250 }}
              onChange={(e) => {
                e.target.value.trim()
                  ? setValidName(true)
                  : setValidName(false);
                userData.fullName = e.target.value;
              }}
            />
            <TextField
              color="primary"
              variant="outlined"
              type="date"
              required
              helperText="Date of Birth"
              sx={{ width: 250 }}
              onChange={(e) => {
                userData.birthDate = e.target.value;
              }}
            />
          </FormGroup>
          <FormGroup item>
            <TextField
              error={!validEmail}
              color="primary"
              placeholder="leo@gmail.com"
              variant="outlined"
              type="email"
              required
              helperText="Email"
              sx={{ width: 250 }}
              onChange={(e) => {
                const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                regex.test(e.target.value) && e.target.value.trim()
                  ? setValidEmail(true)
                  : setValidEmail(false);
                userData.email = e.target.value;
              }}
            />
            <TextField
              error={!validPhoneNumber}
              color="primary"
              placeholder="+98 ..."
              variant="outlined"
              type="tel"
              required
              helperText="Phone Number"
              sx={{ width: 250 }}
              onChange={(e) => {
                e.target.value.length > 10
                  ? setValidPhoneNumber(true)
                  : setValidPhoneNumber(false);
                userData.phoneNumber = e.target.value;
              }}
            />
          </FormGroup>
        </Stack>
      </form>
    </>
  );
}
