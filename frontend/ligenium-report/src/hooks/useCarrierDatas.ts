import { Order, useSubscribeCarrierDataSubscription, Carrier_Data } from '@src/api/client';

function useCarrierDatas(carrierId: number, type: string): [boolean, Carrier_Data[]] {
  const [res] = useSubscribeCarrierDataSubscription(
    {
      variables: {
        carrierId,
        type,
      },
    },
    (oldResponse, response) => {
      const newIds = response.carrier_data.map((i) => i.id);
      const datas = [
        ...(oldResponse?.carrier_data || []).filter((i) => !newIds.includes(i.id)),
        ...response.carrier_data,
      ];
      return { ...response, carrier_data: datas };
    },
  );

  if (!res.data) return [true, []];

  const data = res.data.carrier_data;
  return [false, data as Carrier_Data[]];
}

export default useCarrierDatas;
