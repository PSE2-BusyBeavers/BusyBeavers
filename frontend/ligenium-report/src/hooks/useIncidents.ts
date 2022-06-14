import {
  useSubscribeIncidentsSubscription,
  SubscribeIncidentsSubscription as IncidentsSub,
  Incident,
} from '@src/api/client';

const useIncidents = (): [boolean, Incident[]] => {
  const [res] = useSubscribeIncidentsSubscription({}, (oldResponse, response) => {
    const newIds = response.incident.map((incident) => incident.id);
    const incident = [
      ...(oldResponse?.incident || []).filter((incident) => !newIds.includes(incident.id)),
      ...response.incident,
    ];
    return { ...response, incident };
  });

  if (!res.data) return [true, []];

  const data = res.data.incident;
  return [false, data as Incident[]];
};

export default useIncidents;
