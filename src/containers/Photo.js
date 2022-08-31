import React from "react";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Photo = (props) => {
  const photo = useSelector((state) => state.photo);
  console.log(photo)
  return (
    <Grid container direction="column" alignItems="center" columnGap="10px">
      <Grid item>
        <img src={photo.url} alt={photo.title} />
      </Grid>
      <Grid item>
        <Typography>{photo.title}</Typography>
      </Grid>
    </Grid>
  );
};

export default Photo;
