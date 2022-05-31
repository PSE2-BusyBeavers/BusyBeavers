import { DataGrid, GridColumns, GridInitialState } from '@mui/x-data-grid'
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
        headerName: 'string',
        flex: 0.5
      },
      {
        field: 'createdAt',
        headerName: 'Erstellunsdatum',
        flex: 0.5
      },
      {
        field: 'lastUpdate',
        headerName: 'Letzte Änderung',
        flex: 0.5
      },
      {
        field: 'status',
        headerName: 'Status',
        flex: 0.5
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
