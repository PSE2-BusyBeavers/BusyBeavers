import { DataGrid, GridColumns, GridInitialState } from '@mui/x-data-grid';
import formatTableDate from '@src/utils/formatTableDate';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  customers: {
    name: string;
    amountCarrier: number;
    amountMaintenance: number;
    lastUpdate: Date;
  }[];
};

const CustomerTable = ({ customers }: Props) => {
  const navigate = useNavigate();

  const initialState = useMemo<GridInitialState>(
    () => ({
      sorting: {
        sortModel: [
          {
            field: 'lastUpdate',
            sort: 'asc',
          },
        ],
      },
    }),
    [],
  );

  const columns: GridColumns = useMemo(
    () => [
      {
        field: 'name',
        headerName: 'Kunde',
        flex: 0.3,
      },
      {
        field: 'amountCarrier',
        headerName: 'Anzahl Ladungsträger',
        flex: 0.5,
      },
      {
        field: 'amountMaintenance',
        headerName: 'Anzahl Reparaturaufträge',
        flex: 0.5,
      },
      {
        field: 'lastUpdate',
        headerName: 'Letzte Analyse',
        flex: 0.5,
        valueGetter: formatTableDate,
      },
    ],
    [],
  );

  return (
    <DataGrid
      columns={columns}
      rows={customers}
      initialState={initialState}
      onRowClick={(row) => navigate(`/customers/${row.id}/incidents`)}
    />
  );
};

export default CustomerTable;
