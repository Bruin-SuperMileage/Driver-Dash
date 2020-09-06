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

while (True):
  now = 0
  current_time = 0
  timeName = 0
  
  lapNumber = db.child("Lap").get() #fetch lap number
  lapNumber = lapNumber.val()
  lapRunning = db.child("Running").get() #fetch running state
  lapRunning = lapRunning.val()

  db.update(
    {"Latest Trial": "97820",
    "Latest Time": 0})

  db.child(trialName).child(timeName).child("battery").update(
    {"amp": random.randint(0,255),
    "remaining": random.randint(0,255),
    "temp": random.randint(0,255),
    "volt": random.randint(0,255)})

  db.child(trialName).child(timeName).child("driver").update(
    {"image": "./images/Caroline.jpg",
    "message": "I Believe In You!!!",
    "name": "Caroline",
    "phone": "999-999-999",
    "social": "@CarolineDriver"})

  db.child(trialName).child(timeName).child("gps").update(
    {"lat": random.randint(0,255),
    "long": random.randint(0,255)})

  db.child(trialName).child(timeName).child("joulemeter").update(
    {"amp": random.randint(0,255),
    "avg": random.randint(0,255),
    "instant": random.randint(0,255),
    "peak": random.randint(0,255),
    "volt": random.randint(0,255),
    "GyX": random.randint(0,255),
    "GyY": random.randint(0,255),
    "GyZ": random.randint(0,255),
    "Altitude": random.randint(0,255)})

  db.child(trialName).child(timeName).child("lap").update(
    {"current": random.randint(0,255),
    "fastest": random.randint(0,255),
    "number": random.randint(0,255),
    "remaining": random.randint(0,255),
    "slowest": random.randint(0,255),
    "total": random.randint(0,255),
    "running": "True"})

  db.child(trialName).child(timeName).child("motor").update(
    {"bhp": random.randint(0,255),
    "temp": random.randint(0,255),
    "volt": random.randint(0,255)})

  db.child(trialName).child(timeName).child("speed").update(
    {"acceleration x": random.randint(0,255),
    "acceleration y": random.randint(0,255),
    "acceleration z": random.randint(0,255),
    "avg": random.randint(0,255),
    "rpm": random.randint(0,255),
    "speed": random.randint(0,70),
    "throttle": random.randint(0,255)})

  db.child(trialName).child(timeName).child("track").update(
    {"name": "Parking Garage",
    "trial": 1,
    "temp": random.randint(0,255)})

  db.child(trialName).child(timeName).child("IMU").update(
    {"MagX": random.randint(0,255),
    "MagY": random.randint(0,255),
    "MagZ": random.randint(0,255),
    "Pitch": random.randint(0,255),
    "Roll": random.randint(0,255),
    "Heading": random.randint(0,255)})