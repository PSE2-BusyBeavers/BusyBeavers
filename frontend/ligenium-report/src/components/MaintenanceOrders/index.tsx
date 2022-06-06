import { Container } from '@mui/material'
import useMaintenanceOrders from '@src/hooks/useMaintenanceOrders'
import { useState } from 'react'
import MaintenanceOrder from './MaintenanceOrder'
import MaintenancesTable from './MaintenancesTable'

type Props = {}
const tempDate = [
  {
    id: '15',
    customer: 'Porsche',
    createdAt: new Date(2022, 5, 23, 12, 5, 11),
    lastUpdate: new Date(2022, 5, 25, 13, 54, 42),
    status: 'Warten auf Rückmeldung'
  }
]

const MaintenanceOrders = (_props: Props) => {
  const [, orders] = useMaintenanceOrders()
  const [selectedOrderId, setSelectedOrderId] = useState('')

  const handleSelect = (id: string) => {
    setSelectedOrderId(id)
  }

  const data = orders.map(order => ({
    id: order.id.toString(),
    customer: order.carrier.customer,
    createdAt: new Date(order.created_at),
    lastUpdate: new Date(order.updated_at),
    status: order.status,
    carrierId: order.carrier_id.toString()
  }))

  const selectedOrder = data.find(order => order.id === selectedOrderId)

  const resetSelection = () => setSelectedOrderId('')

  return (
    <Container sx={{ height: '100%', pt: 2 }}>
      {selectedOrder === undefined ? (
        <MaintenancesTable maintenances={data} onSelect={handleSelect} />
      ) : (
        <MaintenanceOrder
          order={selectedOrder}
          onNavigateBack={resetSelection}
        />
      )}
    </Container>
  )
}

export default MaintenanceOrders
