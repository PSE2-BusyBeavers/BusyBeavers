import TopBar from '../components/TopBar'
import { Grid } from '@mui/material'
import MenuDrawer from '@src/components/MenuDrawer'
import CarrierContent from '@src/components/CarrierContent'

function App () {
  return (
    <>
      <TopBar />
      <Grid container height='100%'>
        <Grid item xs={2}>
          <MenuDrawer />
        </Grid>
        <Grid item xs={10}>
          <CarrierContent />
        </Grid>
      </Grid>
    </>
  )
}

export default App