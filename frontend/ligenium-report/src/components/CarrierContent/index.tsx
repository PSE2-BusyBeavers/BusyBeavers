import { Box, CircularProgress, Container, Typography } from '@mui/material'
import { useState } from 'react'
import ControlBar from './ControlBar'
import CarrierTable from './CarrierTable'
import TabPanel from './TabPanel'
import useMaintenanceOrders from '@src/hooks/useMaintenanceOrders'
import Map from './Map'

const CarrierContent = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [isLoading, carrier] = useMaintenanceOrders()

  const tabs = ['Übersicht', 'Heatmap']

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
