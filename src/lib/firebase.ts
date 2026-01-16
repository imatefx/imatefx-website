import { initializeApp } from "firebase/app"
import { getAnalytics, isSupported } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyCF9jADfaADT0iGqmSEoeXLtY3DAMpPRwI",
  authDomain: "imatefx-website.firebaseapp.com",
  projectId: "imatefx-website",
  storageBucket: "imatefx-website.firebasestorage.app",
  messagingSenderId: "1006964643927",
  appId: "1:1006964643927:web:ee8287c99176bd5d11ab12",
  measurementId: "G-CPF9V3968C",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// Initialize Analytics only in browser and when supported
export const initAnalytics = async () => {
  if (typeof window !== "undefined" && (await isSupported())) {
    return getAnalytics(app)
  }
  return null
}
