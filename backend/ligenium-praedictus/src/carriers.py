import json
from typing import List
from dateutil import parser

from classes.CarrierDataset import *


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

    return gps_data


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

    return temp_data


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

    return humidity_data


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

    return acceleration_data


def get_all_carrier_ids() -> List[str]:
    carrier_ids = []

    with open("JSON_Data/gps_data.json", "r") as j:
        data = json.load(j)
        j.close()

    for x in data:
        if x["id"] not in carrier_ids:
            carrier_ids.append(x["id"])
    carrier_ids.sort(key=int)
    return carrier_ids


def set_carrier_state(carrier_id: str, state: str) -> None:
    print("set_carrier_state", carrier_id, 'to', state)

# TESTING
# get_gps("10", "2022-02-19T13:39:07Z", "2022-05-10T09:27:05Z")
# get_temperature("10", "2022-02-19T13:39:07Z", "2022-05-10T09:27:05Z")
# get_humidity("10", "2022-02-19T13:39:07Z", "2022-05-10T09:27:05Z")
# get_acceleration("10", "2022-02-19T13:39:07Z", "2022-05-10T09:27:05Z")

# get_all_carrier_ids()
