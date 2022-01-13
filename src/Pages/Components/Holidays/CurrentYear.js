import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Stack } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@material-ui/core/IconButton';
import { v4 as uuidv4 } from 'uuid';
import useStyles from './UseStyle';



export default function CurrentYear() {
	const classes = useStyles();
	const [ inputFields, setInputFields ] = useState([ { id: uuidv4(), holidayName: '', date: '' } ]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('InputFields', inputFields);
	};

	const handleChangeInput = (index, event) => {
		const values = [ ...inputFields ];
		values[index][event.target.name] = event.target.value;
		setInputFields(values);
	};

	const handleAddFields = () => {
		setInputFields([ ...inputFields, { id: uuidv4(), holidayName: '', date: '' } ]);
	};

	const handleRemoveFields = (id) => {
		const values = [ ...inputFields ];
		values.splice(values.findIndex((value) => value.id === id), 1);
		setInputFields(values);
	};
	const clearField = () => {
		alert('elements cleared');
	};
	return (
		<Grid container direction="column" alignItems="center" justify="center">
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
							name="holidayName"
							label="Holiday Name"
							variant="standard"
							value={inputField.holidayName}
							onChange={(event) => handleChangeInput(index, event)}
						/>
						<TextField
							name="date"
              type="date"
							label="Holiday Date"
							variant="standard"
							value={inputField.date}
							onChange={(event) => handleChangeInput(index, event)}
						/>

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