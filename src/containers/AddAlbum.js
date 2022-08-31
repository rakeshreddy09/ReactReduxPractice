import { Grid, Box, Button, Dialog, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import API from "../services/API";

const AddAlbum = () => {
    const [photoId,setPhotoId]=useState(0)
    const [albumId,setAlbumId]=useState(0)
    const [url,setUrl]=useState("")
    const [thumbnailUrl,setThumbnailUrl]=useState("")

    const [phototitle,setTitle]=useState("")
    const [err,setErr]=useState(false)
    const handleAlbumId=(event)=>{
        setAlbumId(event.target.value)
        }
    const handlePhotoId=(event)=>{
    setPhotoId(event.target.value)
    }
    const handleTitle=(event)=>{
        setTitle(event.target.value)
    }
    const handleUrl=(event)=>{
        setUrl(event.target.value)
    }
    const handleThumbnailUrl=(event)=>{
        setThumbnailUrl(event.target.value)
    }
    const handleSubmit=async()=>{
        await API
        .post(`photos/`, {
            albumId:albumId,
            id:photoId,
            title: phototitle,
            url:url,
            thumbnailUrl:thumbnailUrl
        }).then(()=>{
            setErr(false)

        }).catch(()=>{
            setErr(true)
        })
    }
  return (
    <Grid container direction="column" alignItems="center" rowGap="10px" paddingTop="200px">
        <Grid item>
        <TextField type="number" onChange={handleAlbumId}  placeholder="Enter Album ID " />
        </Grid>
        <Grid item>
        <TextField type="number" onChange={handlePhotoId}  placeholder="Enter Photo ID " />
        </Grid>
        <Grid item>
        <TextField  onChange={handleTitle}  placeholder="Enter Title " />
        </Grid>
        <Grid item>
        <TextField  onChange={handleUrl}  placeholder="Enter Url" />
        </Grid>
        <Grid item>
        <TextField  onChange={handleThumbnailUrl}  placeholder="Enter ThumbnailUrl" />
        </Grid>
        <Grid item>
        <Button variant="contained" color="error" onClick={handleSubmit}>
         Submit
        </Button>{" "}
        </Grid>
        <Grid item>
          {err?<Typography color="red">Error</Typography>:" "}
        </Grid>
    </Grid>
  )
}

export default AddAlbum