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
import { Search } from '@mui/icons-material';

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
      {
        field: 'updated_at',
        headerName: 'Letzte Änderung',
        flex: 0.5,
        valueGetter: formatTableDate,
      },
      {
        field: 'assignee',
        headerName: 'Zugewiesen an',
        flex: 0.5,
      },
      {
        field: 'status',
        headerName: 'Status',
        flex: 0.5,
        renderCell: (params: GridRenderCellParams<string>) => <span>{getOrderStatusLabel(params.value!)}</span>,
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
        pageSize={10}
        initialState={initialState}
        onRowClick={(row) => navigate(`${row.id}`)}
      />
      ;
    </Container>
  );
};

export default Orders;
