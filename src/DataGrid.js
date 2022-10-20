import * as React from 'react';
import Box from '@mui/material/Box';
import useFetch from './useFetch';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'cityName',
    headerName: 'City name',
    width: 120,
    editable: true,
  },
  {
    field: 'pressure',
    headerName: 'Pressure',
    type: 'number',
    width: 90,
    editable: true,
  },
  {
    field: 'humidity',
    headerName: 'Humidity',
    type: 'number',
    width: 90,
    editable: true,
  },
  {
    field: 'temperature',
    headerName: 'Temperature',
    type: 'number',
    width: 110,
    editable: true
  },
];

export default function DataGridDemo() {
  const rows = useFetch()
  
  return (
    <Box sx={{ height: '100vh', width: '100vw' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
