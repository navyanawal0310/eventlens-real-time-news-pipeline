import json
import os

from datetime import datetime

from ingestion.api_client import fetch_news
from utils.logger import logger


RAW_DATA_PATH = "data/raw"


def save_raw_data(data):

    os.makedirs(RAW_DATA_PATH, exist_ok=True)

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

    filename = f"{RAW_DATA_PATH}/news_{timestamp}.json"

    with open(filename, "w", encoding="utf-8") as file:
        json.dump(data, file, indent=4)

    logger.info(f"Raw data saved: {filename}")

    print(f"Raw data saved: {filename}")


def main():

    try:

        logger.info("Starting news ingestion pipeline")

        data = fetch_news()

        save_raw_data(data)

        logger.info("News ingestion completed successfully")

    except Exception as e:

        logger.error(f"Ingestion pipeline failed: {str(e)}")

        print(f"Error: {e}")


if __name__ == "__main__":
    main()