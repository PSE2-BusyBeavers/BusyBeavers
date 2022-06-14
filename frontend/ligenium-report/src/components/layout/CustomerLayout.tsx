import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import MenuDrawer from '@src/components/MenuDrawer';

const CustomerLayout = () => {
  return (
    <Grid container height="100%">
      <Grid item xs={2}>
        <MenuDrawer />
      </Grid>
      <Grid item xs={10}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default CustomerLayout;
