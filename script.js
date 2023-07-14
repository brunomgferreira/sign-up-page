const f_name = document.getElementById('f-name');
const l_name = document.getElementById('l-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const user_password = document.getElementById('user-password');
const user_password_confirm = document.getElementById('user-password-confirm');

f_name.addEventListener('focus', labelActive);
f_name.addEventListener('blur', labelInactive);

l_name.addEventListener('focus', labelActive);
l_name.addEventListener('blur', labelInactive);

email.addEventListener('focus', labelActive);
email.addEventListener('blur', labelInactive);

phone.addEventListener('focus', labelActive);
phone.addEventListener('blur', labelInactive);

user_password.addEventListener('focus', labelActive);
user_password.addEventListener('blur', labelInactive);

user_password_confirm.addEventListener('focus', labelActive);
user_password_confirm.addEventListener('blur', labelInactive);


function labelActive(e) {
    e.target.previousElementSibling.style.opacity = 1;
    e.target.previousElementSibling.backgroundColor = 'var(--gray)';
    e.target.nextElementSibling.style.opacity = 0;
}

function labelInactive(e) {
    e.target.previousElementSibling.style.opacity = 0;
    if (e.target.value.trim() !== '') e.target.nextElementSibling.style.opacity = 0;
    else e.target.nextElementSibling.style.opacity = 1;
}

window.onload = () => {
    if(f_name.value.trim() !== '') f_name.nextElementSibling.style.opacity = 0;
    if(l_name.value.trim() !== '') l_name.nextElementSibling.style.opacity = 0;
    if(email.value.trim() !== '') email.nextElementSibling.style.opacity = 0;
    if(phone.value.trim() !== '') phone.nextElementSibling.style.opacity = 0;
    if(user_password.value.trim() !== '') user_password.nextElementSibling.style.opacity = 0;
    if(user_password_confirm.value.trim() !== '') user_password_confirm.nextElementSibling.style.opacity = 0;
}