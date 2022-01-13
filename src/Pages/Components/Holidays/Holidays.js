import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PreviousYear from './PreviousYear';
import CurrentYear from './CurrentYear.js';
import NextYear from './NextYear';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Holidays() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (

    <Box sx={{ width: 500, borderColor: 'primary.main' }} >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullwidth"
          aria-label="full width tabs example"
        >

          <Tab label="Previous year" {...a11yProps(0)} />
          <Tab label="current year" {...a11yProps(1)} />
          <Tab label="next year" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <br />
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>

          <PreviousYear />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CurrentYear />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <NextYear />
        </TabPanel>
      </SwipeableViews>
    </Box>

  );


}