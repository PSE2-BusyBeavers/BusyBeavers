import json
from typing import List
from dateutil import parser


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
    parsed_start_time = parser.parse(start_time)
    parsed_end_time = parser.parse(end_time)
    gps_data = []

    with open("JSON_Data/gps_data.json", "r") as j:
        data = json.load(j)
        j.close()

    for x in data:
        if (parsed_start_time <= parser.parse(x["time"]) <= parsed_end_time) and carrier_id == x["id"]:
            gps_data.append(x)

    print(gps_data)
    return gps_data

    # return [{
    #     "lat": 48.13,
    #     "long": 11.57,
    #     "time": "2019-01-01T00:00:00Z"
    # }]


def get_temperature(carrier_id: str, start_time: str, end_time: str) -> List[TemperatureEntry]:
    parsed_start_time = parser.parse(start_time)
    parsed_end_time = parser.parse(end_time)
    temp_data = []

    with open("JSON_Data/temp_data.json", "r") as j:
        data = json.load(j)
        j.close()

    for x in data:
        if (parsed_start_time <= parser.parse(x["time"]) <= parsed_end_time) and carrier_id == x["id"]:
            temp_data.append(x)

    print(temp_data)
    return temp_data

    # return [{
    #     "time": "2019-01-01T00:00:00Z",
    #     "value": 10.0
    # }]


def get_humidity(carrier_id: str, start_time: str, end_time: str) -> List[HumidityEntry]:
    parsed_start_time = parser.parse(start_time)
    parsed_end_time = parser.parse(end_time)
    humidity_data = []

    with open("JSON_Data/humidity_data.json", "r") as j:
        data = json.load(j)
        j.close()

    for x in data:
        if (parsed_start_time <= parser.parse(x["time"]) <= parsed_end_time) and carrier_id == x["id"]:
            humidity_data.append(x)

    print(humidity_data)
    return humidity_data

    # return [{
    #     "time": "2019-01-01T00:00:00Z",
    #     "value": "0.8"
    # }]


def get_acceleration(carrier_id: str, start_time: str, end_time: str) -> List[AccelerationEntry]:
    parsed_start_time = parser.parse(start_time)
    parsed_end_time = parser.parse(end_time)
    acceleration_data = []

    with open("JSON_Data/acceleration_data.json", "r") as j:
        data = json.load(j)
        j.close()

    for x in data:
        if (parsed_start_time <= parser.parse(x["time"]) <= parsed_end_time) and carrier_id == x["id"]:
            acceleration_data.append(x)

    print(acceleration_data)
    return acceleration_data

    # return [{
    #     "time": "2019-01-01T00:00:00Z",
    #     "x": "0.8",
    #     "y": "0.8",
    #     "z": "0.8"
    # }]


def get_all_carrier_ids() -> List[str]:
    carrier_ids = []

    with open("JSON_Data/gps_data.json", "r") as j:
        data = json.load(j)
        j.close()

    for x in data:
        if x["id"] not in carrier_ids:
            carrier_ids.append(x["id"])
    carrier_ids.sort(key=int)
    print(carrier_ids)
    return carrier_ids

    # return ["carrier1", "carrier2"]


def set_carrier_state(carrier_id: str, state: str) -> None:
    print("set_carrier_state")
    print(carrier_id)
    print(state)


# TESTING
# get_gps("10", "2022-02-19T13:39:07Z", "2022-05-10T09:27:05Z")
# get_temperature("10", "2022-02-19T13:39:07Z", "2022-05-10T09:27:05Z")
# get_humidity("10", "2022-02-19T13:39:07Z", "2022-05-10T09:27:05Z")
# get_acceleration("10", "2022-02-19T13:39:07Z", "2022-05-10T09:27:05Z")

get_all_carrier_ids()
