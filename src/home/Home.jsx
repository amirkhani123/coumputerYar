import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Blogs from "../components/blog/Blogs";
import Authors from "../components/author/Authors";
function Home() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4} mt={3}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={300}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} sm={7} md={8} mt={3} minHeight={750}>
          <Typography component="h3" variant="h5" fontWeight={300}>
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
