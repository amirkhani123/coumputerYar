import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { SEND_COMMENT } from "../../graphql/querys";
import toast from "react-hot-toast";
function CommentForm({ slug }) {
  const [form, setForm] = useState({ name: "", gmail: "", text: "" });
  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: { ...form, slug },
  });
  const formHandeler = (e) => {
    name = e.target.name;
    setForm((form) => ({ ...form, [name]: e.target.value }));
  };
  const sendCommentHandeler = () => {
    if (!form.name && !form.gmail && !form.text) {
      toast.error("مقادیر را کامل وارد کنید !");
      return;
    } else {
      toast.success(" کامنت  شما با موفیقت ارسال شد ");
      sendComment();
    }
  };
  return (
    <Grid
      container
      mt={7}
      sx={{
        boxShadow: "2px 2px 10px gray",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <Grid item xs={12}>
        <Typography component="p" variant="p" color="#0077b6" fontWeight={600}>
          ارسال کامنت
        </Typography>
      </Grid>
      <Grid container mt={4} spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="نام کاربری"
            variant="outlined"
            sx={{ width: "100%" }}
            required
            name="name"
            onChange={formHandeler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="ایمیل"
            variant="outlined"
            sx={{ width: "100%" }}
            required
            name="gmail"
            onChange={formHandeler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="متن کامنت"
            variant="outlined"
            sx={{ width: "100%" }}
            required
            multiline
            minRows={3}
            name="text"
            onChange={formHandeler}
          />
        </Grid>
        <Grid item xs={12}>
          {loading ? (
            <Button disabled>درحال ارسال </Button>
          ) : (
            <Button variant="contained" onClick={sendCommentHandeler}>
              ارسال
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CommentForm;
