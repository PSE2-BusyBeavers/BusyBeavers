import { Box, CircularProgress, Container, Typography } from '@mui/material'
import { useState } from 'react'
import ControlBar from './ControlBar'
import CarrierTable from './CarrierTable'
import TabPanel from './TabPanel'
import useMaintenanceOrders from '@src/hooks/useMaintenanceOrders'
import Map from './Map'
import Carrier from '@src/types/Carrier'

const CarrierContent = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [isLoading, orders] = useMaintenanceOrders()

  const tabs = ['Übersicht', 'Heatmap']

  console.log(orders)
  const carrier = orders.map(
    order =>
      ({
        ...order.carrier,
        id: order.carrier_id.toString() + '-' + order.id.toString(),
        assumption: order.assumption,
        carrier_id: order.carrier_id.toString()
      } as Required<Carrier>)
  )

  return (
    <Container sx={{ height: '100%', pt: 2 }}>
      <Box sx={{ width: '100%', height: '80%' }}>
        <ControlBar value={selectedTab} onChange={setSelectedTab} tabs={tabs} />
        <TabPanel value={selectedTab} index={0}>
          {isLoading ? (
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                justifyContent: 'center'
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <CarrierTable carrier={carrier} />
          )}
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          <Map />
        </TabPanel>
      </Box>
    </Container>
  )
}

export default CarrierContent
