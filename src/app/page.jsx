"use client";
import { createContext, useState } from "react";
import MainPage from "./MainPage";
import { initialUserData } from "./db/FakeData";

export const dataContext = createContext();

export default function Home() {
  const [userData, setUserData] = useState(initialUserData);
  const [selectedPaymentMetod, setSelectedPaymentMethod] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState({});

  const dataContextValue = {
    userData,
    setUserData,
    selectedPaymentMetod,
    setSelectedPaymentMethod,
    disabled,
    setDisabled,
    selectedPlan,
    setSelectedPlan,
  };

  return (
    <>
      <dataContext.Provider value={dataContextValue}>
        {/* <ThemeProvider theme={theme}> */}
        <MainPage />
        {/* </ThemeProvider> */}
      </dataContext.Provider>
    </>
  );
}
