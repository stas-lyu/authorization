import {isValid} from "./utils";

export function getHtml() {
    return `
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
                                        <input id="email" class="input" type="email" autocomplete="false" placeholder=" "/>
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
}

export function logicHtml(html) {

}