import TopBar from './../components/TopBar'
import CarrierTable from './../components/CarrierTable'
import { useMemo } from 'react'
import { Box } from '@mui/material'

import { useSubscribeMaintenanceOrdersSubscription } from './../api/client';

function App() {
  const [res] = useSubscribeMaintenanceOrdersSubscription({}, (oldResponse, response) => {
    const newIds = response.maintenance_orders.map((order) => order.id as string);
    const appointments = [
      ...(oldResponse?.maintenance_orders || []).filter((order) => !newIds.includes(order.id)),
      ...response.maintenance_orders,
    ];
    return { ...response, appointments };
  },);

  if (!res.data) {
    return (
      <>
        <TopBar />
        <p>No carrier</p>;
      </>
    )
  }

  return (
    <>
      <TopBar />
      <CarrierTable carrier={res.data.maintenance_orders} />
    </>
  )
}

export default App
