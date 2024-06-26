import { Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        sx={{
          bgcolor: "dark.black",
          color: "dark.white",
          textAlign: "center",
          fontSize: "1.1rem",
          padding: "10px",
        }}
        mt={5}
      >
        ساخته شده با ❤️ توسط امیر خانی
      </Typography>
    </footer>
  );
}

export default Footer;
