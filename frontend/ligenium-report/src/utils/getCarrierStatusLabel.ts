const mapping = {
  "active": "In Betrieb",
  "locked": "Gesperrt",
  "in_repair": "In Reperatur",
}

type Status = keyof typeof mapping;

export default (status: string) => Object.keys(mapping).includes(status) ? mapping[status as Status] : status;