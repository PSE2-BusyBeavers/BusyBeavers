const mapping = {
  "error_detected": "Fehler entdeckt",
  "in_process": "In Bearbeitung",
  "closed": "Erledigt",
  "active": "Aktiv"
}

type Status = keyof typeof mapping;

export default (status: string) => Object.keys(mapping).includes(status) ? mapping[status as Status] : status;