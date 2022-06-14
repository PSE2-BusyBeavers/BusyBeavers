import { Approval, ArrowBack, Send } from '@mui/icons-material';
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
import { useSubscribeOrderSubscription, useCreateProtocolMutation } from '@src/api/client';
import getOrderStatusLabel, { orderStatuses } from '@src/utils/getOrderStatusLabel';
import { useParams, Link } from 'react-router-dom';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import { useMemo, useState } from 'react';

type DataRowProps = {
  label: string;
  value: string;
};

const DataRow = ({ label, value }: DataRowProps) => (
  <>
    <Grid item xs={3}>
      <Typography variant="h6">{label}</Typography>
    </Grid>
    <Grid item xs={9}>
      <Typography variant="h6">{value}</Typography>
    </Grid>
  </>
);

const Order1 = () => {
  const params = useParams();
  const [orderRes] = useSubscribeOrderSubscription({
    variables: {
      id: parseInt(params.order || '', 10),
    },
  });
  const order = orderRes.data?.order_by_pk;

  // const [, updateCarrier] = useUpdateCarrierMutation();

  const handleApproval = () => {
    // TODO
    // updateCarrier({
    //   id: parseInt(order.carrierId),
    //   status: 'locked',
    // });
    // updateOrder({ id: parseInt(order.id), status: 'error_confirmed' })
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
    <Container sx={{ pt: 2 }}>
      {order && (
        <Grid container>
          <Grid item xs={12} pb={2}>
            <Link to="..">
              <Button startIcon={<ArrowBack />}>Zurück</Button>
            </Link>
          </Grid>
          <DataRow label="Auftragsnummer:" value={order.id.toString()} />
          <DataRow label="Erstellungsdatum:" value={order.created_at.toLocaleString()} />
          <DataRow label="Letzte Änderung:" value={order.updated_at.toLocaleString()} />
          <Grid item xs={12} pt={4}>
            <Stepper activeStep={orderStatuses.indexOf(order.status)} alternativeLabel>
              {orderStatuses.map((status) => (
                <Step key={status}>
                  <StepLabel>{getOrderStatusLabel(status)}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item xs={12} pt={4}>
            {order.status === 'error_detected' && (
              <Button variant="contained" startIcon={<Approval />} onClick={handleApproval}>
                Approve Report
              </Button>
            )}
          </Grid>
          <Box sx={{ width: '100%', height: '300px' }}>
            <DataGrid columns={incidentColumns} rows={order.incidents.flatMap((i) => i.incident)} />
          </Box>
          <Box sx={{ width: '100%', mt: 2 }}>
            <h2>Protokoll</h2>
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
                sx={{ mt: 2 }}
                variant="contained"
                startIcon={<Send />}
                onClick={() => {
                  createProtocol({
                    order: order.id,
                    body: newProtocolValue,
                    user: 'Knauber', // TODO
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
