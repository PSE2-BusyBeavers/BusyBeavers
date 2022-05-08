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
    # broken_carriers = broken_carriers + get_invalid_gps(carrier_datasets)
    broken_carriers += get_invalid_temperature(carrier_datasets)

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

    outliners = get_outliers_by_indicies(values)
    invalid_ids = outliners[0] + outliners[1]
    carriers = []
    for invalid_id in invalid_ids:
        carriers.append(BrokenCarrier(ids[invalid_id], "GPS invalid"))
    return carriers


def get_invalid_accelleration(carrier_datasets: List[CarrierDataset]):
    values, ids = deconstruct_dataset(carrier_datasets, "acceleration")
    outliners = get_outliers_by_indicies(values)
    invalid_ids = outliners[0] + outliners[1]
    carriers = []
    for invalid_id in invalid_ids:
        carriers.append(BrokenCarrier(ids[invalid_id], "Acceleration invalid"))
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
