import React from 'react';
import { Grid, Paper } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

const ButtonCard = styled(Paper)(() => ({
  height: '200px',
  width: '250px',
  cursor: 'pointer',
  border: '2px solid rgba(0,151,251,0.25)',
  '&:hover': {
    background: 'rgba(100, 100, 100, 0.2)',
    border: '2px solid #73c4fa',
    marginTop: '-1px',
    boxShadow: '0 0 0.5em #0097fb',
  },
}));

const GridCard = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) => (
  <Grid item>
    <ButtonCard onClick={onClick}>{children}</ButtonCard>
  </Grid>
);

GridCard.propTypes = {
  onClick: PropTypes.func,
};
GridCard.defaultProps = {
  onClick: null,
};

export default GridCard;
