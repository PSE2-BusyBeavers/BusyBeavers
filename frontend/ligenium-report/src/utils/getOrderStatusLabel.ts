//! ATTENTION TO THE CORRECT ORDER
const mapping = {
  error_detected: 'Auftrag erstellt',
  error_confirmed: 'Fehler bestätigt',
  in_maintenance: 'In Reparatur',
  closed: 'Erledigt',
  active: 'Ladungsträger wieder in Betrieb',
};

const orderStatuses = Object.keys(mapping);

type Status = keyof typeof mapping;

export default (status: string) => (Object.keys(mapping).includes(status) ? mapping[status as Status] : status);

export { orderStatuses };
