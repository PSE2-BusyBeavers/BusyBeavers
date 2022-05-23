interface ICarrier {
  id: string,
  name: string,
  error: {
    code: string,
    value: string,
    origin: string
    message: string,
  },
  status: string
  lastUpdate: Date
}