import {isValid} from "./utils";
import firebase from 'firebase/app';
import 'firebase/auth';

const formSignIn = document.querySelector('#signInForm');
const formSignUp = document.querySelector('#signUpForm');

formSignUp.addEventListener('submit', submitFormHandler);
formSignIn.addEventListener('submit', submitFormHandler);

function submitFormHandler(event) {
    event.preventDefault()
}

const firebaseConfig = {
    apiKey: "AIzaSyBRi77xSKKht2Uqqp_1ciCWl-YiAjkDprY",
    authDomain: "frontend-1cdaa.firebaseapp.com",
    databaseURL: "https://frontend-1cdaa-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "frontend-1cdaa",
    storageBucket: "frontend-1cdaa.appspot.com",
    messagingSenderId: "529405043051",
    appId: "1:529405043051:web:13d3557cdb9cb9a6a0ec2e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const signUpBtn = document.querySelector('#signUp');
const signInBtn = document.querySelector('#signIn');
const signOut = document.querySelector('#signOut');
const signInModalBtn = document.querySelector('#signInModalOpen');
const emailSignUp = document.querySelector('#email');
const passwordSignUp = document.querySelector('#password');
const emailSignIn = document.querySelector('#emailIn');
const passwordSignIn = document.querySelector('#passwordIn');

formSignIn.addEventListener('input', () => {
    signInBtn.disabled = isValid(emailSignIn.value, passwordSignIn.value);
})
formSignUp.addEventListener('input', () => {
    signUpBtn.disabled = isValid(emailSignUp.value, passwordSignUp.value);
})

signUpBtn.addEventListener('click', singUpHandler)
signInBtn.addEventListener('click', signInHandler)
signOut.addEventListener('click', signOutHandler);

function singUpHandler(event) {
    const promise = auth.createUserWithEmailAndPassword(emailSignUp.value, passwordSignUp.value)
    promise.catch(e => M.toast({html: e.message})
    )
}

function signInHandler(event) {
    const promise = auth.signInWithEmailAndPassword(emailSignIn.value, passwordSignIn.value)
    promise.catch(e => M.toast({html: e.message}))
}

function signOutHandler(event) {
    auth.signOut();
    M.toast({html: 'Sign Out!'})
}

auth.onAuthStateChanged(function (user) {
    console.log({user})
    if (user) {
        console.log(user);
        const email = user.email;
        M.toast({html: "Active User, " + email})
        signInModalBtn.id = 'signOut';
        signInModalBtn.innerText = 'Выйти'
        signInModalBtn.removeEventListener('click', signInHandler)
        signInModalBtn.addEventListener('click', signOutHandler)
    } else {
        M.toast({html: "No Active User"})
        signInModalBtn.id = 'signIn';
        signInModalBtn.innerText = 'Войти'
        signInModalBtn.removeEventListener('click', signOutHandler)
    }
});
