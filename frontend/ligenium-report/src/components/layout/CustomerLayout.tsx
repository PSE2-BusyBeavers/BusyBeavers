import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import MenuDrawer from '@src/components/MenuDrawer';
import { useEffect, useRef, useState } from 'react';

const CustomerLayout = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [childHeight, setChildHeight] = useState(0);

  const handleResize = (callback: () => void) => new ResizeObserver(callback);
  const resizeContent = (sizeY: number) => () => setChildHeight(sizeY);
  useEffect(() => {
    if (ref.current !== null) {
      handleResize(resizeContent(ref.current.clientHeight)).observe(ref.current);
    }
  }, [ref]);

  return (
    <Grid container display="flex" ref={ref} maxHeight="100%">
      <Grid item xs={2}>
        <MenuDrawer />
      </Grid>
      <Grid item xs={10} sx={{ height: childHeight, display: 'flex', overflowY: 'auto' }}>
        {ref.current !== null && <Outlet />}
      </Grid>
    </Grid>
  );
};

export default CustomerLayout;
