import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

type TabsProps = {
  carsTable: React.ReactNode;
  motorcyclesTable: React.ReactNode;
};

export default function Tabs({ carsTable, motorcyclesTable }: TabsProps) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={ { width: '100%', typography: 'body1' } }>
      <TabContext value={ value }>
        <Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
          <TabList onChange={ handleChange } aria-label="lab API tabs example">
            <Tab label="Carros" value="1" />
            <Tab label="Motos" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">{ carsTable }</TabPanel>
        <TabPanel value="2">{ motorcyclesTable }</TabPanel>
      </TabContext>
    </Box>
  );
}
