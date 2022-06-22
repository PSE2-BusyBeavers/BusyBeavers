import { ArrowBack, Send } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@mui/material';
import {
  useSubscribeOrderSubscription,
  useCreateProtocolMutation,
  useUpdateOrderMutation,
  useUpdateIncidentMutation,
  useUpdateCarrierMutation,
} from '@src/api/client';
import getOrderStatusLabel, { orderStatuses } from '@src/utils/getOrderStatusLabel';
import { useParams, Link } from 'react-router-dom';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import { useMemo, useState } from 'react';
import { useUser } from '@src/hooks/useUser';
import dayjs from 'dayjs';

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

const Order1 = () => {
  const params = useParams();
  const { user } = useUser();
  const [orderRes] = useSubscribeOrderSubscription({
    variables: {
      id: parseInt(params.order || '', 10),
    },
  });
  const [, updateOrder] = useUpdateOrderMutation();
  const [, updateIncident] = useUpdateIncidentMutation();
  const [, updateCarrier] = useUpdateCarrierMutation();
  const order = orderRes.data?.order_by_pk;

  const handleApproval = () => {
    if (!order) return;

    order?.incidents
      .flatMap((i) => i.incident)
      .forEach((incident) => {
        updateCarrier({
          id: incident.carrier.id,
          status: 'locked',
        });
        updateIncident({
          id: incident.id,
          status: 'in_process',
        });
      });
    updateOrder({ id: parseInt(order!.id.toString()), status: 'error_confirmed' });
  };

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
    ],
    [],
  );

  const [newProtocolValue, setNewProtocolValue] = useState('');

  const [_, createProtocol] = useCreateProtocolMutation();

  return (
    <Container sx={{ pt: 2, maxHeight: '100%' }}>
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
          <Grid xs={12} className="flex items-end">
            <div className="flex flex-col flex-shrink-0 w-1/2">
              <DataRow label="Auftragsnummer:" value={order.id.toString()} />
              <DataRow label="Erstellungsdatum:" value={dayjs(order.created_at).format('DD.MM.YYYY HH:mm')} />
              <DataRow label="Letzte Änderung:" value={dayjs(order.updated_at).format('DD.MM.YYYY HH:mm')} />
            </div>
            <div className="ml-auto flex gap-2">
              {order.status === 'error_detected' && order.status === 'error_detected' && (
                <>
                  <Button variant="contained" onClick={handleApproval}>
                    Fehler bestätigen
                  </Button>
                  <Button variant="contained" onClick={handleApproval}>
                    Fehler verwerfen
                  </Button>
                </>
              )}
              {order.status === 'error_confirmed' && order.status === 'error_confirmed' && (
                <Button
                  variant="contained"
                  onClick={() => updateOrder({ id: parseInt(order!.id.toString()), status: 'in_maintenance' })}
                >
                  Reparatur beginnen
                </Button>
              )}
              {order.status === 'in_maintenance' && order.status === 'in_maintenance' && (
                <Button
                  variant="contained"
                  onClick={() => updateOrder({ id: parseInt(order!.id.toString()), status: 'closed' })}
                >
                  Ladungsträger freigeben
                </Button>
              )}
              {order.status === 'closed' && order.status === 'closed' && (
                <Button
                  variant="contained"
                  onClick={() => updateOrder({ id: parseInt(order!.id.toString()), status: 'active' })}
                >
                  Auftrag abschließen
                </Button>
              )}
            </div>
          </Grid>
          <Box sx={{ width: '100%', height: '300px' }} pt={2}>
            <DataGrid columns={incidentColumns} pageSize={10} rows={order.incidents.flatMap((i) => i.incident)} />
          </Box>
          <Divider />
          <Box sx={{ width: '100%', mt: 2 }}>
            <Typography variant="h5">Protokoll</Typography>
            <Grid sx={{ overflowY: 'auto' }}>
              {order.protocols.map((p) => (
                <div key={p.id}>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt={p.user} src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary={p.user} secondary={<span className="whitespace-pre-wrap">{p.body}</span>} />
                  </ListItem>
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
                  createProtocol({
                    order: order.id,
                    body: newProtocolValue,
                    user: user?.name!,
                  });
                  setNewProtocolValue('');
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

export default Order1;
