import json
import os

from datetime import datetime

from ingestion.api_client import fetch_news

from processing.transform import transform_article
from processing.deduplicate import remove_duplicates

from storage.insert_articles import insert_articles

from utils.logger import logger


RAW_DATA_PATH = "data/raw"


def save_raw_data(data):

    os.makedirs(RAW_DATA_PATH, exist_ok=True)

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

    filename = f"{RAW_DATA_PATH}/news_{timestamp}.json"

    with open(filename, "w", encoding="utf-8") as file:
        json.dump(data, file, indent=4)

    logger.info(f"Raw data saved: {filename}")


def process_articles(raw_articles):

    transformed = [
        transform_article(article)
        for article in raw_articles
    ]

    unique_articles = remove_duplicates(transformed)

    return unique_articles


def main():

    try:

        logger.info("Starting ingestion pipeline")

        data = fetch_news()

        save_raw_data(data)

        raw_articles = data.get("articles", [])

        processed_articles = process_articles(raw_articles)

        insert_articles(processed_articles)

        logger.info(
            f"Inserted {len(processed_articles)} articles successfully"
        )

        print(f"Inserted {len(processed_articles)} articles.")

    except Exception as e:

        logger.error(f"Pipeline failed: {str(e)}")

        print(f"Error: {e}")


if __name__ == "__main__":
    main()