import TopBar from './../components/TopBar'
import CarrierTable from './../components/CarrierTable'
import { useMemo } from 'react'
import { Box } from '@mui/material'

function App() {

  const carrier = useMemo(() => [
    {
      id: "fd87-3j53-klfd-58df-f93s",
      name: "Lig-1 V2",
      error: {
        message: "Accelerator doesn't update",
        value: '10 m/s^2 behind avarage',
        code: "20",
        origin: "accelerator"
      },
      status: "Unobserved",
      lastUpdate: new Date(2022, 1, 20, 13, 54, 1)
    },
    {
      id: "jfg8-325h-t32b-435f-k0a2",
      name: "Lig-2 V2",
      error: {
        message: "Humidity is too high",
        value: '20g/kg too high',
        code: "42",
        origin: "humidity"
      },
      status: "In Repair",
      lastUpdate: new Date(2022, 2, 18, 13, 44, 32)
    }
  ] as ICarrier[], [])

  return (
    <>
      <TopBar />
      <CarrierTable carrier={carrier} />
    </>
  )
}

export default App
