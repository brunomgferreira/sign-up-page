const f_name = document.getElementById('f-name');
const l_name = document.getElementById('l-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const user_password = document.getElementById('user-password');
const user_password_confirm = document.getElementById('user-password-confirm');

const f_name_span = f_name.previousElementSibling;
const l_name_span = l_name.previousElementSibling;
const email_span = email.previousElementSibling;
const phone_span = phone.previousElementSibling;
const user_password_span = user_password.previousElementSibling;
const user_password_confirm_span = user_password_confirm.previousElementSibling;

const f_name_label = document.querySelector('label[for="f-name"]');
const l_name_label = document.querySelector('label[for="l-name"]');
const email_label = document.querySelector('label[for="email"]');
const phone_label = document.querySelector('label[for="phone"]');
const user_password_label = document.querySelector('label[for="user-password"]');
const user_password_confirm_label = document.querySelector('label[for="user-password-confirm"]');

f_name.addEventListener('focus', labelActive);
f_name.addEventListener('blur', labelInactive);
l_name.addEventListener('focus', l_name_func);
email.addEventListener('focus', email_func);
phone.addEventListener('focus', phone_func);
user_password.addEventListener('focus', user_password_func);
user_password_confirm.addEventListener('focus', user_password_confirm_func);


function labelActive() {
    f_name_label.style.opacity = 1;
    f_name_label.backgroundColor = 'var(--gray)';
    f_name_span.style.opacity = 0;
}

function labelInactive() {
    f_name_label.style.opacity = 0;
    f_name_span.style.opacity = 1;
}

function l_name_func(e) {

}

function email_func(e) {

}

function phone_func(e) {

}

function user_password_func(e) {

}

function user_password_confirm_func(e) {

}