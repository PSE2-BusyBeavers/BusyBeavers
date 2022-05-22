import requests

from classes.CarrierDataset import WeatherEntry

# Enter the API key you got from the OpenWeatherMap website
api_key = "d09c9cf56fbbfe161b810d3aa2776572"
base_url = "http://api.openweathermap.org/data/2.5/weather?"


def get_weather(location: str) -> WeatherEntry:
    data: WeatherEntry = WeatherEntry()

    complete_url = base_url + "appid=" + \
        'd850f7f52bf19300a9eb4b0aa6b80f0d' + "&q=" + location
    response = requests.get(complete_url)
    x = response.json()

    if x["cod"] != "404":
        y = x["main"]

    data.temp = y["temp"]
    print(x)
    data.humidity = y["humidity"]

    return data
