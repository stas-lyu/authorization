import {Question} from "./question";
import './styles.css';
import {isValid} from "./utils";
import {authWithEmailAndPassword} from "../authorization";

const form = document.querySelector('#form');
const input = form.querySelector('input');
const submitButton = form.querySelector('#submit')

input.addEventListener('input', ()=> {
    submitButton.disabled = !isValid(input.value)
})

form.addEventListener('submit', submitFormHandler)

function submitFormHandler(event) {
    event.preventDefault()

    if(isValid(input.value)) {
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }
        submitButton.disabled = true

        Question.create(question).then(()=> {
            console.log('Question', question)
            input.value = ''
            input.className = ''
            submitButton.disabled = false
        })
    }
}

document.querySelector('#auth-form')
    .addEventListener('submit', authFormHandler, {once: true})

function authFormHandler(event) {
    const btn = event.target.querySelector('button');
    event.preventDefault()
    const email = event.target.querySelector('#email').value;
    const password = event.target.querySelector('#password').value;
    btn.disabled = true
    authWithEmailAndPassword(email, password)
        .then(Question.fetch)
        .then(renderModalAfterAuth)
        .then(()=> btn.disabled = false)
}

function renderModalAfterAuth(content) {
    console.log(content);
}