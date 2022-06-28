import { Container } from '@mui/material';
import CustomerSelection from '@src/components/CustomerSelection';
import { useUser } from '@src/hooks/useUser';
import { Navigate } from 'react-router-dom';

type Props = {};
const data = [
  {
    id: 'Porsche',
    name: 'Porsche',
    amountCarrier: 423,
    amountMaintenance: 5,
    lastUpdate: new Date(2022, 5, 23),
  },
  {
    id: 'Mercedes',
    name: 'Mercedes',
    amountCarrier: 953,
    amountMaintenance: 12,
    lastUpdate: new Date(2022, 5, 23),
  },
  {
    id: 'VW',
    name: 'VW',
    amountCarrier: 1391,
    amountMaintenance: 32,
    lastUpdate: new Date(2022, 5, 23),
  },
  {
    id: 'Audi',
    name: 'Audi',
    amountCarrier: 702,
    amountMaintenance: 9,
    lastUpdate: new Date(2022, 5, 25),
  },
];

const Customers = (_props: Props) => {
  const { user } = useUser();

  return user?.role === 'service' ? (
    <Container sx={{ height: '100%', pt: 2 }}>
      <CustomerSelection customers={data} />
    </Container>
  ) : (
    <Navigate to={`/customers/porsche/orders`} />
  );
};

export default Customers;
