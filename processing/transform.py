from processing.preprocess import clean_text


def transform_article(article):

    return {
        "title": clean_text(article.get("title")),
        "description": clean_text(article.get("description")),
        "source": article.get("source", {}).get("name", "Unknown"),
        "url": article.get("url"),
        "published_at": article.get("publishedAt")
    }