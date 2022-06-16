import React from 'react';
import { CardHeader, CardContent, Typography, Chip, CardActions, Grid } from '@mui/material';
import GridCard from './GridCard';
import { styled } from '@mui/system';
import Customer from '@src/types/Customer';

const Info = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  textAlign: 'left',
}));

interface Props {
  customer: Customer;
  onClick: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const CardInfo = ({ label, value }: { label: string; value: any }) => (
  <>
    <Grid item xs={8}>
      <Typography color="textSecondary" variant="subtitle2">
        {label}
      </Typography>
    </Grid>
    <Grid item xs={4}>
      <Typography color="textSecondary" variant="subtitle2">
        {value}
      </Typography>
    </Grid>
  </>
);

const CustomerCard = ({ customer, onClick }: Props) => (
  <GridCard onClick={onClick}>
    <CardHeader title={customer.name} />
    <CardContent>
      <Info>
        <Grid container>
          <CardInfo label="Ladungsträger: " value={customer.amountCarrier} />
          <CardInfo label="In Reperatur: " value={customer.amountMaintenance} />
          <CardInfo label="Letzte Analyse: " value={customer.lastUpdate.toLocaleDateString()} />
        </Grid>
      </Info>
    </CardContent>
  </GridCard>
);

export default CustomerCard;
