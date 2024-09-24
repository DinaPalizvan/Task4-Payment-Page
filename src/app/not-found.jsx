import { Stack, Typography } from "@mui/material";
import Image from "next/image";

function NotFound() {
  return (
    <>
      <Stack alignItems={"center"}>
        <Image src={"/404.jpg"} alt="404 cat" width={600} height={400} />
        <Typography variant="h5" align="center" sx={{ py: 5 }}>
          404 | The page you are looking for doesn't exist!
        </Typography>
      </Stack>
    </>
  );
}

export default NotFound;
