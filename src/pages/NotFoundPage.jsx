import { Container, Grid, Typography } from "@mui/material";
import React from "react";
function NotFoundPage() {
  return (
    <Container maxWidth="lg">
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography
            mt={5}
            component="h3"
            variant="h3"
            fontWeight={500}
            color="#ef476f"
          >
            صفحه مورد نظر یافت نشد !!!
          </Typography>
          <Typography
            component="h3"
            variant="h3"
            fontWeight={500}
            color="#ef476f"
            margin={5}
          >
            404
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NotFoundPage;
