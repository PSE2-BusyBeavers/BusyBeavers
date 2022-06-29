import { Box, Button, CircularProgress, Container, Tooltip } from '@mui/material';
import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridInitialState,
  GridRowParams,
  GridSelectionModel,
} from '@mui/x-data-grid';
import { useMemo, useState } from 'react';
import { useCreateOrderMutation, useUpdateIncidentMutation } from '@src/api/client';
import useIncidents from '@src/hooks/useIncidents';
import { useNavigate } from 'react-router-dom';
import CarrierDataPopup from '@src/components/CarrierDataPopup';
import { Insights } from '@mui/icons-material';
import formatTableDate from '@src/utils/formatTableDate';

const CarrierContent = () => {
  const [isLoading, incidents] = useIncidents();
  const navigate = useNavigate();

  const activeIncidents = incidents.filter((incident) => incident.status === 'error_detected');

  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  const [_, createOrder] = useCreateOrderMutation();
  const [, updateIncident] = useUpdateIncidentMutation();

  const initialState = useMemo<GridInitialState>(
    () => ({
      sorting: {
        sortModel: [
          {
            field: 'created_at',
            sort: 'desc',
          },
        ],
      },
    }),
    [],
  );

  const createIncident = async () => {
    const incidentIds = selectionModel as number[];
    const result = await createOrder({
      incidents: incidentIds.map((i) => ({ incident_id: i })),
    });

    for await (const incident of incidentIds) {
      await updateIncident({
        id: incident,
        status: 'in_process',
      });
    }

    navigate(`./../orders/${result.data?.insert_order_one?.id}`);
  };

  const [showCarrierDataOfId, setShowCarrierDataOfId] = useState<number | null>(null);

  const columns: GridColumns = useMemo(
    () => [
      {
        field: 'id',
        headerName: 'Störfallnummer',
        flex: 0.2,
      },
      {
        field: 'carrier_id',
        headerName: 'Ladungsträgernummer',
        flex: 0.2,
      },
      {
        field: 'created_at',
        headerName: 'Erstellt am',
        flex: 0.2,
        valueGetter: formatTableDate,
      },
      {
        field: 'assumption',
        headerName: 'Fehlervermutung',
        flex: 0.4,
      },
      {
        field: 'actions',
        type: 'actions',
        flex: 0.1,
        getActions: (params: GridRowParams) => [
          <Tooltip title="Details">
            <GridActionsCellItem
              label="Details"
              icon={<Insights />}
              onClick={() => setShowCarrierDataOfId(params.row.carrier_id as number)}
            />
          </Tooltip>,
        ],
      },
    ],
    [],
  );

  return (
    <Container sx={{ pt: 2 }}>
      {showCarrierDataOfId && (
        <CarrierDataPopup
          carrierId={showCarrierDataOfId}
          setCarrierId={(carrierId) => setShowCarrierDataOfId(carrierId)}
        />
      )}
      <Box sx={{ width: '100%', height: '80%' }}>
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
              disabled={selectionModel.length < 1}
              sx={{ ml: 'auto', mb: 2 }}
              onClick={createIncident}
            >
              Auftrag erstellen
            </Button>
            <DataGrid
              columns={columns}
              rows={activeIncidents}
              checkboxSelection
              className="w-full bg-white"
              initialState={initialState}
              onSelectionModelChange={(newSelectionModel) => {
                setSelectionModel(newSelectionModel);
              }}
              pageSize={10}
              selectionModel={selectionModel}
            />
          </Container>
        )}
      </Box>
    </Container>
  );
};

export default CarrierContent;
