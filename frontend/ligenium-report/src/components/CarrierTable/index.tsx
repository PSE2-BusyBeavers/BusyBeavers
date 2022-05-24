import { Container } from '@mui/material'
import { DataGrid, GridActionsCellItem, GridColumns, GridInitialState, GridRenderCellParams, GridRowParams, GridValueGetterParams } from '@mui/x-data-grid'
import { useMemo } from 'react'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SearchIcon from '@mui/icons-material/Search';
import type { Maintenance_Orders } from '../../api/client';

type Props = {
  carrier: Maintenance_Orders[]
}

const getColor = (status: string) => {
  if (status === "In Repair")
    return "warning"
  if (status === "Unobserved")
    return "error"
  if (status === "Ready")
    return "success"
  else
    return "primary"
}

const CarrierTable = ({ carrier }: Props) => {

  const getErrorMessage = (params: GridValueGetterParams) => {
    return params.row.error.message;
  }

  // TODO: extend carrier data
  //  {
  //     id: m.id,
  //     name: "Lig-1 V2",
  //     error: {
  //       message: m.assumption,
  //       value: '10 m/s^2 behind avarage',
  //       code: "20",
  //       origin: "accelerator"
  //     },
  //     status: "Unobserved",
  //     lastUpdate: new Date(2022, 1, 20, 13, 54, 1)
  //   })), [])
  // {
  //   id: "jfg8-325h-t32b-435f-k0a2",
  //   name: "Lig-2 V2",
  //   error: {
  //     message: "Humidity is too high",
  //     value: '20g/kg too high',
  //     code: "42",
  //     origin: "humidity"
  //   },
  //   status: "In Repair",
  //   lastUpdate: new Date(2022, 2, 18, 13, 44, 32)
  // }

  const columns: GridColumns = useMemo(() => [
    {
      field: 'id', headerName: 'Id', flex: 0.3,
    },
    // { field: 'name', headerName: 'Name', flex: 0.3 },
    {
      field: 'assumption', headerName: 'Error', flex: 0.5
      // field: 'error', headerName: 'Error', flex: 0.5, valueGetter: getErrorMessage
    },
    // {
    //   field: 'status', headerName: 'Status', flex: 0.5, renderCell: (params: GridRenderCellParams<string[]>) => (
    //     <Chip label={params.value} color={getColor(params.value as any)} variant="outlined" />
    //   )
    // },
    {
      field: 'actions', type: 'actions',
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem label="Investigate" icon={<SearchIcon />} onClick={() => { }} disabled />,
        <GridActionsCellItem label="Report" icon={<ReportGmailerrorredIcon />} onClick={() => { }} disabled  />
      ]
    }
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
    <Container sx={{ height:"100%", pt: 2}}>
      <DataGrid
        columns={columns}
        rows={carrier}
        initialState={initialState}
      />
    </Container>
  )
}

export default CarrierTable