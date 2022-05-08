import random
from typing import List

from classes.CarrierDataset import CarrierDataset

# TODO: Add externalData


def get_broken_carriers(carrier_datasets: CarrierDataset) -> List[BrokenCarrier]:
    broken_carriers = []
    for carrier in carrier_datasets:
        if random.randint(0, 100) <= 30:
            broken_carriers.append(BrokenCarrier(carrier.carrier_id, "wheel"))

    return broken_carriers
