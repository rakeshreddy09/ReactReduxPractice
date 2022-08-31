import { Box, Button, Dialog, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import API from "../services/API";
import { useSelector, useDispatch } from "react-redux";
import {
  setAllPhotos,
  setAlbum,
  selectedPhoto,
} from "../redux/actions/productsActions";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [albumDialog, setAlbumDialog] = useState(false);
  const [photoDialog, setPhotoDialog] = useState(false);
  const [albumId, setAlbumId] = useState(0);
  const [photoId, setPhotoId] = useState(0);
  const [deletePhotoId, setdeletePhotoId] = useState(0);
  const [deletePhotoDialog, setDeletePhotoDialog] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const navigate = useNavigate();
  const fetchByPhotoId = async () => {
    const response = await API.get(`photos/${photoId}`).catch((err) =>
      console.log(err)
    );
    dispatch(selectedPhoto(response.data));
    setPhotoDialog(false);
    console.log(response.data);
    navigate("/photo");
  };
  const fetchByAlbumId = async () => {
    const response = await API.get(`albums/${albumId}/photos`).catch((err) =>
      console.log(err)
    );
    dispatch(setAlbum(response.data));
    setAlbumDialog(false);
    navigate("/albums");
  };
  const deletePhoto = async () => {
    await API.delete(`photos/${deletePhotoId}`)
      .then(() => {
        setDeletePhotoDialog(false);
        navigate("/delete");
      })
      .catch((err) => {
        console.log(err);
        setDeleteStatus(true)
      });
  };
  const fetchAllPhotos = async () => {
    const response = await API.get("/photos").catch((err) => console.log(err));
    dispatch(setAllPhotos(response.data));
    navigate("/photos");
  };
  const handleChange = (event) => {
    setAlbumId(event.target.value);
  };
  const hanldePhotoId = (event) => {
    setPhotoId(event.target.value);
  };
  const handleDelete = (event) => {
    setdeletePhotoId(event.target.value);
  };
  return (
    <Box
      marginTop={0}
      position="relative"
      direction="row"
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      padding="30px"
      border="1px solid"
    >
      <Button variant="contained" color="primary" onClick={fetchAllPhotos}>
        Get All Photos
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          setAlbumDialog(true);
        }}
      >
        Get By Album Id
      </Button>
      <Button
        variant="contained"
        color="warning"
        onClick={() => {
          setPhotoDialog(true);
        }}
      >
        Get By Photo Id
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          setDeletePhotoDialog(true);
        }}
      >
        Delete By Photo Id
      </Button>
      <Dialog open={albumDialog}>
        <TextField type="number" onChange={handleChange} />
        <Button variant="contained" color="success" onClick={fetchByAlbumId}>
          Submit
        </Button>{" "}
      </Dialog>
      <Dialog open={photoDialog}>
        <TextField type="number" onChange={hanldePhotoId} />
        <Button variant="contained" color="success" onClick={fetchByPhotoId}>
          Submit
        </Button>{" "}
      </Dialog>
      <Dialog open={deletePhotoDialog}>
        <TextField type="number" onChange={handleDelete} error={deleteStatus}/>
        <Button variant="contained" color="error" onClick={deletePhoto}>
          Submit
        </Button>{" "}
      </Dialog>
    </Box>
  );
};

export default Header;