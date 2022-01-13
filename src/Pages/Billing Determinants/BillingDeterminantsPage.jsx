import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import WaterDamageIcon from '@mui/icons-material/WaterDamage';
import { Typography, AppBar, Box, CssBaseline, Toolbar, Container } from '@mui/material';
import Timezone from '../Components/Timezones/Timezone';
import Holidays from '../Components/Holidays/Holidays'
import { Grid } from '@mui/material';
import Seasons from '../Components/Seasons/Seasons'
import { flexbox } from '@mui/system';
import TabList from '@mui/lab/TabList';
import { TabContext } from '@mui/lab';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <>

      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    </>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BillingDeterminants() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (

    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar >
          <Box sx={{ width: '100%', maxWidth: 500 }}>

            <Typography variant='h6' gutterBottom component="div">Master Data Management</Typography>
            <Typography variant="h6" gutterBottom component="div">Billing Determinants </Typography>
          </Box>
        </Toolbar>
      </AppBar>


      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'primary', width: flexbox }}>



          <AppBar position="relative" color="inherit" size="small" container justifyContent="center"  >
            <Grid container justifyContent="center" sx={{ 'marginLeft': 'auto' }} alignItems="center" justify="center" >

              <TabContext value={value}>
                <Box sx={{ borderBottom: 2, borderColor: 'primary.main' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">


                    <Tabs value={value}
                      onChange={handleChange}
                      indicatorColor="secondary"
                      textColor="inherit"
                      variant="fullwidth"
                      aria-label="full width tabs example">

                      <Tab icon={<AccessTimeFilledIcon />} label="Timezones" {...a11yProps(0)} />
                      <Tab icon={<HolidayVillageIcon />} label="Holidays" {...a11yProps(2)} />
                      <Tab icon={<WaterDamageIcon />} label="Seasons" {...a11yProps(4)} />

                    </Tabs>
                  </TabList>
                </Box>
              </TabContext>
            </Grid>
          </AppBar>

        </Box>
        <Grid container justifyContent="center" sx={{ 'marginLeft': 'auto' }} alignItems="center"  >


          <TabPanel value={value} index={0}>
            <Timezone />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Holidays />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Seasons />
          </TabPanel>

        </Grid>
      </Box>
    </>
  );
}