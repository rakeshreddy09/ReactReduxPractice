import { Grid, Box, Button, Dialog, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import API from "../services/API";

const UpdateTitle = () => {
    const [photoId,setPhotoId]=useState(0)
    const [phototitle,setTitle]=useState("")
    const [err,setErr]=useState(false)
    const handlePhotoId=(event)=>{
    setPhotoId(event.target.value)
    }
    const handleTitle=(event)=>{
        setTitle(event.target.value)
    }
    const handleSubmit=async()=>{
        await API
        .patch(`photos/${photoId}`, {
            title: phototitle,
        }).then(()=>{
            setErr(false)

        }).catch(()=>{
            setErr(true)
        })
    }
  return (
    <Grid container direction="column" alignItems="center" rowGap="10px" paddingTop="200px">
        <Grid item>
        <TextField type="number" onChange={handlePhotoId}  placeholder="Enter Photo ID " />
        </Grid>
        <Grid item>
        <TextField  onChange={handleTitle}  placeholder="Enter Title To Update" />
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

export default UpdateTitle