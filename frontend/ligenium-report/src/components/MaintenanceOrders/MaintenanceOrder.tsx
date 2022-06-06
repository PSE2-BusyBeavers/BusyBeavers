import { Approval, ArrowBack, NavigateBefore } from '@mui/icons-material'
import {
  Button,
  Container,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography
} from '@mui/material'
import {
  useUpdateCarrierMutation,
  useUpdateOrderMutation
} from '@src/api/client'
import Order from '@src/types/Order'
import getOrderStatusLabel, {
  orderStatuses
} from '@src/utils/getOrderStatusLabel'

type Props = {
  order: Order
  onNavigateBack: () => void
}

type DataRowProps = {
  label: string
  value: string
}

const DataRow = ({ label, value }: DataRowProps) => (
  <>
    <Grid item xs={3}>
      <Typography variant='h6'>{label}</Typography>
    </Grid>
    <Grid item xs={9}>
      <Typography variant='h6'>{value}</Typography>
    </Grid>
  </>
)

const MaintenanceOrder = ({ order, onNavigateBack }: Props) => {
  const [, updateOrder] = useUpdateOrderMutation()
  const [, updateCarrier] = useUpdateCarrierMutation()

  const handleApproval = () => {
    updateCarrier({
      id: parseInt(order.carrierId),
      status: 'locked'
    })
    updateOrder({ id: parseInt(order.id), status: 'error_confirmed' })
  }

  return (
    <Container sx={{ pt: 4 }}>
      <Grid container>
        <DataRow label='Auftragsnummer:' value={order.id} />
        <DataRow
          label='Erstellungsdatum:'
          value={order.createdAt.toLocaleString()}
        />
        <DataRow
          label='Letzte Änderung:'
          value={order.lastUpdate.toLocaleString()}
        />
        <Grid item xs={12} pt={8}>
          <Stepper
            activeStep={orderStatuses.indexOf(order.status)}
            alternativeLabel
          >
            {orderStatuses.map(status => (
              <Step key={status}>
                <StepLabel>{getOrderStatusLabel(status)}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item xs={12} p={4}>
          {order.status === 'error_detected' && (
            <Button
              variant='contained'
              startIcon={<Approval />}
              onClick={handleApproval}
            >
              Approve Report
            </Button>
          )}
        </Grid>
        <Grid item xs={12} pt={20}>
          <Button onClick={onNavigateBack} startIcon={<ArrowBack />}>
            Zurück
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default MaintenanceOrder

/*
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button
              startIcon={<FaceIcon />}
              onClick={updateOrderStatus(params.row.id, 'error_confirmed')}
              disabled={params.row.status !== 'error_detected'}
            >Confirm Issue</Button>
            <Button
              startIcon={<PlumbingIcon />}
              onClick={updateOrderStatus(params.row.id, 'in_maintenance')}
              disabled={params.row.status !== 'error_confirmed'}
            >Start maintenance</Button>
            <Button
              startIcon={<CheckIcon />}
              onClick={updateOrderStatus(params.row.id, 'close')}
              disabled={params.row.status !== 'in_maintenance'}
            >Close</Button>
          </ButtonGroup>*/
