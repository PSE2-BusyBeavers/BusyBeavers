
//! ATTENTION TO THE CORRECT ORDER
const mapping = {
  open: "Offen",
  in_process: "In Bearbeitung",
  closed: "Erledigt",
};

const incidentStatuses = Object.keys(mapping);

type Status = keyof typeof mapping;

export default (status: string) =>
  Object.keys(mapping).includes(status) ? mapping[status as Status] : status;

export { incidentStatuses as orderStatuses }
