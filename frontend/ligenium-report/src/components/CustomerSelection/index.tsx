import { useNavigate } from 'react-router-dom';
import Customer from '@src/types/Customer';
import { Grid } from '@mui/material';
import CustomerCard from './CustomerCard';

type Props = {
  customers: Customer[];
};

const CustomerSelection = ({ customers }: Props) => {
  const navigate = useNavigate();

  const handleNavigation = (id: string) => () => navigate(`/customers/${id}/incidents`);
  return (
    <Grid container sx={{ marginTop: 0, minHeight: '80%' }} spacing={4} justifyContent="center" alignContent="center">
      {customers.map((customer) => (
        <CustomerCard customer={customer} onClick={handleNavigation(customer.id)} />
      ))}
    </Grid>
  );
};

export default CustomerSelection;
