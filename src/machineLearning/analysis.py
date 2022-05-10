import random
from tokenize import String
from typing import List
from classes.BrokenCarrier import BrokenCarrier
from numbers import Number
from classes.CarrierDataset import CarrierDataset
from external_data import ExternalData
from machineLearning.statistic import get_outliers_by_indicies


def get_broken_carriers(carrier_datasets: List[CarrierDataset], external_data: ExternalData) -> List[BrokenCarrier]:
    broken_carriers: List[BrokenCarrier] = []
    interpret_external_data(external_data)
    broken_carriers = broken_carriers + get_invalid_gps(carrier_datasets)
    broken_carriers += get_invalid_temperature(carrier_datasets)
    broken_carriers += get_invalid_accelleration(carrier_datasets)
    broken_carriers += get_invalid_humidity(carrier_datasets)
    return broken_carriers


# TODO: Add externalData


def interpret_external_data(external_data: ExternalData):
    if(external_data):
        return


def deconstruct_dataset(carrier_datasets: List[CarrierDataset], variable: String) -> List[List[Number]]:
    values = []
    ids = []
    for carrier in carrier_datasets:
        for var in carrier[variable]:
            values.append(var)
            ids.append(carrier["carrier_id"])
    return [values, ids]


def get_invalid_gps(carrier_datasets: List[CarrierDataset]):
    values, ids = deconstruct_dataset(carrier_datasets, "gps")
    lat: List[float] = []
    lon: List[float] = []
    for gps in values:
        lat.append(float(gps["lat"]))
        lon.append(float(gps["lon"]))

    outliners_lat = get_outliers_by_indicies(lat)
    outliners_lon = get_outliers_by_indicies(lon)
    invalid_ids_lan = outliners_lat[0] + outliners_lat[1]
    invalid_ids_lon = outliners_lon[0] + outliners_lon[1]
    invalid_ids = invalid_ids_lan + invalid_ids_lon
    carriers = []
    for invalid_id in invalid_ids:
        carriers.append(BrokenCarrier(ids[invalid_id], "GPS invalid"))
    return carriers


def get_invalid_accelleration(carrier_datasets: List[CarrierDataset]):
    values, ids = deconstruct_dataset(carrier_datasets, "acceleration")
    x: List[float] = []
    y: List[float] = []
    z: List[float] = []
    for gps in values:
        x.append(float(gps["x"]))
        y.append(float(gps["y"]))
        z.append(float(gps["z"]))

    outliners_x = get_outliers_by_indicies(x)
    outliners_y = get_outliers_by_indicies(y)
    outliners_z = get_outliers_by_indicies(z)
    invalid_ids_x = outliners_x[0] + outliners_x[1]
    invalid_ids_y = outliners_y[0] + outliners_y[1]
    invalid_ids_z = outliners_z[0] + outliners_z[1]
    invalid_ids = invalid_ids_x + invalid_ids_y + invalid_ids_z
    carriers = []
    for invalid_id in invalid_ids:
        carriers.append(BrokenCarrier(ids[invalid_id], "Acceleration invalid"))
    return carriers


def get_invalid_humidity(carrier_datasets: List[CarrierDataset]):
    values, ids = deconstruct_dataset(carrier_datasets, "humidity")
    humidity = list(map(lambda x: float(x["HUMID"]), values))
    outliners = get_outliers_by_indicies(humidity)
    invalid_ids = outliners[0] + outliners[1]
    carriers = []
    for invalid_id in invalid_ids:
        carriers.append(BrokenCarrier(ids[invalid_id], "Humidity invalid"))
    return carriers


def get_invalid_temperature(carrier_datasets: List[CarrierDataset]) -> List[BrokenCarrier]:
    values, ids = deconstruct_dataset(carrier_datasets, "temperature")
    temperatures = list(map(lambda x: float(x["TEMP"]), values))
    outliners = get_outliers_by_indicies(temperatures)
    invalid_indicies = outliners[0] + outliners[1]
    carriers = []

    for index in invalid_indicies:
        carriers.append(BrokenCarrier(
            ids[index], "Temperature invalid: " + str(temperatures[index])))
    return carriers
