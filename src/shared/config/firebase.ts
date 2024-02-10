import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyA516EELptgoFR_OCFJakdqROjWRT3DnjI',
    authDomain: 'yumie-a078b.firebaseapp.com',
    projectId: 'yumie-a078b',
    storageBucket: 'yumie-a078b.appspot.com',
    messagingSenderId: '728464752428',
    appId: '1:728464752428:web:e7dd67ed1048ab1d3ef689',
    measurementId: 'G-68CJMFCCMQ'
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const db = getFirestore()
