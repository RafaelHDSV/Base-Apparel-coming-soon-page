let iconError = document.querySelector('.icon_error')
let hide = document.getElementById('hide')
let hideMsg = document.getElementById('hide_msg')
let btn_primary = document.querySelector('.btn_primary')
let email = document.getElementById('email')
let re = /\S+@\S+\.\S+/;

btn_primary.addEventListener('click', () => {
    if (email.value == 'Registered Email') {
        email.value = ''
        hide.classList.add('hide')
        hideMsg.classList.add('hide')
        email.style.border = ('1px solid #c6c6c6')
    } else {
        if (re.test(email.value) == false) {
            hide.classList.remove('hide')
            hideMsg.classList.remove('hide')
            email.style.border = ('1px solid var(--soft_red)')
        } else {
            hide.classList.add('hide')
            hideMsg.classList.add('hide')
            email.style.border = ('1px solid #c6c6c6')
            email.value = 'Registered Email'
        }
    }
})