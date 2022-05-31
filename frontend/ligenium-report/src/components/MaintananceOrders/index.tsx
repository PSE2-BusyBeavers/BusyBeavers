import { Container } from '@mui/material'
import MaintenancesTable from './MaintenancesTable'

type Props = {}
const data = [
  {
    id: 'Porsche',
    customer: 'Porsche',
    createdAt: new Date(2022, 5, 23, 12, 5, 11),
    lastUpdate: new Date(2022, 5, 25, 13, 54, 42),
    status: 'Warten auf Rückmeldung'
  }
]

const MaintenanceOrders = (_props: Props) => {
  return (
    <Container sx={{ height: '100%', pt: 2 }}>
      <MaintenancesTable maintenances={data} />
    </Container>
  )
}

export default MaintenanceOrders
