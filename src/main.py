import time
from typing import List
from carriers import get_acceleration, get_gps,  get_all_carrier_ids, set_carrier_state, get_location
from external_data import get_external_data
from machineLearning.analysis import get_broken_carriers
from maintenance_orders import create_maintenance_order
from classes.CarrierDataset import CarrierDataset
from weather import get_weather

while True:
    today_start = "2019-01-01T00:00:00Z"
    today_end = "2023-01-01T23:59:59Z"
    location_lat = "48.13"
    location_long = "11.57"
    carrier_ids = get_all_carrier_ids()

    carrier_datasets: List[CarrierDataset] = []

    for carrier_id in carrier_ids:
        gps = get_gps(carrier_id, today_start, today_end)
        locations = get_location(carrier_id)
        weather = get_weather(locations)

        humidity = weather.humidity
        temperature = weather.temp
        acceleration = get_acceleration(carrier_id, today_start, today_end)

        print(weather)

        carrier_datasets.append({
            "carrier_id": carrier_id,
            "gps": gps,
            "temperature": temperature,
            "humidity": humidity,
            "acceleration": acceleration
        })

    external_data = get_external_data(location_lat, location_long, today_start)

    brokenCarrier = get_broken_carriers(carrier_datasets, external_data)

    for carrier in brokenCarrier:
        create_maintenance_order(carrier.id, carrier.assumption)
        set_carrier_state(carrier.id, "broken")

    # wait 60 seconds before we do the next check
    time.sleep(60)
