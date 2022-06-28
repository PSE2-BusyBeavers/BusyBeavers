import { useSubscribeCarriersSubscription, Carrier } from '@src/api/client';

function useCarriers(): [boolean, Carrier[]] {
  const [res] = useSubscribeCarriersSubscription({}, (oldResponse, response) => {
    const newIds = response.carrier.map((carrier) => carrier.id);
    const orders = [
      ...(oldResponse?.carrier || []).filter((incident) => !newIds.includes(incident.id)),
      ...response.carrier,
    ];
    return { ...response, order: orders };
  });

  if (!res.data) return [true, []];

  const data = res.data.carrier;
  return [false, data as Carrier[]];
}

export default useCarriers;
