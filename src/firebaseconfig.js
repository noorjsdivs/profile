import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCtYLYSt1oUVUX4lzZ8umE4-ZUXFY6zB-E",
  authDomain: "chatme-110f3.firebaseapp.com",
  projectId: "chatme-110f3",
  storageBucket: "chatme-110f3.appspot.com",
  messagingSenderId: "1098372405525",
  appId: "1:1098372405525:web:73c13d130263428c6af11c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig;
