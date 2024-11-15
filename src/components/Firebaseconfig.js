// Import Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuMPjJokeovs5DZLy-6OUZ_YbKADKkS2M",
    authDomain: "fir-login-b8d1c.firebaseapp.com",
    projectId: "fir-login-b8d1c",
    storageBucket: "fir-login-b8d1c.firebasestorage.app",
    messagingSenderId: "73553114357",
    appId: "1:73553114357:web:c6d9ee1218d33db3e081bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Auth Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export the auth and provider
export { auth, provider };
