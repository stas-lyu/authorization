

var firebaseConfig = {
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

signUpBtn.addEventListener('click', singUpHandler)
signInBtn.addEventListener('click', signInHandler)
signOut.addEventListener('click', signOutHandler);

function singUpHandler(event) {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value)
    promise.catch(e => alert(e.message))
    alert('Sign Up')
}

function signInHandler(event) {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const promise = auth.signInWithEmailAndPassword(email.value, password.value)
    promise.catch(e => alert(e.message))
}

function signOutHandler(event) {
    auth.signOut();
    alert('Sign Out, Good Bye')
}

auth.onAuthStateChanged(function (user) {

    if (user) {

        const email = user.email;
        alert("Active User " + email);
    } else {

        alert("No Active User");
    }
});
