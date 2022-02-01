// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAszDRxLZEH5gGDkPdu8s_nkqvl0zDhnBw',
	authDomain: 'house-marketplace-app-7348c.firebaseapp.com',
	projectId: 'house-marketplace-app-7348c',
	storageBucket: 'house-marketplace-app-7348c.appspot.com',
	messagingSenderId: '470873781028',
	appId: '1:470873781028:web:36dcb292dfbbd23093b9b1',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
