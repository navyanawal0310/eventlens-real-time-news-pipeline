from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    DateTime
)
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Article(Base):
    __tablename__ = "articles"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    description = Column(Text)
    source = Column(String)
    url = Column(String, unique=True)
    category = Column(String)
    published_at = Column(DateTime)