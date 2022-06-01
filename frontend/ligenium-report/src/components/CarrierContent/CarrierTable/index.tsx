import { Container, Chip, Tooltip } from '@mui/material'
import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridInitialState,
  GridRenderCellParams,
  GridRowParams,
  GridValueGetterParams
} from '@mui/x-data-grid'
import { useMemo } from 'react'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred'
import SearchIcon from '@mui/icons-material/Search'
import Carrier from '@src/types/Carrier'
import getCarrierStatusLabel from '@src/utils/getCarrierStatusLabel'

type Props = {
  carrier: Required<Carrier>[]
}

const getColor = (status: string) => {
  if (status === 'locked') return 'warning'
  if (status === 'active') return 'error'
  if (status === 'in repair') return 'success'
  else return 'primary'
}

const CarrierTable = ({ carrier }: Props) => {
  const getErrorMessage = (params: GridValueGetterParams) => {
    return params.row.error.message
  }

  const columns: GridColumns = useMemo(
    () => [
      {
        field: 'carrier_id',
        headerName: 'Id',
        flex: 0.3
      },
      // { field: 'name', headerName: 'Name', flex: 0.3 },
      {
        field: 'assumption',
        headerName: 'Fehler',
        flex: 0.5
        // field: 'error', headerName: 'Error', flex: 0.5, valueGetter: getErrorMessage
      },
      //
      {
        field: 'status',
        headerName: 'Status',
        flex: 0.5,
        renderCell: (params: GridRenderCellParams<string>) => (
          <Chip
            label={getCarrierStatusLabel(params.value!)}
            color={getColor(params.value as any)}
            variant='outlined'
          />
        )
      },
      {
        field: 'actions',
        type: 'actions',
        getActions: (params: GridRowParams) => [
          <GridActionsCellItem
            label='Investigate'
            icon={<SearchIcon />}
            onClick={() => {}}
            disabled
          />,
          <Tooltip title='Report'>
            <GridActionsCellItem
              label='Report'
              icon={<ReportGmailerrorredIcon />}
              onClick={() => {}}
            />
          </Tooltip>
        ]
      }
    ],
    []
  )

  const initialState = useMemo<GridInitialState>(
    () => ({
      sorting: {
        sortModel: [
          {
            field: 'id',
            sort: 'asc'
          }
        ]
      }
    }),
    []
  )

  return (
    <Container sx={{ height: '100%', pt: 2 }}>
      <DataGrid columns={columns} rows={carrier} initialState={initialState} />
    </Container>
  )
}

export default CarrierTable
