import { useQuery } from "@apollo/client";
import React from "react";
import { GET_COMMENTS } from "../../graphql/querys";
import { Avatar, Box, Grid, Typography } from "@mui/material";

function ShowComments({ slug }) {
  const { loading, data } = useQuery(GET_COMMENTS, { variables: { slug } });
  if (loading) return null;
  return (
    <>
      {!!data.comments.length && (
        <Grid
          container
          sx={{
            boxShadow: "1px 1px 10px gray",
            padding: "5px",
            borderRadius: "10px",
          }}
          mt={5}
        >
          {data.comments.map((comment) => (
            <Grid
              item
              xs={12}
              key={comment.id}
              sx={{
                boxShadow: "1px 1px 10px gray",
                padding: "5px",
                borderRadius: "10px",
                margin:"10px"
              }}
            >
              <Box component="div" display="flex" margin={2}>
                <Avatar>{comment.name[0]}</Avatar>
                <Typography component="p" variant="P" mt={1} mr={2}>
                  {comment.name}
                </Typography>
              </Box>
              <Typography component="p" variant="P" margin={2}>
                {comment.text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default ShowComments;
