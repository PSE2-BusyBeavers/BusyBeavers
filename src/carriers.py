from typing import List

class GPSEntry:
    time: str
    lat: str
    long: str

class TemperatureEntry:
    time: str
    value: float

class HumidityEntry:
    time: str
    value: float

class AccelerationEntry:
    time: str
    x: float
    y: float
    z: float

class CarrierDataset:
    carrierId: str
    gps: List[GPSEntry]
    temperature: List[TemperatureEntry]
    humidity: List[HumidityEntry]
    acceleration: List[AccelerationEntry]

def get_gps(carrier_id: str, start_time: str, end_time: str) -> List[GPSEntry]:
    return [{
        "lat": 48.13,
        "long": 11.57,
        "time": "2019-01-01T00:00:00Z"
    }]

def get_temperature(carrier_id: str, start_time: str, end_time: str) -> List[TemperatureEntry]:
    return [{
      "time": "2019-01-01T00:00:00Z",
      "value": 10.0
    }]

def get_humidity(carrier_id: str, start_time: str, end_time: str) -> List[HumidityEntry]:
    return [{
      "time": "2019-01-01T00:00:00Z",
      "value": "0.8"
    }]

def get_acceleration(carrier_id: str, start_time: str, end_time: str) -> List[AccelerationEntry]:
    return [{
      "time": "2019-01-01T00:00:00Z",
      "x": "0.8",
      "y": "0.8",
      "z": "0.8"
    }]

def get_all_carrier_ids() -> List[str]:
    return ["carrier1", "carrier2"]

def set_carrier_state(carrier_id: str, state: str) -> None:
    print("set_carrier_state")
    print(carrier_id)
    print(state)
