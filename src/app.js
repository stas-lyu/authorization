import './styles.css'
import {isValid} from "./utils";

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
    }
}