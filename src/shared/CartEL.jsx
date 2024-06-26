import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function CartEL({ title, author, cover, slug }) {
  console.log(slug);
  return (
    <Card sx={{ borderRadius: 4, height: "470px" }}>
      {author && (
        <CardHeader
          sx={{ padding: "10px" }}
          avatar={<Avatar src={author.avatar.url} alt={author.name}></Avatar>}
          title={
            <Typography component="p" variant="p" mr={2}>
              {author.name}
            </Typography>
          }
        />
      )}

      <CardMedia component="img" height="250" image={cover.url} alt={title} />
      <CardContent>
        <Typography
          component="p"
          variant="p"
          margin={1}
          fontWeight={500}
          sx={{ minHeight: "70px" }}
        >
          {title}
        </Typography>
        <Divider />
        <CardActions>
          <Link to={`/blog/${slug}`} style={{ width: "100%" }}>
            <Button variant="contained" sx={{ width: "100%" }}>
              خواندن مقاله
            </Button>
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
}
