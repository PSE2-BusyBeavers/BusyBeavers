import { Box, CircularProgress, Container } from '@mui/material';
import { DataGrid, GridColumns, GridInitialState } from '@mui/x-data-grid';
import { useMemo } from 'react';
import ControlBar from '@src/components/Incidents/ControlBar';
import { useUpdateCarrierMutation } from '@src/api/client';
import useIncidents from '@src/hooks/useIncidents';
import { useNavigate } from 'react-router-dom';

const CarrierContent = () => {
  const [isLoading, incidents] = useIncidents();
  const [result, updateCarrier] = useUpdateCarrierMutation();
  const navigate = useNavigate();

  const tabs = ['Übersicht', 'Heatmap'];

  const handleReportCarrier = (id: string) => {
    // const index = carrier.findIndex((c) => c.carrier_id.toString() === id);
    // console.log(index);
    // if (index === -1) return;
    // console.log({
    //   carrier_id: parseInt(carrier[index].carrier_id),
    //   status: 'locked',
    // });
    // updateCarrier({
    //   id: parseInt(carrier[index].carrier_id),
    //   status: 'locked',
    // });
  };

  const columns: GridColumns = useMemo(
    () => [
      {
        field: 'carrier_id',
        headerName: 'Ladungsträger-Id',
        flex: 0.3,
      },
      {
        field: 'assumption',
        headerName: 'Fehler',
        flex: 0.5,
      },
    ],
    [],
  );

  const initialState = useMemo<GridInitialState>(
    () => ({
      sorting: {
        sortModel: [
          {
            field: 'id',
            sort: 'asc',
          },
        ],
      },
    }),
    [],
  );

  return (
    <Container sx={{ height: '100%', pt: 2 }}>
      <Box sx={{ width: '100%', height: '80%' }}>
        <ControlBar value={0} onChange={() => navigate('heatmap')} tabs={tabs} />
        {isLoading ? (
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Container sx={{ height: '100%', pt: 2 }}>
            <DataGrid columns={columns} rows={incidents} initialState={initialState} checkboxSelection />
          </Container>
        )}
      </Box>
    </Container>
  );
};

export default CarrierContent;
