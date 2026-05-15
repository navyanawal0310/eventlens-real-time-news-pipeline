import pickle


with open("ml/news_classifier.pkl", "rb") as file:
    model = pickle.load(file)


def predict_category(text):

    prediction = model.predict([text])[0]

    return prediction