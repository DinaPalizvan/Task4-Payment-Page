import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { dataContext } from "@/app/page";
import { Button, Stack, Typography } from "@mui/material";

export default function PaymentTable() {
  const { selectedPlan, userData, selectedPaymentMetod } =
    React.useContext(dataContext);

  const currentMonth = new Date().getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonthName = months[currentMonth];

  const rows = [];
  const createData = (num) => {
    for (let i = 0; i < num; i++) {
      rows.push({
        month: months[(currentMonth + i) % 12],
        amount: selectedPlan.divided,
        status: i === 0 ? "paid" : "pending",
      });
    }
  };
  createData(selectedPlan.id + 1);

  const responsiveFontSize = {
    fontSize: { sm: 15, xs: 12 },
  };

  return (
    <>
      <Stack flexDirection={"column"} width={"100%"}>
        <Stack
          flexDirection={"row"}
          marginBottom={3}
          justifyContent={"space-evenly"}
          flexWrap={"wrap"}
        >
          <Typography variant="h5" marginX={3}>
            {userData.fullName}
          </Typography>
          <Typography variant="h5" marginX={3}>
            {userData.email}
          </Typography>
          <Typography variant="h5" marginX={3}>
            {selectedPlan.id
              ? `${selectedPlan.id + 1} month plan`
              : "one-step payment"}
          </Typography>
        </Stack>
        <TableContainer component={Paper}>
          <Table
            sx={{ width: "100%", background: "#F5F5F5" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow bgcolor="#37B7C3">
                <TableCell sx={responsiveFontSize}>Month</TableCell>
                <TableCell align="center" sx={responsiveFontSize}>
                  amount
                </TableCell>
                <TableCell align="center" sx={responsiveFontSize}>
                  status
                </TableCell>
                <TableCell align="center" sx={responsiveFontSize}>
                  payment
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedPaymentMetod === "One-Step Payment" ? (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={responsiveFontSize}>
                    {currentMonthName}
                  </TableCell>
                  <TableCell align="center" sx={responsiveFontSize}>
                    12,000,000
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      bgcolor: "lightyellow",
                      fontSize: { sm: 15, xs: 10 },
                    }}
                  >
                    pending
                  </TableCell>
                  <TableCell align="center" sx={responsiveFontSize}>
                    <Button>pay</Button>
                  </TableCell>
                </TableRow>
              ) : (
                rows.map((row, i) => (
                  <>
                    <TableRow
                      key={row.month}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={responsiveFontSize}
                      >
                        {row.month}
                      </TableCell>
                      <TableCell align="center" sx={responsiveFontSize}>
                        {row.amount}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          bgcolor: i === 0 ? "lightgreen" : "lightyellow",
                          fontSize: { sm: 15, xs: 10 },
                        }}
                      >
                        {row.status}
                      </TableCell>
                      <TableCell align="center" sx={responsiveFontSize}>
                        <Button disabled={i === 0 ? true : false} size="small">
                          pay
                        </Button>
                      </TableCell>
                    </TableRow>
                  </>
                ))
              )}

              <TableRow bgcolor="#37B7C3">
                <TableCell colSpan={3} sx={{ textAlign: "center" }}>
                  Total Payed
                </TableCell>
                <TableCell align="center" sx={responsiveFontSize}>
                  {selectedPaymentMetod === "One-Step Payment"
                    ? 0
                    : selectedPlan.divided}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
}
