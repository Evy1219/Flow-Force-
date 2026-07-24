// Firebase Configuration

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyB0V5LFh8aGSEJ7uvDIbhoMPrqD63jPTyo",

authDomain: "flow-force.firebaseapp.com",

projectId: "flow-force",

storageBucket: "flow-force.firebasestorage.app",

messagingSenderId: "559516940919",

appId: "1:559516940919:web:b27016886ad9905a1f6472",

measurementId: "G-4T7RJQ0FDZ"

};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);
