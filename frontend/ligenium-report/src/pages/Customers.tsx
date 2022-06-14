import { Container } from '@mui/material';
import CustomerTable from '@src/components/CustomerTable';

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

const CustomersPage = (_props: Props) => {
  return (
    <Container sx={{ height: '100%', pt: 2 }}>
      <CustomerTable customers={data} />
    </Container>
  );
};

export default CustomersPage;
