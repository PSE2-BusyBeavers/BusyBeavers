import TopBar from '../components/TopBar'
import { Grid, Typography } from '@mui/material'
import MenuDrawer, { Pages } from '@src/components/MenuDrawer'
import CarrierContent from '@src/components/CarrierContent'
import { useState } from 'react'
import { NavigationContext, Tab } from '@src/components/NavigationContext'
import CustomerOverview from '@src/components/CustomerOverview'
import MaintenanceOrders from '@src/components/MaintananceOrders'

function App () {
  const [selectedTab, setSelectedTab] = useState<Pages>('Kundenübersicht')
  return (
    <>
      <TopBar />
      <Grid container height='100%'>
        <Grid item xs={2}>
          <MenuDrawer selectedTab={selectedTab} onChangeTab={setSelectedTab} />
        </Grid>
        <Grid item xs={10}>
          <NavigationContext value={selectedTab}>
            <Tab value='Kundenübersicht'>
              <CustomerOverview />
            </Tab>
            <Tab value='Ladungsträger'>
              <CarrierContent />
            </Tab>
            <Tab value='Reparaturaufträge'>
              <MaintenanceOrders />
            </Tab>
          </NavigationContext>
        </Grid>
      </Grid>
    </>
  )
}

export default App
