import { DataGrid, GridColumns, GridInitialState } from '@mui/x-data-grid'
import formatTableDate from '@src/utils/formatTableDate'
import { useMemo } from 'react'
type Props = {
  customers: {
    name: string
    amountCarrier: number
    amountMaintenance: number
    lastUpdate: Date
  }[]
}

const CustomerTable = ({ customers }: Props) => {
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
        field: 'name',
        headerName: 'Kunde',
        flex: 0.3
      },
      {
        field: 'amountCarrier',
        headerName: 'Anzahl Ladungsträger',
        flex: 0.5
      },
      {
        field: 'amountMaintenance',
        headerName: 'Anzahl Reperaturaufträge',
        flex: 0.5
      },
      {
        field: 'lastUpdate',
        headerName: 'Letzte Analyse',
        flex: 0.5,
        valueGetter: formatTableDate
      }
    ],
    []
  )

  return (
    <DataGrid columns={columns} rows={customers} initialState={initialState} />
  )
}

export default CustomerTable
