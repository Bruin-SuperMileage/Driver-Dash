import pyrebase
import time
from datetime import datetime
import random

config = { #firebase authentification
    "apiKey": "AIzaSyAnFTWZTgWEugKOSUM6WY_NkxrPzRzn6dU",
    "authDomain": "bruin-racing.firebaseapp.com",
    "databaseURL": "https://bruin-racing.firebaseio.com",
    "projectId": "bruin-racing",
    "storageBucket": "bucket.appspot.com"
}

firebase = pyrebase.initialize_app(config)

db = firebase.database()

num = 0
trialName = 97820
running = "True"
speed = 0
goUp = True
increment = 0
lap = 0
while (True):
  now = 0
  current_time = 0
  timeName = 0
  increment += 1
  
  if increment%5 == 0:
    lap+=1
  
  if speed == 0:
    goUp = True
  if speed == 70:
    goUp = False
  
  if goUp == True:
    speed+=1
  if goUp == False:
    speed-=1
  
  if running == "True":
    running = "False"
  else:
    running = "True"
    
  db.update(
    {"Latest Trial": "97820",
    "Latest Time": 0, 
    "Total": 0})

  db.child(trialName).child(timeName).child("speed").update(
    {"speed": speed})

  db.child(trialName).child(timeName).child("lap").update(
    {"current": lap,
    "running": running})
  time.sleep(1)