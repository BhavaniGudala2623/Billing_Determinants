import * as React from "react";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/TextField';
import { Button } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@material-ui/core/IconButton';
import { v4 as uuidv4 } from 'uuid';
import useStyles from '../Holidays/UseStyle';



export default function CurrentYear() {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([{ id: uuidv4(), timezone1: '', timezone2: '' }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('InputFields', inputFields);
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), timezone1: '', timezone2: '' }]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(values.findIndex((value) => value.id === id), 1);
    setInputFields(values);
  };
  const clearField = () => {
    alert('elements cleared');
  };
  return (
    <Grid container direction="row" >
      <form className={classes.root} onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <IconButton
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
            >
              <RemoveCircleIcon />
            </IconButton>
          
            <TextField
              name="timezone1"
              type="time"
              label="Enter From Time"
              variant="standard"
              value={inputField.timezone1}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <TextField
              name="timezone2"
              type="time"
              label="Enter From Time"
              variant="standard"
              value={inputField.timezone2}
              onChange={(event) => handleChangeInput(index, event)}
            />

            
              <FormGroup   >
                <FormControlLabel name="scroll" control={<Switch defaultChecked color="primary" />} label="Active" />
              </FormGroup>
            

            <IconButton onClick={handleAddFields}>
              <AddCircleIcon />
            </IconButton>
          </div>
        ))}
        <br />
        <Grid container direction="column" alignItems="center" justify="center">
          <Stack spacing={2} direction="row">
            <Button variant="outlined" color="error" onClick={clearField}>
              Clear
            </Button>

            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Grid>
      </form>
    </Grid>
  );
}