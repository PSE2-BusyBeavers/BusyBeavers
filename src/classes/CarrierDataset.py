from typing import List


class GPSEntry:
    time: str
    lat: str
    long: str

class WeatherEntry:
    time: str
    temp: float
    humitnity: float

class AccelerationEntry:
    time: str
    x: float
    y: float
    z: float


class CarrierDataset:
    carrierId: str
    gps: List[GPSEntry]
    temperature: float
    humidity: float
    acceleration: List[AccelerationEntry]
