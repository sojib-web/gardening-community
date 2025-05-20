// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCN1OMZUTMy1hDuyBHRD0T6LRpwR7QzGfg",
  authDomain: "gardening-community-client.firebaseapp.com",
  projectId: "gardening-community-client",
  storageBucket: "gardening-community-client.firebasestorage.app",
  messagingSenderId: "177697919183",
  appId: "1:177697919183:web:d5e5682cd960adba4527ba",
  measurementId: "G-DNYTP05NPW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
