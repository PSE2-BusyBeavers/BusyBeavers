import { Button, ButtonGroup, Chip } from '@mui/material'
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
import FaceIcon from '@mui/icons-material/Face';
import CheckIcon from '@mui/icons-material/Check'
import PlumbingIcon from '@mui/icons-material/Plumbing';
import { useUpdateOrderMutation } from '@src/api/client'

type Props = {
  maintenances: {
    id: string
    customer: string
    createdAt: Date
    lastUpdate: Date
    status: string
    carrierId: string
  }[]
}

const getColor = (status: string) => {
  if (status === 'in_maintenance') return 'warning'
  if (status === 'error_confirmed') return 'info'
  if (status === 'error_detected') return 'error'
  if (status === 'closed') return 'success'
  else return 'primary'
}

const MaintenancesTable = ({ maintenances }: Props) => {
  const [ , updateOrder ] = useUpdateOrderMutation();

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

  const updateOrderStatus = (id: string, status: string) => () => {
    updateOrder({
      id: parseInt(id),
      status,
    })
  }

  const columns: GridColumns = useMemo(
    () => [
      {
        field: 'id',
        headerName: 'Auftragsnummer',
        flex: 0.3
      },
      // {
      //   field: 'customer',
      //   headerName: 'Kunde',
      //   flex: 0.5
      // },
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
        flex: 1.5,
        getActions: (params: GridRowParams) => [
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button
              startIcon={<FaceIcon />}
              onClick={updateOrderStatus(params.row.id, 'error_confirmed')}
              disabled={params.row.status !== 'error_detected'}
            >Confirm Issue</Button>
            <Button
              startIcon={<PlumbingIcon />}
              onClick={updateOrderStatus(params.row.id, 'in_maintenance')}
              disabled={params.row.status !== 'error_confirmed'}
            >Start maintenance</Button>
            <Button
              startIcon={<CheckIcon />}
              onClick={updateOrderStatus(params.row.id, 'close')}
              disabled={params.row.status !== 'in_maintenance'}
            >Close</Button>
          </ButtonGroup>
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
