from processing.preprocess import clean_text
from ml.predict import predict_category


def transform_article(article):

    title = clean_text(article.get("title"))

    description = clean_text(article.get("description"))

    combined_text = f"{title} {description}"

    category = predict_category(combined_text)

    return {
        "title": title,
        "description": description,
        "source": article.get("source", {}).get("name", "Unknown"),
        "url": article.get("url"),
        "published_at": article.get("publishedAt"),
        "category": category
    }