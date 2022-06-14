import { useSubscribeOrdersSubscription, Order } from '@src/api/client';

function useOrders(): [boolean, Order[]] {
  const [res] = useSubscribeOrdersSubscription({}, (oldResponse, response) => {
    const newIds = response.order.map((order) => order.id);
    const orders = [
      ...(oldResponse?.order || []).filter((incident) => !newIds.includes(incident.id)),
      ...response.order,
    ];
    return { ...response, order: orders };
  });

  if (!res.data) return [true, []];

  const data = res.data.order;
  return [false, data as Order[]];
}

export default useOrders;
