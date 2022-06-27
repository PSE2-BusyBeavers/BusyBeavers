import { ArrowBack, Search, Send } from '@mui/icons-material';
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
import CarrierData from '@src/components/CarrierData';

type DataRowProps = {
  label: string;
  value: string;
};

const DataRow = ({ label, value }: DataRowProps) => (
  <div className="flex flex-row">
    <Typography className="w-1/3">{label}</Typography>
    <Typography>{value}</Typography>
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
  const order = orderRes.data?.order_by_pk;

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

  const [showCarrierDataOfId, setShowCarrierDataOfId] = useState<number | null>(null);

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
              icon={<Search />}
              onClick={() => setShowCarrierDataOfId(params.row.id as number)}
            />
          </Tooltip>,
        ],
      },
    ],
    [],
  );

  const [newProtocolValue, setNewProtocolValue] = useState('');

  const [_, _createProtocol] = useCreateProtocolMutation();

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

  const [, readNotification] = useReadNotificationsMutation();

  useEffect(() => {
    if (!order || !user) {
      return;
    }

    readNotification({
      order: order?.id,
      user: user?.id,
    });
  });

  return (
    <Container sx={{ pt: 2, maxHeight: '100%' }}>
      <Dialog
        open={showCarrierDataOfId !== null}
        onClose={() => setShowCarrierDataOfId(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DialogContent>{showCarrierDataOfId && <CarrierData carrierId={showCarrierDataOfId} />}</DialogContent>
      </Dialog>
      {order && (
        <Grid container>
          <Grid item xs={12} my={2}>
            <Stepper activeStep={orderStatuses.indexOf(order.status)} alternativeLabel>
              {orderStatuses.map((status) => (
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
            <div className="flex flex-col flex-shrink-0 w-1/2">
              <DataRow label="Auftragsnummer:" value={order.id.toString()} />
              <DataRow label="Erstellungsdatum:" value={dayjs(order.created_at).format('DD.MM.YYYY HH:mm')} />
              <DataRow label="Letzte Änderung:" value={dayjs(order.updated_at).format('DD.MM.YYYY HH:mm')} />
            </div>
            <div className="ml-auto flex gap-2">
              {order.status === 'error_detected' && order.status === 'error_detected' && (
                <>
                  <Button variant="contained" onClick={() => updateOrderStatus('error_confirmed')}>
                    Fehler bestätigen
                  </Button>
                  <Button variant="contained" onClick={() => updateOrderStatus('error_confirmed')}>
                    Fehler verwerfen
                  </Button>
                </>
              )}
              {order.status === 'error_confirmed' && order.status === 'error_confirmed' && (
                <Button variant="contained" onClick={() => updateOrderStatus('in_maintenance')}>
                  Reparatur beginnen
                </Button>
              )}
              {order.status === 'in_maintenance' && order.status === 'in_maintenance' && (
                <Button variant="contained" onClick={() => updateOrderStatus('closed')}>
                  Ladungsträger freigeben
                </Button>
              )}
              {order.status === 'closed' && order.status === 'closed' && (
                <Button variant="contained" onClick={() => updateOrderStatus('active')}>
                  Auftrag abschließen
                </Button>
              )}
            </div>
          </Grid>
          <Box sx={{ width: '100%', height: '300px' }} pt={2}>
            <DataGrid
              columns={incidentColumns}
              pageSize={10}
              rows={order.incidents.flatMap((i) => i.incident)}
              onRowClick={(row) => setShowCarrierDataOfId(row.id as number)}
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
          </Box>
        </Grid>
      )}
    </Container>
  );
};

export default Order;
