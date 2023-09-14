import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { carsColumn, motorcyclesColumn } from '../../../data/columnList';
import { VehiclesParams } from '../../../services/http/types';
import CustomTable from '../../../components/CustomTable/CustomTable';
import { TabsTypes } from './types';

type TabsProps = {
  data: VehiclesParams[],
  tabValue: TabsTypes,
  isLoading: boolean,
  handleChange: (event: React.SyntheticEvent, newValue: TabsTypes) => void
};

export default function Tabs({ data, tabValue, handleChange, isLoading }: TabsProps) {
  return (
    <Box sx={ { width: '100%', typography: 'body1' } }>
      <TabContext value={ tabValue }>
        <Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
          <TabList onChange={ handleChange } aria-label="lab API tabs example">
            <Tab label="Carros" value="car" />
            <Tab label="Motos" value="motorcycle" />
          </TabList>
        </Box>
        <TabPanel value="car">
          <CustomTable
            dataList={ data }
            loading={ isLoading }
            columnList={ carsColumn }
          />
        </TabPanel>
        <TabPanel value="motorcycle">
          <CustomTable
            dataList={ data }
            loading={ isLoading }
            columnList={ motorcyclesColumn }
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
