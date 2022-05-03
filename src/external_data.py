class ExternalData:
  lat: str
  long: str
  temperature: float
  humidity: float

def get_temperature(lat: str, long: str, date: str) -> float:
  return 30.0

def get_humidity(lat: str, long: str, date: str) -> float:
  return 0.8

def get_external_data(lat: str, long: str, date: str) -> ExternalData:
  return ExternalData(lat, long, get_temperature(lat, long, date), get_humidity(lat, long, date))
