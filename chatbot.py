#import necessary libraries
import io
import random
import string # to process standard python strings
import warnings
#import numpy as np
#from sklearn.feature_extraction.text import TfidfVectorizer
#from sklearn.metrics.pairwise import cosine_similarity
import warnings
warnings.filterwarnings('ignore')

#import nltk
#from nltk.stem import WordNetLemmatizer

# Keyword Matching
GREETING_INPUTS = ("hello")
GREETING_RESPONSES = ["hi"]

def greeting(sentence):
    """If user's input is a greeting, return a greeting response"""
    for word in sentence.split():
        if word.lower() in GREETING_INPUTS:
            return random.choice(GREETING_RESPONSES)


##commit 2

# Generating response
#def response(user_response):
    #robo_response=''


#switch function
def switch(user_response):
    print("user response: ", user_response)
    switcher = {
        "1": "addiction link",
        "2": "prevention link",
        "3": "treatment link",
        "4": "recovery link",
    }
    print(switcher[user_response])
   

