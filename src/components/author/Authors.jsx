import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS } from "../../graphql/querys";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../../shared/Loader";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS);
  if (loading) return <Loader />;
  return (
    <Grid
      container
      sx={{
        boxShadow: "2px 2px 10px gray",
        padding: "5px",
        borderRadius: "10px",
      }}
    >
      {data.authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12}>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
                margin: "5px",
                textDecoration: "none",
                color: "black",
              }}
              to={`author/${author.slug}`}
            >
              <Avatar src={author.avatar.url} alt={author.name} />
              <Typography component="p" variant="p" mr={2} fontWeight={500}>
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {index != data.authors.length - 1 && (
            <Grid item xs={12}>
              <Divider />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
