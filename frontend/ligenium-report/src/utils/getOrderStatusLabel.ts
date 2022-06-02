const mapping = {
  error_detected: "Möglichen Fehler entdeckt",
  error_confirmed: "Fehler bestätigt",
  in_maintenance: "In Bearbeitung",
  closed: "Erledigt",
  active: "Aktiv",
};

type Status = keyof typeof mapping;

export default (status: string) =>
  Object.keys(mapping).includes(status) ? mapping[status as Status] : status;
