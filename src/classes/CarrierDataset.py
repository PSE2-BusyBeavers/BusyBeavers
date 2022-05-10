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
