from sqlalchemy.orm import sessionmaker

from storage.db import engine
from storage.models import Article


Session = sessionmaker(bind=engine)


def insert_articles(articles):

    session = Session()

    try:

        for article in articles:

            exists = session.query(Article).filter_by(
                url=article["url"]
            ).first()

            if exists:
                continue

            new_article = Article(
                title=article["title"],
                description=article["description"],
                source=article["source"],
                url=article["url"],
                published_at=article["published_at"]
            )

            session.add(new_article)

        session.commit()

        print("Articles inserted successfully.")

    except Exception as e:

        session.rollback()

        print(f"Database insert failed: {e}")

    finally:

        session.close()