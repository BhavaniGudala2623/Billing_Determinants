import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function SeasonsContent() {
  const [inputFields, setInputFields] = useState([{ fromdate: '', todate: '' }]);



  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };


  return (

    <Grid spacing={3} >
      <Grid item xs={2}>
      <TextField
        name="fromdate"
        type="date"
        label="Holiday Date"
        variant="standard"
        value={inputFields.date}
        onChange={(event) => handleChangeInput( event)}
      />
      </Grid>
      <Grid item xs={2}>
      <TextField
        name="todate"
        type="date"
        label="Holiday Date"
        variant="standard"
        value={inputFields.date}
        onChange={(event) => handleChangeInput( event)}
      />
      </Grid>
    </Grid>
  );

}


export default function Seasons() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( "submitted")
  };

  const clearField = () => {
    alert('elements cleared');
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 1, md: 1 }} container justifyContent="center" sx={{ 'marginLeft': 'auto' }} alignItems="center" justify="center">

        <Grid item xs={2}>

        </Grid>
        <Grid item xs={3} >
          <Typography variant='h7' gutterBottom >Season 1 :</Typography>
        </Grid>
        <Grid item xs={5}>
          <SeasonsContent />
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='h7' gutterBottom >Season 2 :</Typography>
        </Grid>
        <Grid item xs={5} >
          <SeasonsContent />
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='h7' gutterBottom >Season 3 :</Typography>
        </Grid>
        <Grid item xs={5}>
          <SeasonsContent />
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='h7' gutterBottom >Season 4 :</Typography>
        </Grid>
        <Grid item xs={5}>
          <SeasonsContent />
        </Grid>
        <Grid item xs={2}>
        </Grid>


        <Grid container direction="column" alignItems="center" justify="center" paddingTop={2}>
          <Stack spacing={2} direction="row">
            <Button variant="outlined" color="error" onClick={clearField}>
              Clear
            </Button>

            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  )
}
