import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POST } from "../../graphql/querys";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../shared/Loader";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import CommentForm from "../comment/CommentForm";
import ShowComments from "../comment/ShowComments";
function BlogPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_POST, { variables: { slug } });
  const navigat = useNavigate();
  if (loading) return <Loader />;
  const { post } = data;
  return (
    <Container maxWidth="lg">
      <Grid container mt={3}>
        <Grid
          item
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Typography
            component="h2"
            variant="h5"
            fontWeight={800}
            color="#0077b6"
          >
            {post.title}
          </Typography>
          <ArrowBackRounded
            onClick={() => navigat(-1)}
            style={{ cursor: "pointer", color: "#0077b6" }}
          />
        </Grid>
        <Grid item xs={12} mt={1}>
          <img
            src={post.cover.url}
            alt={post.title}
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>
        <Grid item mt={2} xs={12} display="flex" alignItems="center">
          <Avatar
            src={post.author.avatar.url}
            alt={post.author.name}
            sx={{ width: "85px", height: "85px" }}
          />
          <Box mr={3} component="div">
            <Typography component="p" variant="p" fontWeight={600}>
              {post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="gray" fontWeight={500}>
              {post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{
              __html: post.contant.html,
            }}
          ></div>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <ShowComments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
