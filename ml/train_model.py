import pandas as pd
import pickle

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline


def train_model():

    df = pd.read_csv("data/training/news_dataset.csv")

    X = df["text"]

    y = df["category"]

    pipeline = Pipeline([
        ("tfidf", TfidfVectorizer()),
        ("model", LogisticRegression())
    ])

    pipeline.fit(X, y)

    with open("ml/news_classifier.pkl", "wb") as file:
        pickle.dump(pipeline, file)

    print("Model trained and saved.")

if __name__ == "__main__":
    train_model()