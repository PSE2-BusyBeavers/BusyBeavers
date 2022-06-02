import { Box, CircularProgress, Container, Typography } from '@mui/material'
import { useMemo, useState } from 'react'
import ControlBar from './ControlBar'
import CarrierTable from './CarrierTable'
import TabPanel from './TabPanel'
import useMaintenanceOrders from '@src/hooks/useMaintenanceOrders'
import Map from './Map'
import Carrier from '@src/types/Carrier'
import { useUpdateCarrierMutation } from '@src/api/client'

const CarrierContent = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [isLoading, orders] = useMaintenanceOrders()
  const [result, updateCarrier] = useUpdateCarrierMutation(); 

  const tabs = ['Übersicht', 'Heatmap']

  const carrier = useMemo(
    () =>
      orders.map(
        order =>
          ({
            ...order.carrier,
            id: order.carrier_id.toString() + '-' + order.id.toString(),
            assumption: order.assumption,
            carrier_id: order.carrier_id.toString()
          } as Required<Carrier>)
      ),
    [orders]
  )

  const handleReportCarrier = (id: string) => {
    const index = carrier.findIndex(c => c.carrier_id.toString() === id)
    console.log(index)
    if (index === -1) return
    console.log({
      carrier_id: parseInt(carrier[index].carrier_id),
      status: "locked",
    })
    updateCarrier({
      id: parseInt(carrier[index].carrier_id),
      status: "locked",
    })
  }

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
            <CarrierTable carrier={carrier} onReport={handleReportCarrier} />
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
