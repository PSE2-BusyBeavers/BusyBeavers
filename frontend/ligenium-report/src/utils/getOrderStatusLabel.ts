//! ATTENTION TO THE CORRECT ORDER
const mapping = {
  error_detected: "Möglichen Fehler prüfen",
  error_confirmed: "Fehler bestätigt",
  in_maintenance: "In Bearbeitung",
  closed: "Zur Freigabe bereit",
  active: "Wieder in Betrieb",
};

const orderStatuses = Object.keys(mapping);

type Status = keyof typeof mapping;

export default (status: string) => (Object.keys(mapping).includes(status) ? mapping[status as Status] : status);

export { orderStatuses };
