import { ArrowBack, ChevronRight, Search, Send } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  useSubscribeOrderSubscription,
  useCreateProtocolMutation,
  useUpdateOrderMutation,
  useCreateNotificationMutation,
  useReadNotificationsMutation,
} from '@src/api/client';
import getOrderStatusLabel, { orderStatuses } from '@src/utils/getOrderStatusLabel';
import { useParams, Link } from 'react-router-dom';
import { DataGrid, GridActionsCellItem, GridColumns, GridRowParams } from '@mui/x-data-grid';
import { useEffect, useMemo, useState } from 'react';
import { useUser, users } from '@src/hooks/useUser';
import dayjs from 'dayjs';
import CarrierDataPopup from '@src/components/CarrierDataPopup';

type DataRowProps = {
  label: string;
  value: string;
};

const DataRow = ({ label, value }: DataRowProps) => (
  <div className="flex flex-row">
    <Typography className="basis-1/2">{label}</Typography>
    <Typography className="basis-1/2">{value}</Typography>
  </div>
);

const Order = () => {
  const params = useParams();
  const { user } = useUser();
  const [orderRes] = useSubscribeOrderSubscription({
    variables: {
      id: parseInt(params.order || '', 10),
    },
  });
  const [, _updateOrder] = useUpdateOrderMutation();
  const [, _createNotification] = useCreateNotificationMutation();
  const [newProtocolValue, setNewProtocolValue] = useState('');

  const [_, _createProtocol] = useCreateProtocolMutation();
  const [showCarrierDataOfId, setShowCarrierDataOfId] = useState<number | null>(null);
  const order = orderRes.data?.order_by_pk;
  const [, readNotification] = useReadNotificationsMutation();

  async function createNotification() {
    if (!order) {
      throw new Error('Order not found');
    }

    const usersWithoutMe = users.filter(
      (u) => parseInt(u.id as unknown as string, 10) !== parseInt(user?.id as unknown as string, 10),
    );
    for await (const _user of usersWithoutMe) {
      await _createNotification({
        order: order.id,
        user: _user.id,
      });
      console.log(_user.name);
    }
  }

  async function updateOrderStatus(status: string) {
    if (!order) {
      throw new Error('Order not found');
    }

    createNotification();
    await _updateOrder({ id: order.id, status });

    await _createProtocol({
      order: order.id,
      body: `Neuer Auftragsstatus: ${getOrderStatusLabel(status)}`,
      user: 'system',
    });
  }

  const incidentColumns: GridColumns = useMemo(
    () => [
      {
        field: 'carrier',
        headerName: 'Ladungsträger-Id',
        flex: 0.3,
        valueGetter: (params) => params.row?.carrier?.id,
      },
      {
        field: 'assumption',
        headerName: 'Fehlervermutung',
        flex: 0.5,
      },
      {
        field: 'actions',
        type: 'actions',
        flex: 0.1,
        getActions: (params: GridRowParams) => [
          <Tooltip title="Details">
            <GridActionsCellItem
              label="Details"
              icon={<ChevronRight />}
              onClick={() => setShowCarrierDataOfId(params.row.carrier.id as number)}
            />
          </Tooltip>,
        ],
      },
    ],
    [],
  );

  async function createProtocol() {
    if (!order) {
      throw new Error('Order not found');
    }

    await _createProtocol({
      order: order.id,
      body: newProtocolValue,
      user: user?.name!,
    });

    await createNotification();

    setNewProtocolValue('');
  }

  useEffect(() => {
    if (!order || !user) {
      return;
    }

    readNotification({
      order: order?.id,
      user: user?.id,
    });
  }, [order]);

  const _orderStatuses =
    order?.status === 'aborted'
      ? orderStatuses.filter((i) => ['error_detected', 'aborted'].includes(i))
      : orderStatuses.filter((i) => i !== 'aborted');

  return (
    <Container sx={{ pt: 2, maxHeight: '100%' }}>
      {showCarrierDataOfId && (
        <CarrierDataPopup
          carrierId={showCarrierDataOfId}
          setCarrierId={(carrierId) => setShowCarrierDataOfId(carrierId)}
        />
      )}
      {order && (
        <Grid container>
          <Grid item xs={12} my={2}>
            <Stepper activeStep={_orderStatuses.indexOf(order.status)} alternativeLabel>
              {_orderStatuses.map((status) => (
                <Step key={status}>
                  <StepLabel>{getOrderStatusLabel(status)}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item xs={12} mb={2}>
            <Link to="..">
              <Button startIcon={<ArrowBack />}>Zurück</Button>
            </Link>
          </Grid>
          <Grid item xs={12} className="flex items-end">
            <div className="flex flex-col flex-shrink-0 flex-grow max-w-72">
              <DataRow label="Auftragsnummer:" value={order.id.toString()} />
              <DataRow label="Erstellungsdatum:" value={dayjs(order.created_at).format('DD.MM.YYYY HH:mm')} />
              <DataRow label="Letzte Änderung:" value={dayjs(order.updated_at).format('DD.MM.YYYY HH:mm')} />
            </div>
            <div className="ml-auto flex gap-2">
              {order.status === 'error_detected' && user?.role === 'service' && (
                <>
                  <Button variant="contained" onClick={() => updateOrderStatus('error_confirmed')}>
                    Fehler bestätigen
                  </Button>
                  <Button variant="contained" onClick={() => updateOrderStatus('aborted')}>
                    Fehler verwerfen
                  </Button>
                </>
              )}
              {order.status === 'error_confirmed' && user?.role === 'customer' && (
                <Button variant="contained" onClick={() => updateOrderStatus('carrier_ready')}>
                  Ladungsträger bereitstellen
                </Button>
              )}
              {order.status === 'carrier_ready' && user?.role === 'service' && (
                <Button variant="contained" onClick={() => updateOrderStatus('in_maintenance')}>
                  Reparatur beginnen
                </Button>
              )}
              {order.status === 'in_maintenance' && user?.role === 'service' && (
                <Button variant="contained" onClick={() => updateOrderStatus('maintenance_done')}>
                  Reparatur beenden
                </Button>
              )}
              {order.status === 'maintenance_done' && (
                <Button variant="contained" onClick={() => updateOrderStatus('closed')}>
                  Auftrag abschließen
                </Button>
              )}
              {(order.status === 'closed' || order.status === 'aborted') && user?.role === 'service' && (
                <Button variant="contained" onClick={() => updateOrderStatus('error_detected')}>
                  Auftrag wieder öffnen
                </Button>
              )}
            </div>
          </Grid>
          <Box sx={{ width: '100%', height: '300px' }} pt={2}>
            <DataGrid
              columns={incidentColumns}
              pageSize={10}
              rows={order.incidents.flatMap((i) => i.incident)}
              onRowClick={(params) => setShowCarrierDataOfId(params.row.carrier.id as number)}
              sx={{ cursor: 'pointer' }}
            />
          </Box>
          <Divider />
          <Box sx={{ width: '100%', mt: 2 }}>
            <Typography variant="h5">Protokoll</Typography>
            <Grid sx={{ overflowY: 'auto' }}>
              {order.protocols.map((p) => (
                <div key={p.id}>
                  <Divider variant="inset" component="li" />
                  {p.user === 'system' ? (
                    <>
                      <ListItem alignItems="flex-start">
                        <ListItemText primary={'System'} secondary={p.body} />
                      </ListItem>
                    </>
                  ) : (
                    <>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt={p.user} src={p.user.includes('Knauber') ? users[0].avatar : users[1].avatar} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={p.user}
                          secondary={<span className="whitespace-pre-wrap">{p.body}</span>}
                        />
                      </ListItem>
                    </>
                  )}
                </div>
              ))}
            </Grid>
            {(user?.role === 'service' && order.assignee !== 'Knauber') ||
              (order.status !== 'closed' && order.status !== 'aborted' && (
                <Grid>
                  <TextField
                    sx={{ width: '100%', mt: 4 }}
                    label="Neuer Protokoll-Eintrag"
                    multiline
                    rows={5}
                    value={newProtocolValue}
                    onChange={(event) => setNewProtocolValue(event.target.value)}
                  />
                  <Button
                    sx={{ my: 2 }}
                    variant="contained"
                    startIcon={<Send />}
                    onClick={() => {
                      createProtocol();
                    }}
                  >
                    Speichern
                  </Button>
                </Grid>
              ))}
          </Box>
        </Grid>
      )}
    </Container>
  );
};

export default Order;
