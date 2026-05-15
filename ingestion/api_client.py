import requests
from config.settings import NEWS_API_KEY

BASE_URL = "https://newsapi.org/v2/top-headlines"


def fetch_news(country="us", category="technology", page_size=20):

    params = {
        "apiKey": NEWS_API_KEY,
        "country": country,
        "category": category,
        "pageSize": page_size
    }

    response = requests.get(BASE_URL, params=params)

    response.raise_for_status()

    return response.json()