import {isValid} from "./utils";
import firebase from 'firebase/app';
import 'firebase/auth';
import {getHtml} from './html.js'

const html = `
        <div class="row">
            <div class="col s12 m6">
                <div class="description">
                <div class="title">
                    <h1 class="auth_title">КИЇВ ID</h1>
                    <h2 class="auth_subtitle">ЄДИНИЙ ОБЛІКОВИЙ ЗАПИС КИЯНИНА</h2>
                </div>
                <div class="img_bg">
                </div>
                <div class="contact">
                    <span>Підтримка користувачів:</span><br>
                    <a href="tel:0443668044">(044) 366-80-54</a><br>
                    <a class="support__link" href="mailto:support.kyivid@kyivcity.gov.ua">support.kyivid@kyivcity.gov.ua</a>
                </div>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="row">
                    <div class="col s12">
                        <ul class="tabs">
                            <li class="tab col s6"><a class="active" href="#test1">Увійти</a></li>
                            <li class="tab col s6"><a href="#test2">Створити</a></li>
                        </ul>
                    </div>
                    <div id="test1" class="col s12">
                        <form id="signInForm">
                            <div class="modal-content">
                                <div class="form">
                                    <div class="input-container ic1">
                                        <label for="emailIn" class="placeholder">Пошта</label>
                                        <input id="emailIn" class="input" type="email" placeholder=" "/>
                                    </div>
                                    <div class="input-container ic2">
                                        <label for="passwordIn" class="placeholder">Пароль</label>
                                        <input id="passwordIn" class="input" type="password" placeholder=" "/>
                                    </div>
                                    <button type="text" id="signIn" class="submit" disabled>Увійти в Київ ID</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div id="test2" class="col s12">
                        <div id="signUpForm">
                            <div class="modal-content">
                                <div class="form">
                                    <div class="input-container ic1">
                                        <label for="email" class="placeholder">Пошта</label>
                                        <input id="email" class="input" type="email" placeholder=" "/>
                                    </div>
                                    <div class="input-container ic2">
                                        <label for="password" class="placeholder">Пароль</label>
                                        <input id="password" class="input" type="password" placeholder=" "/>
                                    </div>
                                    <button type="text" id="signUp" class="submit" disabled>Створити Київ ID</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`
const container = document.querySelector('.content');

const firebaseConfig = {
    apiKey: "AIzaSyBRi77xSKKht2Uqqp_1ciCWl-YiAjkDprY",
    authDomain: "frontend-1cdaa.firebaseapp.com",
    databaseURL: "https://frontend-1cdaa-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "frontend-1cdaa",
    storageBucket: "frontend-1cdaa.appspot.com",
    messagingSenderId: "529405043051",
    appId: "1:529405043051:web:13d3557cdb9cb9a6a0ec2e"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signOutHandler(event) {
    auth.signOut();
    M.toast({html: 'Sign Out!'})
}

function submitFormHandler(event) {
    event.preventDefault()
}

auth.onAuthStateChanged(function (user) {
    console.log({user})
    if (user) {
        console.log(user);
        const email = user.email;
        M.toast({html: "Active User, " + email})
        container.innerHTML = `
        <h2>Ласкаво просимо, ${email}</h2>
        <button type="button" onclick="signOutHandler()" class="submit" id="signOut">Вийти</button>
        `
        const signOut = document.querySelector('#signOut');
        signOut.addEventListener('click', signOutHandler);
    } else {
        function singUpHandler(event) {
            const promise = auth.createUserWithEmailAndPassword(emailSignUp.value, passwordSignUp.value)
            promise.catch(e => M.toast({html: e.message})
            )
        }

        function signInHandler(event) {
            const promise = auth.signInWithEmailAndPassword(emailSignIn.value, passwordSignIn.value)
            promise.catch(e => M.toast({html: e.message}))
        }
        M.toast({html: "No Active User"})
        container.innerHTML = getHtml();
        const tabs = document.querySelector('.tabs');
        const tabsInit = M.Tabs.init(tabs, {});
        const formSignIn = document.querySelector('#signInForm');
        const formSignUp = document.querySelector('#signUpForm');
        const emailSignUp = document.querySelector('#email');
        const passwordSignUp = document.querySelector('#password');
        const emailSignIn = document.querySelector('#emailIn');
        const passwordSignIn = document.querySelector('#passwordIn');
        const signUpBtn = document.querySelector('#signUp');
        const signInBtn = document.querySelector('#signIn');
        signUpBtn.addEventListener('click', singUpHandler)
        signInBtn.addEventListener('click', signInHandler)
        formSignUp.addEventListener('submit', submitFormHandler);
        formSignIn.addEventListener('submit', submitFormHandler);
        formSignIn.addEventListener('input', () => {
            signInBtn.disabled = isValid(passwordSignIn.value, emailSignIn.value);
        })
        formSignUp.addEventListener('input', () => {
            signUpBtn.disabled = isValid(passwordSignUp.value, emailSignUp.value);
        })
    }
});

