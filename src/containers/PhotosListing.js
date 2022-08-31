import { Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const PhotosListing = () => {

  const photos = useSelector((state) => state.allPhotos.photos);

  return (
    <Grid
      container
      display="flex"
      justifyContent="space-around"
      marginTop="30px"
    >
      {photos.map((photo) => {
        return (
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="center"
              columnGap="10px"
              width="200px"
            >
              <Grid item>
                <img
                  src={photo.url}
                  alt={photo.title}
                  style={{ width: "200px", height: "200px" }}
                />
              </Grid>
              <Grid item>
                <Typography>{photo.title}</Typography>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PhotosListing;
