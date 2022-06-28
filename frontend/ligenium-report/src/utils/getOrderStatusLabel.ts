//! ATTENTION TO THE CORRECT ORDER
const mapping = {
  error_detected: 'Mögliche Fehler entdeckt',
  error_confirmed: 'Fehler bestätigt',
  carrier_ready: 'Ladungsträger bereitgestellt',
  in_maintenance: 'In Reparatur',
  maintenance_done: 'Reparatur abgeschlossen',
  closed: 'Auftrag abgeschlossen',
  aborted: 'Auftrag abgebrochen',
  // closed: 'Zur Freigabe bereit',
  // active: 'Wieder in Betrieb',
};

const orderStatuses = Object.keys(mapping);

type Status = keyof typeof mapping;

export default (status: string) => (Object.keys(mapping).includes(status) ? mapping[status as Status] : status);

export { orderStatuses };
