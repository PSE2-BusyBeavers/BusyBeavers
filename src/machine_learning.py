import random
from typing import List

class BrokenCarrier:
  carrier_id: str
  assumption: str

def get_broken_carriers(carrier_datasets, external_data) -> List[BrokenCarrier]:
  broken_carriers = []

  for carrier in carrier_datasets:
    if random.randint(0, 100) <= 30:
      broken_carriers.append(BrokenCarrier(carrier.carrier_id, "wheel"))

  return broken_carriers
