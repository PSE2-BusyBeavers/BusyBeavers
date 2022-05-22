import { DataGrid, GridColumns, GridInitialState } from '@mui/x-data-grid'
import { useMemo } from 'react'

type Props = {}

const CarrierTable = () => {

  const columns: GridColumns = useMemo(() => [
    {
      field: 'id', headerName: 'Id', 
    },
    { field: 'name', headerName: 'Name'},
    {
      field: 'error', headerName: 'Error', flex: 0.5
    },
  ], []);
  
  const initialState = useMemo<GridInitialState>(() => ({
    sorting: {
      sortModel: [
        {
          field: 'id',
          sort: 'asc',
        },
      ],
    }
  }), []);

  return (
    <DataGrid
    columns={columns}
      rows={[]}
      initialState={initialState}
    />
  )
}

export default CarrierTable