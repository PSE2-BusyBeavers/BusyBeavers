import { Box, Button, CircularProgress, Container } from '@mui/material';
import { DataGrid, GridColumns, GridInitialState, GridSelectionModel } from '@mui/x-data-grid';
import { useMemo, useState } from 'react';
import ControlBar from '@src/components/Incidents/ControlBar';
import { useUpdateCarrierMutation, useCreateOrderMutation } from '@src/api/client';
import useIncidents from '@src/hooks/useIncidents';
import { useNavigate } from 'react-router-dom';
import { Add } from '@mui/icons-material';

const CarrierContent = () => {
  const [isLoading, incidents] = useIncidents();
  const navigate = useNavigate();

  const tabs = ['Übersicht', 'Heatmap'];

  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  const [_, createOrder] = useCreateOrderMutation();

  const createIncident = async () => {
    const incidentIds = selectionModel as number[];
    const result = await createOrder({
      incidents: incidentIds.map((i) => ({ incident_id: i })),
    });
    // TODO: update incident status to be sth like 'active order' and hide them from the list / move them downwards
    navigate(`./../orders/${result.data?.insert_order_one?.id}`);
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
          <Container sx={{ height: '100%', pt: 2, display: 'flex', flexDirection: 'column' }}>
            <Button
              variant="contained"
              startIcon={<Add />}
              disabled={selectionModel.length < 1}
              sx={{ ml: 'auto', mb: 2 }}
              onClick={createIncident}
            >
              Auftrag erstellen
            </Button>
            <DataGrid
              columns={columns}
              rows={incidents}
              checkboxSelection
              className="w-full"
              onSelectionModelChange={(newSelectionModel) => {
                setSelectionModel(newSelectionModel);
              }}
              selectionModel={selectionModel}
            />
          </Container>
        )}
      </Box>
    </Container>
  );
};

export default CarrierContent;
