import { Badge, Container } from '@mui/material';
import useOrders from '@src/hooks/useOrders';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridInitialState,
  GridRenderCellParams,
  GridRowParams,
} from '@mui/x-data-grid';
import formatTableDate from '@src/utils/formatTableDate';
import getOrderStatusLabel, { orderStatuses } from '@src/utils/getOrderStatusLabel';
import { useMemo } from 'react';
import { Mail } from '@mui/icons-material';
import { useUser } from '@src/hooks/useUser';
import { Notification } from '@src/api/client';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Orders = () => {
  const [, orders] = useOrders();
  const { user } = useUser();
  const navigate = useNavigate();

  const initialState = useMemo<GridInitialState>(
    () => ({
      sorting: {
        sortModel: [
          {
            field: 'updated_at',
            sort: 'desc',
          },
        ],
      },
    }),
    [],
  );

  const handleViewReport = (id: string) => () => {
    navigate(`${id}`);
  };

  const getMyUnReadNotifications = (order: { notifications: Notification[] }) =>
    (order.notifications as Notification[])
      .filter((n) => n.user_id === parseInt(user?.id as unknown as string))
      .filter((n) => n.read === false);
  const orderNeedsAction = (order: { status: string; notifications: Notification[] }) =>
    (order.status === 'error_confirmed' && user?.role === 'customer') || getMyUnReadNotifications(order).length > 0;

  const renderBold = (params: GridRenderCellParams<any, any, any>) => {
    if (orderNeedsAction(params.row)) return <strong>{params.value}</strong>;
  };

  const columns: GridColumns = useMemo(
    () => [
      {
        field: 'id',
        headerName: 'Auftragsnummer',
        flex: 0.3,
        renderCell: renderBold,
      },
      {
        field: 'updated_at',
        headerName: 'Letzte Änderung',
        flex: 0.5,
        valueGetter: formatTableDate,
        renderCell: renderBold,
      },
      {
        field: 'assignee',
        headerName: 'Zugewiesen an',
        flex: 0.5,
        renderCell: renderBold,
      },
      {
        field: 'status',
        headerName: 'Status',
        flex: 0.5,
        renderCell: (params: GridRenderCellParams<string>) => {
          if (orderNeedsAction(params.row)) return <strong>{getOrderStatusLabel(params.value!)}</strong>;
          return <span>{getOrderStatusLabel(params.value!)}</span>;
        },
      },
      {
        field: 'actions',
        type: 'actions',
        flex: 0.2,
        getActions: (params: GridRowParams) => {
          const myNotifications = getMyUnReadNotifications(params.row);

          const actions = [];

          if (myNotifications.length > 0) {
            actions.push(
              <Tooltip title="Benachrichtigungen">
                <GridActionsCellItem
                  label="Benachrichtigungen"
                  icon={
                    <Badge badgeContent={myNotifications.length} color="primary">
                      <Mail color="action" />
                    </Badge>
                  }
                  onClick={() => console.log(myNotifications)}
                />
              </Tooltip>,
            );
          } else {
            actions.push(<div className="w-8" />);
          }

          actions.push(
            <Tooltip title="Details">
              <GridActionsCellItem
                label="Details"
                icon={<ChevronRightIcon />}
                onClick={handleViewReport(params.row.id)}
              />
            </Tooltip>,
          );

          return actions;
        },
      },
    ],
    [],
  );

  return (
    <Container sx={{ height: '100%', p: 2 }}>
      <DataGrid
        columns={columns}
        rows={orders}
        className="bg-white"
        pageSize={10}
        initialState={initialState}
        onRowClick={(row) => navigate(`${row.id}`)}
        sx={{
          cursor: 'pointer',
        }}
      />
      ;
    </Container>
  );
};

export default Orders;
