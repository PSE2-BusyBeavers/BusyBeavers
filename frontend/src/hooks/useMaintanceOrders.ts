import {
  useSubscribeOrdersSubscription,
  SubscribeOrdersSubscription as OrdersSub,
  Order,
} from "./../api/client";

const handleSubscription = (
  oldResponse: OrdersSub | undefined,
  response: OrdersSub
) => {
  const newIds = response.order.map((order) => order.id);
  const appointments = [
    ...(oldResponse?.order || []).filter((order) => !newIds.includes(order.id)),
    ...response.order,
  ];
  return { ...response, appointments };
};

const useMaintanceOrders = (): [boolean, Order[]] => {
  const [res] = useSubscribeOrdersSubscription({}, handleSubscription);
  if (!res.data) return [true, []];

  const data = res.data.order;
  return [false, data as Order[]];
};

export default useMaintanceOrders;
