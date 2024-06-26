import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHOR } from "../../graphql/querys";
import { useParams } from "react-router-dom";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import CartEL from "../../shared/CartEL";
import Loader from "../../shared/Loader";
function AuthorPage() {
  const { slug } = useParams();
  const { loading, data } = useQuery(GET_AUTHOR, {
    variables: { slug },
  });
  if (loading)
    return (
      <Grid container sx={{ height: "100vh" }} mt={10}>
        <Loader />
      </Grid>
    );
  const { author } = data;
  const { authorss: posts } = author;
  console.log(posts);
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Avatar
            src={author.avatar.url}
            sx={{ width: "250px", height: "250px" }}
          />
          <Typography component="h3" variant="h5" fontWeight={600}>
            {author.name}
          </Typography>
          <Typography
            component="p"
            variant="p"
            color="GrayText"
            fontWeight={500}
          >
            {author.field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{ __html: author.description.html }}
          ></div>
        </Grid>
        <Typography component="p" variant="p" mt={5} fontWeight={700}>
          مقالات
        </Typography>
        <Grid container spacing={2} mt={1}>
          {posts.map((post) => (
            <Grid item key={post.id}>
              <CartEL title={post.title} cover={post.cover} slug={post.slug} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
