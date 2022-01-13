import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Stack } from '@mui/material';
import useStyles from './UseStyle';



export default function CurrentYear() {
	const classes = useStyles();
	const [ inputFields, setInputFields ] = useState([ {  holidayName: '', date: '' } ]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('InputFields', inputFields);
	};

	const handleChangeInput = (index, event) => {
		const values = [ ...inputFields ];
		values[index][event.target.name] = event.target.value;
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