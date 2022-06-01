import { Chip } from '@mui/material'
import {
  DataGrid,
  GridColumns,
  GridInitialState,
  GridRenderCellParams
} from '@mui/x-data-grid'
import formatTableDate from '@src/utils/formatTableDate'
import getOrderStatusLabel from '@src/utils/getOrderStatusLabel'
import { useMemo } from 'react'
type Props = {
  maintenances: {
    id: string
    customer: string
    createdAt: Date
    lastUpdate: Date
    status: string
  }[]
}

const getColor = (status: string) => {
  if (status === 'in_process') return 'warning'
  if (status === 'error_detected') return 'error'
  if (status === 'closed') return 'success'
  else return 'primary'
}

const MaintenancesTable = ({ maintenances }: Props) => {
  const initialState = useMemo<GridInitialState>(
    () => ({
      sorting: {
        sortModel: [
          {
            field: 'lastUpdate',
            sort: 'asc'
          }
        ]
      }
    }),
    []
  )

  const columns: GridColumns = useMemo(
    () => [
      {
        field: 'id',
        headerName: 'Auftragsnummer',
        flex: 0.3
      },
      {
        field: 'customer',
        headerName: 'Kunde',
        flex: 0.5
      },
      {
        field: 'createdAt',
        headerName: 'Erstellunsdatum',
        flex: 0.5,
        valueGetter: formatTableDate
      },
      {
        field: 'lastUpdate',
        headerName: 'Letzte Änderung',
        flex: 0.5,
        valueGetter: formatTableDate
      },
      {
        field: 'status',
        headerName: 'Status',
        flex: 0.5,
        renderCell: (params: GridRenderCellParams<string>) => (
          <Chip
            label={getOrderStatusLabel(params.value!)}
            color={getColor(params.value as any)}
            variant='outlined'
          />
        )
      }
    ],
    []
  )

  return (
    <DataGrid
      columns={columns}
      rows={maintenances}
      initialState={initialState}
    />
  )
}

export default MaintenancesTable
