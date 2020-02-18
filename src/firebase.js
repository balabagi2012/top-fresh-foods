import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/storage";
import "@firebase/auth";
const config = {
  apiKey: "AIzaSyD8MCVj1tMoA-OkpSNjdgmv3h44uTnTQYY",
  authDomain: "topfreshfoods-52bd9.firebaseapp.com",
  databaseURL: "https://topfreshfoods-52bd9.firebaseio.com",
  projectId: "topfreshfoods-52bd9",
  storageBucket: "topfreshfoods-52bd9.appspot.com",
  messagingSenderId: "641806369108"
};
const firebaseApp = firebase.initializeApp(config);
export const auth= firebaseApp.auth();
export const firestore = firebaseApp.firestore();
export const storage = firebaseApp.storage();