import { Button, ButtonGroup, Chip, Tooltip } from '@mui/material'
import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridInitialState,
  GridRenderCellParams,
  GridRowParams
} from '@mui/x-data-grid'
import formatTableDate from '@src/utils/formatTableDate'
import getOrderStatusLabel from '@src/utils/getOrderStatusLabel'
import { useMemo } from 'react'
import { useUpdateOrderMutation } from '@src/api/client'
import { Search } from '@mui/icons-material'
import Order from '@src/types/Order'

type Props = {
  maintenances: Order[]
  onSelect?: (id: string) => void
}

const getColor = (status: string) => {
  if (status === 'in_maintenance') return 'warning'
  if (status === 'error_confirmed') return 'info'
  if (status === 'error_detected') return 'error'
  if (status === 'closed') return 'success'
  else return 'primary'
}

const MaintenancesTable = ({ maintenances, onSelect }: Props) => {
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

  const handleViewReport = (id: string) => () => {
    onSelect && onSelect(id)
  }

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
        field: 'carrierId',
        headerName: 'Ladungsträger Id',
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
      },
      {
        field: 'actions',
        type: 'actions',
        flex: 0.2,
        getActions: (params: GridRowParams) => [
          <Tooltip title='View'>
            <GridActionsCellItem
              label='Report'
              icon={<Search />}
              onClick={handleViewReport(params.row.id)}
            />
          </Tooltip>
        ]
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
