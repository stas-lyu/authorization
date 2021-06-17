import {isValid} from "./utils";

const form = document.querySelector('form');
form.addEventListener('submit', submitFormHandler);

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
const submitBtn = document.querySelector('.submit');
const emailSignIn = document.querySelector('#emailIn');
const passwordSignIn = document.querySelector('#passwordIn');
emailSignIn.addEventListener('input', ()=> {
    submitBtn.disabled = !isValid(emailSignIn.value)
    console.log(!isValid(emailSignIn.value))
})

signUpBtn.addEventListener('click', singUpHandler)
signInBtn.addEventListener('click', signInHandler)
signOut.addEventListener('click', signOutHandler);

function singUpHandler(event) {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value)
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
