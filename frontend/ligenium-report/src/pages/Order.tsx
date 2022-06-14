import { Approval, ArrowBack } from '@mui/icons-material';
import { Button, Container, Grid, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { useSubscribeOrderSubscription } from '@src/api/client';
import Order from '@src/types/Order';
import getOrderStatusLabel, { orderStatuses } from '@src/utils/getOrderStatusLabel';
import { useParams, Link } from 'react-router-dom';

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

  return (
    <Container sx={{ pt: 4 }}>
      {order && (
        <Grid container>
          <DataRow label="Auftragsnummer:" value={order.id.toString()} />
          <DataRow label="Erstellungsdatum:" value={order.created_at.toLocaleString()} />
          <DataRow label="Letzte Änderung:" value={order.updated_at.toLocaleString()} />
          <Grid item xs={12} pt={8}>
            <Stepper activeStep={orderStatuses.indexOf(order.status)} alternativeLabel>
              {orderStatuses.map((status) => (
                <Step key={status}>
                  <StepLabel>{getOrderStatusLabel(status)}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item xs={12} p={4}>
            {order.status === 'error_detected' && (
              <Button variant="contained" startIcon={<Approval />} onClick={handleApproval}>
                Approve Report
              </Button>
            )}
          </Grid>
          <Grid item xs={12} pt={20}>
            <Link to="..">
              <Button startIcon={<ArrowBack />}>Zurück</Button>
            </Link>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Order1;
