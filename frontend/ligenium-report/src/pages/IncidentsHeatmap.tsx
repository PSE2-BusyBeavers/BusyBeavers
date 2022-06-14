import { Box, Container } from '@mui/material';
import ControlBar from '@src/components/Incidents/ControlBar';
import Map from '@src/components/Incidents/Map';
import { useNavigate } from 'react-router-dom';

const IncidentsHeatmap = () => {
  const navigate = useNavigate();

  const tabs = ['Übersicht', 'Heatmap'];

  return (
    <Container sx={{ height: '100%', pt: 2 }}>
      <Box sx={{ width: '100%', height: '80%' }}>
        <ControlBar value={1} onChange={() => navigate('..')} tabs={tabs} />
        <Map />
      </Box>
    </Container>
  );
};

export default IncidentsHeatmap;
