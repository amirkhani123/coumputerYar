import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POSTS } from "../../graphql/querys";
import CartEL from "../../shared/CartEL";
import { Grid, Typography } from "@mui/material";
import Loader from "../../shared/Loader";
import { useSearchParams } from "react-router-dom";

function Blogs() {
  const { loading, data } = useQuery(GET_POSTS);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get("search");
  if (loading) return <Loader />;
  let allBlogs = data;
  if (searchText) {
    const showBlogs = allBlogs.posts.filter((blog) =>
      blog.title.includes(searchText)
    );
    return (
      <>
        {showBlogs.length ? (
          <Grid container spacing={2}>
            {showBlogs.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CartEL {...post} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography
            component="h3"
            variant="h5"
            fontWeight={500}
            textAlign="center"
            mt={10}
          >
            مقاله مورد نظر یافت نشد !!!
          </Typography>
        )}
      </>
    );
  } else {
    return (
      <Grid container spacing={2}>
        {allBlogs.posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <CartEL {...post} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default Blogs;
