import {apiKeyHidden} from './config';
import firebase from 'firebase';

// Set the configuration for your app
// TODO: Replace with your project's config object

var config = {
  // apiKey: "AIzaSyAnFTWZTgWEugKOSUM6WY_NkxrPzRzn6dU",
  apiKey: apiKeyHidden,
  authDomain: "smv-daq.firebaseapp.com",
  databaseURL: "https://smv-daq.firebaseio.com",
  projectId: "smv-daq",
  storageBucket: "bucket.appspot.com"
};

firebase.initializeApp(config);

export default firebase;