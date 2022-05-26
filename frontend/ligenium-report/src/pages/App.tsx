import TopBar from './../components/TopBar'
import CarrierTable from './../components/CarrierTable'
import { useMemo } from 'react'
import { Box } from '@mui/material'
import useMaintanceOrders from '@src/hooks/useMaintanceOrders'



function App() {
  const [isLoading, carrier] = useMaintanceOrders();
  
  if(isLoading)
    return (
      <>
        <TopBar />
        <p>No carrier</p>;
      </>
    )

  return (
    <>
      <TopBar />
      <CarrierTable carrier={carrier} />
    </>
  )
}

export default App
