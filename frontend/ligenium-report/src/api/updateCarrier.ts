import { useUpdateCarrierMutation } from './client';


const setStatus = (id: string, status: string) => {
  const [result, updateCarrier] = useUpdateCarrierMutation(); 
 
}

export { setStatus };