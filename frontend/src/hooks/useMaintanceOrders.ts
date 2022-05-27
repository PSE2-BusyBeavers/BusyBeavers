import {
  useSubscribeMaintenanceOrdersSubscription,
  SubscribeMaintenanceOrdersSubscription as MaintenanceOrdersSub,
  Maintenance_Orders

} from './../api/client';

const  handleSubscription = (oldResponse: MaintenanceOrdersSub | undefined, response: MaintenanceOrdersSub) => {
  const newIds = response.maintenance_orders.map((order) => order.id as string);
  const appointments = [
    ...(oldResponse?.maintenance_orders || []).filter((order) => !newIds.includes(order.id)),
    ...response.maintenance_orders,
  ];
  return { ...response, appointments };
};

const useMaintanceOrders = (): [boolean, Maintenance_Orders[]] => {
  const [res] = useSubscribeMaintenanceOrdersSubscription({}, handleSubscription);
  if (!res.data)
    return [true, []]

    
  const data = res.data.maintenance_orders;
  return [false, data];
}


export default useMaintanceOrders;
