import { Container } from '@mui/material';
import useOrders from '@src/hooks/useOrders';
import { useNavigate } from 'react-router-dom';
import { Chip, Tooltip } from '@mui/material';
import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridInitialState,
  GridRenderCellParams,
  GridRowParams,
} from '@mui/x-data-grid';
import formatTableDate from '@src/utils/formatTableDate';
import getOrderStatusLabel from '@src/utils/getOrderStatusLabel';
import { useMemo } from 'react';
// import { useUpdateOrderMutation } from '@src/api/client'
import { Search } from '@mui/icons-material';

const getColor = (status: string) => {
  if (status === 'in_maintenance') return 'warning';
  if (status === 'error_confirmed') return 'info';
  if (status === 'error_detected') return 'error';
  if (status === 'closed') return 'success';
  else return 'primary';
};

const Orders = () => {
  const [, orders] = useOrders();
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

  const handleViewReport = (id: string) => () => {
    navigate(`${id}`);
  };

  const columns: GridColumns = useMemo(
    () => [
      {
        field: 'id',
        headerName: 'Auftragsnummer',
        flex: 0.3,
      },
      // {
      //   field: 'customer',
      //   headerName: 'Kunde',
      //   flex: 0.5,
      // },
      // {
      //   field: 'created_at',
      //   headerName: 'Erstellungsdatum',
      //   flex: 0.5,
      //   valueGetter: formatTableDate,
      // },
      {
        field: 'updated_at',
        headerName: 'Letzte Änderung',
        flex: 0.5,
        valueGetter: formatTableDate,
      },
      {
        field: 'status',
        headerName: 'Status',
        flex: 0.5,
        renderCell: (params: GridRenderCellParams<string>) => (
          <Chip label={getOrderStatusLabel(params.value!)} color={getColor(params.value as any)} variant="outlined" />
        ),
      },
      {
        field: 'actions',
        type: 'actions',
        flex: 0.2,
        getActions: (params: GridRowParams) => [
          <Tooltip title="View">
            <GridActionsCellItem label="Report" icon={<Search />} onClick={handleViewReport(params.row.id)} />
          </Tooltip>,
        ],
      },
    ],
    [],
  );

  return (
    <Container sx={{ height: '100%', pt: 2 }}>
      <DataGrid
        columns={columns}
        rows={orders}
        initialState={initialState}
        onRowClick={(row) => navigate(`${row.id}`)}
      />
      ;
    </Container>
  );
};

export default Orders;
